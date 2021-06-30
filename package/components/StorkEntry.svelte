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
    export let entry: IStorkEntry;
    export let query: IStorkQuery;
    export let title_highlight_ranges: IStorkHighlightRange[];
</script>

<a
    bind:this={element}
    class="svelte-stork-entry {_class}"
    href="{query.url_prefix}{entry.url}"
    target="_blank"
    rel="noopener noreferrer"
    {style}
>
    <EntryTitle {entry} {title_highlight_ranges} />

    {#each excerpts as excerpt (excerpt.text)}
        <Excerpt {excerpt} />
    {/each}
</a>

<style>
    :global(.svelte-stork-entry) {
        all: unset;

        display: flex;
        flex-direction: column;

        padding: var(--svelte-stork-entry-padding, 0.5rem 0.5rem);

        color: currentColor;

        cursor: pointer;
    }

    :global(.svelte-stork-entry:hover) {
        background-color: var(--svelte-stork-entry-hover-background-color, hsl(192, 82%, 78%));
    }

    :global(.svelte-stork-entry > * + *) {
        margin-top: var(--svelte-stork-entry-spacing, 0.125em);
    }
</style>
