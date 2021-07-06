import { SvelteComponentTyped } from "svelte";
import type { IStorkQuery, IStorkResult } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLLIElement | null | undefined;
        style?: string | undefined;
        excerpts_maximum?: number | undefined;
        result: IStorkResult;
        query: IStorkQuery;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkResultProps = typeof __propDef.props;
export declare type StorkResultEvents = typeof __propDef.events;
export declare type StorkResultSlots = typeof __propDef.slots;
export default class StorkResult extends SvelteComponentTyped<StorkResultProps, StorkResultEvents, StorkResultSlots> {
}
export {};
