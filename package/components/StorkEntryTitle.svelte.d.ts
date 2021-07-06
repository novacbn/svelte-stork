import { SvelteComponentTyped } from "svelte";
import type { IStorkEntry, IStorkHighlightRange } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLParagraphElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
        entry: IStorkEntry;
        title_highlight_ranges: IStorkHighlightRange[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkEntryTitleProps = typeof __propDef.props;
export declare type StorkEntryTitleEvents = typeof __propDef.events;
export declare type StorkEntryTitleSlots = typeof __propDef.slots;
export default class StorkEntryTitle extends SvelteComponentTyped<StorkEntryTitleProps, StorkEntryTitleEvents, StorkEntryTitleSlots> {
}
export {};
