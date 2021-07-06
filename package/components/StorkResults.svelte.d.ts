import { SvelteComponentTyped } from "svelte";
import type { IStorkQuery, IStorkResult } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLUListElement | null | undefined;
        style?: string | undefined;
        excerpts_maximum?: number | undefined;
        results: IStorkResult[];
        query: IStorkQuery;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkResultsProps = typeof __propDef.props;
export declare type StorkResultsEvents = typeof __propDef.events;
export declare type StorkResultsSlots = typeof __propDef.slots;
export default class StorkResults extends SvelteComponentTyped<StorkResultsProps, StorkResultsEvents, StorkResultsSlots> {
}
export {};
