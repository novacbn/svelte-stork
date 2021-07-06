import { SvelteComponentTyped } from "svelte";
import type { IStorkResult } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
        results: IStorkResult[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkMessageProps = typeof __propDef.props;
export declare type StorkMessageEvents = typeof __propDef.events;
export declare type StorkMessageSlots = typeof __propDef.slots;
export default class StorkMessage extends SvelteComponentTyped<StorkMessageProps, StorkMessageEvents, StorkMessageSlots> {
}
export {};
