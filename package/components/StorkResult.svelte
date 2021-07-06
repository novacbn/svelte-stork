<script lang="ts">;
import Entry from "./StorkEntry.svelte";
export let element = null;
let _class = "";
export let style = undefined;
export let excerpts_maximum = -1;
export let result;
export let query;
</script>

<li bind:this={element} class="svst-result {_class}" {style}>
    <Entry
        entry={result.entry}
        excerpts={result.excerpts}
        title_highlight_ranges={result.title_highlight_ranges}
        {excerpts_maximum}
        {query}
    />
</li>

<style>
    :global(.svst-result) {
        display: list-item;

        padding: 0;

        font-size: var(--svst-result-font-size, 0.8em);
    }

    :global(.svst-result:not(:last-child)) {
        border-bottom: var(--svst-result-border, 1px solid hsla(0, 0%, 90%, 1));
    }
</style>
