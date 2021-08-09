<script context="module" lang="typescript">
    export enum ENTRY_BEHAVIOR {
        "auto" = "auto",

        "external" = "external",

        "internal" = "internal",
    }
</script>

<script lang="typescript">
    import type {
        IStorkEntry,
        IStorkExcerpt,
        IStorkHighlightRange,
        IStorkQuery,
    } from "../stores/search";
    import {is_internal_url} from "../util/url";

    import EntryTitle from "./StorkEntryTitle.svelte";
    import Excerpt from "./StorkExcerpt.svelte";

    export let element: HTMLAnchorElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let behavior: keyof typeof ENTRY_BEHAVIOR = ENTRY_BEHAVIOR.auto;
    export let excerpts: IStorkExcerpt[];
    export let excerpts_maximum: number = -1;
    export let entry: IStorkEntry;
    export let query: IStorkQuery;
    export let title_highlight_ranges: IStorkHighlightRange[];

    let selected: boolean = false;

    function on_mouse_enter(event: MouseEvent): void {
        selected = true;
    }

    function on_mouse_leave(event: MouseEvent): void {
        selected = false;
    }

    $: _excerpts =
        excerpts_maximum > -1
            ? excerpts.filter((excerpt, index) => index < excerpts_maximum)
            : excerpts;

    $: _href = `${query.url_prefix}${entry.url}`;

    let _is_internal = false;
    $: {
        if (behavior === ENTRY_BEHAVIOR.external) _is_internal = false;
        else if (behavior === ENTRY_BEHAVIOR.internal) _is_internal = true;
        else _is_internal = is_internal_url(_href);
    }
</script>

<a
    bind:this={element}
    class="svst-entry {_class}"
    href={_href}
    target={_is_internal ? undefined : "_blank"}
    rel={_is_internal ? undefined : "noopener noreferrer"}
    aria-selected={selected ? true : undefined}
    {style}
    on:mouseenter={on_mouse_enter}
    on:mouseleave={on_mouse_leave}
>
    <EntryTitle {entry} {title_highlight_ranges} />

    {#each _excerpts as excerpt (excerpt.text)}
        <Excerpt {excerpt} />
    {/each}
</a>

<style>
    :global(.svst-entry) {
        display: flex;
        flex-direction: column;

        padding: var(--svst-entry-padding, 1em);

        text-decoration: var(--svst-entry-text-decoration, none);

        cursor: var(--svst-entry-cursor, pointer);
    }

    :global(.svst-entry),
    :global(.svst-entry:link),
    :global(.svst-entry:visited) {
        color: var(--svst-entry-color, currentColor);
    }

    :global(.svst-entry[aria-selected="true"]) {
        background-color: var(--svst-entry-hover-background-color, hsl(192, 82%, 78%));
        opacity: var(--svst-entry-hover-opacity, 1);
    }
</style>
