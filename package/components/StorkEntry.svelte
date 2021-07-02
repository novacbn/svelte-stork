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
        all: unset;

        display: flex;
        flex-direction: column;

        padding: var(--svst-entry-padding, 0.5rem 0.5rem);

        color: currentColor;

        cursor: pointer;
    }

    :global(.svst-entry:hover) {
        background-color: var(--svst-entry-hover-background-color, hsl(192, 82%, 78%));
    }

    :global(.svst-entry > * + *) {
        margin-top: var(--svst-entry-spacing, 0.125em);
    }
</style>
