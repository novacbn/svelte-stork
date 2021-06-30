<script lang="ts">
    import type {IStorkQuery, IStorkResult} from "../stores/search";

    import Attribution from "./StorkAttribution.svelte";
    import Message from "./StorkMessage.svelte";
    import Results from "./StorkResults.svelte";

    export let element: HTMLDivElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let query: IStorkQuery;
    export let results: IStorkResult[] | undefined = undefined;

    // NOTE: Sometimes the end-developer might want to do custom ordering
    // here. So we allow them to override what's passed in
    $: _results = results ? results : query.results;
</script>

<div bind:this={element} class="svelte-stork-output {_class}" {style}>
    <Message {query} />

    {#if _results.length > 0}
        <Results results={_results} {query} />
    {/if}

    <Attribution />
</div>

<style>
    :global(.svelte-stork-output) {
        display: flex;
        flex-direction: column;

        max-height: var(--svelte-stork-output-max-height, auto);
    }
</style>
