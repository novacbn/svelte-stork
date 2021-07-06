import { SvelteComponentTyped } from "svelte";
import type { IStorkEntry, IStorkExcerpt, IStorkHighlightRange, IStorkQuery } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLAnchorElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
        excerpts: IStorkExcerpt[];
        excerpts_maximum?: number | undefined;
        entry: IStorkEntry;
        query: IStorkQuery;
        title_highlight_ranges: IStorkHighlightRange[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkEntryProps = typeof __propDef.props;
export declare type StorkEntryEvents = typeof __propDef.events;
export declare type StorkEntrySlots = typeof __propDef.slots;
export default class StorkEntry extends SvelteComponentTyped<StorkEntryProps, StorkEntryEvents, StorkEntrySlots> {
}
export {};
