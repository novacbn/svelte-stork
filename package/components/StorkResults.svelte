<script lang="ts">
    import type {IStorkQuery, IStorkResult} from "../stores/search";

    import Result from "./StorkResult.svelte";

    export let element: HTMLUListElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export let results: IStorkResult[];
    export let query: IStorkQuery;
</script>

<ul bind:this={element} class="svelte-stork-results {_class}" {style}>
    {#each results as result (result.entry.url)}
        <Result {query} {result} />
    {/each}
</ul>

<style>
    :global(.svelte-stork-results) {
        all: unset;

        flex-grow: 1;

        border-top: var(--svelte-stork-results-border, 1px solid currentColor);
        border-bottom: var(--svelte-stork-results-border, 1px solid currentColor);

        list-style: none;
        overflow-y: auto;
    }

    :global(.svelte-stork-results > * + *) {
        margin-top: var(--svelte-stork-results-spacing, 0.5rem);
    }
</style>
