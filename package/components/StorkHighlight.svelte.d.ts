import { SvelteComponentTyped } from "svelte";
import type { IStorkHighlightRange } from "../stores/search";
declare const __propDef: {
    props: {
        style?: string | undefined;
        class?: string | undefined;
        ranges?: IStorkHighlightRange[] | undefined;
        text: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkHighlightProps = typeof __propDef.props;
export declare type StorkHighlightEvents = typeof __propDef.events;
export declare type StorkHighlightSlots = typeof __propDef.slots;
export default class StorkHighlight extends SvelteComponentTyped<StorkHighlightProps, StorkHighlightEvents, StorkHighlightSlots> {
}
export {};
