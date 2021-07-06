import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkAttributionProps = typeof __propDef.props;
export declare type StorkAttributionEvents = typeof __propDef.events;
export declare type StorkAttributionSlots = typeof __propDef.slots;
export default class StorkAttribution extends SvelteComponentTyped<StorkAttributionProps, StorkAttributionEvents, StorkAttributionSlots> {
}
export {};
