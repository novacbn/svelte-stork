<script lang="ts">
    import type {
        IStorkEntry,
        IStorkExcerpt,
        IStorkHighlightRange,
        IStorkQuery,
    } from "../stores/search";

    import EntryTitle from "./StorkEntryTitle.svelte";
    import Excerpt from "./StorkExcerpt.svelte";

    export let element: HTMLAnchorElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let excerpts: IStorkExcerpt[];
    export let excerpts_maximum: number = -1;
    export let entry: IStorkEntry;
    export let query: IStorkQuery;
    export let title_highlight_ranges: IStorkHighlightRange[];

    $: _excerpts =
        excerpts_maximum > -1
            ? excerpts.filter((excerpt, index) => index < excerpts_maximum)
            : excerpts;
</script>

<a
    bind:this={element}
    class="svst-entry {_class}"
    href="{query.url_prefix}{entry.url}"
    target="_blank"
    rel="noopener noreferrer"
    {style}
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

    :global(.svst-entry:hover) {
        background-color: var(--svst-entry-hover-background-color, hsl(192, 82%, 78%));
        opacity: var(--svst-entry-hover-opacity, 1);
    }
</style>
