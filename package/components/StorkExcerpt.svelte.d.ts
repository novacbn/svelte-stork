import { SvelteComponentTyped } from "svelte";
import type { IStorkExcerpt } from "../stores/search";
declare const __propDef: {
    props: {
        element?: HTMLParagraphElement | null | undefined;
        style?: string | undefined;
        class?: string | undefined;
        excerpt: IStorkExcerpt;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StorkExcerptProps = typeof __propDef.props;
export declare type StorkExcerptEvents = typeof __propDef.events;
export declare type StorkExcerptSlots = typeof __propDef.slots;
export default class StorkExcerpt extends SvelteComponentTyped<StorkExcerptProps, StorkExcerptEvents, StorkExcerptSlots> {
}
export {};
