<script lang="ts">;
import Highlight from "./StorkHighlight.svelte";
export let element = null;
let _class = "";
export let style = undefined;
export { _class as class };
export let entry;
export let title_highlight_ranges;
</script>

<p bind:this={element} class="svst-entry-title {_class}" {style}>
    <Highlight ranges={title_highlight_ranges} text={entry.title} />
</p>

<style>
    :global(.svst-entry-title) {
        margin: 0 0 var(--svst-entry-title-spacing, 0.8em) 0;

        font-size: var(--svst-entry-title-font-size, 1.1em);
        font-weight: var(--svst-entry-title-font-weight, bold);
    }
</style>
