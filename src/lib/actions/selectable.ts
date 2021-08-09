import type {IActionHandle} from "./actions";
import {nextbind, prevbind, selectbind} from "./keybind";

export type ISelectableAction = IActionHandle<ISelectableOptions>;

export interface ISelectableOptions {
    output: HTMLElement;
}

export function selectable(element: HTMLElement, options: ISelectableOptions): ISelectableAction {
    let {output} = options;

    const next = nextbind(element, (event) => {
        event.preventDefault();
        if (!event.detail.active) return;

        const current_entry = output.querySelector(".svst-entry[aria-selected='true']");
        let next_entry =
            current_entry?.parentElement?.nextElementSibling?.firstElementChild ??
            output.querySelector(".svst-result:first-child > .svst-entry");

        current_entry?.removeAttribute("aria-selected");
        if (next_entry) {
            next_entry.setAttribute("aria-selected", "true");
            next_entry.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    });

    const prev = prevbind(element, (event) => {
        event.preventDefault();
        if (!event.detail.active) return;

        const current_entry = output.querySelector(".svst-entry[aria-selected='true']");
        let prev_entry =
            current_entry?.parentElement?.previousElementSibling?.firstElementChild ??
            output.querySelector(".svst-result:last-child > .svst-entry");

        current_entry?.removeAttribute("aria-selected");
        if (prev_entry) {
            prev_entry.setAttribute("aria-selected", "true");
            prev_entry.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    });

    const select = selectbind(element, (event) => {
        event.preventDefault();
        if (!event.detail.active) return;

        const current_entry = output.querySelector(".svst-entry[aria-selected='true']");
        if (current_entry) (current_entry as HTMLAnchorElement).click();
    });

    return {
        destroy() {
            next.destroy();
            prev.destroy();
            select.destroy();
        },

        update(options) {
            ({output} = options);
        },
    };
}
