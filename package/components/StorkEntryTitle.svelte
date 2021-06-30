<script lang="ts">
    import type {IStorkEntry, IStorkHighlightRange} from "../stores/search";
    import Highlight from "./StorkHighlight.svelte";

    export let element: HTMLParagraphElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let entry: IStorkEntry;
    export let title_highlight_ranges: IStorkHighlightRange[];
</script>

<p bind:this={element} class="svelte-stork-entry-title {_class}" {style}>
    <Highlight ranges={title_highlight_ranges} text={entry.title} />
</p>

<style>
    :global(.svelte-stork-entry-title) {
        all: unset;

        margin-bottom: var(--svelte-stork-entry-title-spacing, 0.125em);

        font-size: var(--svelte-stork-entry-title-font-size, 1.75rem);
        font-weight: var(--svelte-stork-entry-title-font-weight, bold);
    }
</style>
