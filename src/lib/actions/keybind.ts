import {throttle} from "../util/functional";

import type {IActionHandle} from "./actions";

export type IKeybindAction = IActionHandle<IKeybindOptions>;

export type IKeybindEvent = CustomEvent<{active: boolean}>;

interface IBindState {
    is_active(): boolean;

    update(key: string, state: boolean): void;
}

export interface IKeybindOptions {
    binds: string | string[];

    repeat?: boolean;

    repeat_throttle?: number;

    on_bind: (event: IKeybindEvent) => void;
}

function bindstate(binds: string | string[]): IBindState {
    const lookups = (typeof binds === "string" ? [binds] : binds).map((bind) => {
        const entries = bind.split("+").map<[string, boolean]>((key) => [key, false]);

        return new Map(entries);
    });

    return {
        is_active() {
            return (
                lookups.find((lookup) => {
                    for (const [, active] of lookup) {
                        if (!active) return false;
                    }

                    return true;
                }) !== undefined
            );
        },

        update(key, state) {
            key = key.toLowerCase();

            for (const lookup of lookups) {
                if (lookup.has(key)) lookup.set(key, state);
            }
        },
    };
}

export function keybind(element: HTMLElement, options: IKeybindOptions): IKeybindAction {
    let {binds, repeat = false, repeat_throttle = 100, on_bind} = options;

    let cache = false;
    let state = bindstate(binds);
    let _on_bind = throttle(on_bind, repeat_throttle);

    function make_key_listener(is_down: boolean): (event: KeyboardEvent) => void {
        return (event) => {
            if (event.repeat && !repeat) return;
            state.update(event.key, is_down);

            const active = state.is_active();
            if (cache !== active || repeat) {
                const detail: IKeybindEvent["detail"] = {active};
                const custom_event: IKeybindEvent = new CustomEvent("bind", {
                    cancelable: true,
                    detail,
                });

                (event.repeat ? _on_bind : on_bind)(custom_event);

                if (custom_event.cancelBubble) custom_event.stopPropagation();
                if (custom_event.defaultPrevented) custom_event.preventDefault();

                cache = active;
            }
        };
    }

    const on_key_down = make_key_listener(true);
    const on_key_up = make_key_listener(false);

    element.addEventListener("keydown", on_key_down);
    element.addEventListener("keyup", on_key_up);

    return {
        destroy() {
            element.removeEventListener("keydown", on_key_down);
            element.removeEventListener("keyup", on_key_up);
        },

        update(options) {
            ({binds, repeat = false, on_bind} = options);
            state = bindstate(binds);
        },
    };
}

export const nextbind = (element: HTMLElement, on_bind: IKeybindOptions["on_bind"]) =>
    keybind(element, {binds: "arrowdown", repeat: true, repeat_throttle: 250, on_bind});

export const prevbind = (element: HTMLElement, on_bind: IKeybindOptions["on_bind"]) =>
    keybind(element, {binds: "arrowup", repeat: true, repeat_throttle: 250, on_bind});

export const selectbind = (element: HTMLElement, on_bind: IKeybindOptions["on_bind"]) =>
    keybind(element, {binds: "enter", on_bind});
