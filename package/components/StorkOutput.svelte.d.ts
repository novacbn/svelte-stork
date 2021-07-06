import { SvelteComponentTyped } from "svelte";
import type { IStorkQuery, IStorkResult } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
        excerpts_maximum?: number | undefined;
        query?: IStorkQuery | undefined;
        results?: IStorkResult[] | undefined;
        results_maximum?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkOutputProps = typeof __propDef.props;
export declare type StorkOutputEvents = typeof __propDef.events;
export declare type StorkOutputSlots = typeof __propDef.slots;
export default class StorkOutput extends SvelteComponentTyped<StorkOutputProps, StorkOutputEvents, StorkOutputSlots> {
}
export {};
