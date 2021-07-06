<script lang="ts">;
import Result from "./StorkResult.svelte";
export let element = null;
let _class = "";
export let style = undefined;
export let excerpts_maximum = -1;
export let results;
export let query;
</script>

<ul bind:this={element} class="svst-results {_class}" {style}>
    {#each results as result (result.entry.url)}
        <Result {excerpts_maximum} {query} {result} />
    {/each}
</ul>

<style>
    :global(.svst-results) {
        flex-grow: 1;

        margin: 0;
        padding: 0;

        border-top: var(--svst-results-border, 1px solid hsla(0, 0%, 80%, 1));
        border-bottom: var(--svst-results-border, 1px solid hsla(0, 0%, 80%, 1));

        list-style: none;
        overflow-y: auto;
    }
</style>
