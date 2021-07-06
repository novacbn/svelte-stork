<script lang="ts">;
import Attribution from "./StorkAttribution.svelte";
import Message from "./StorkMessage.svelte";
import Results from "./StorkResults.svelte";
export let element = null;
let _class = "";
export let style = undefined;
export { _class as class };
export let excerpts_maximum = -1;
export let query = undefined;
export let results = undefined;
export let results_maximum = -1;
// NOTE: Sometimes the end-developer might want to do custom ordering
// here. So we allow them to override what's passed in
let _results;
$: _results = results ? results : query ? query.results : [];
$: _results =
    results_maximum > -1
        ? _results.filter((result, index) => index < results_maximum)
        : _results;
</script>

<div bind:this={element} class="svst-output {_class}" {style}>
    {#if query}
        <Message results={_results} />
    {/if}

    {#if query && _results.length > 0}
        <Results results={_results} {excerpts_maximum} {query} />
    {/if}

    <Attribution />
</div>

<style>
    :global(.svst-output) {
        display: flex;
        flex-direction: column;

        max-height: var(--svst-output-max-height, auto);

        color: var(--svst-output-color, black);

        font-size: var(--svst-output-font-size, 1em);
        font-weight: var(--svst-output-font-weight, 400);
        font-family: var(
            --svst-output-font-family,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol"
        );
    }
</style>
