<script lang="ts">
    import type {IStorkQuery, IStorkResult} from "../stores/search";

    import Result from "./StorkResult.svelte";

    export let element: HTMLUListElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export let excerpts_maximum: number = -1;
    export let results: IStorkResult[];
    export let query: IStorkQuery;
</script>

<ul bind:this={element} class="svst-results {_class}" {style}>
    {#each results as result (result.entry.url)}
        <Result {excerpts_maximum} {query} {result} />
    {/each}
</ul>

<style>
    :global(.svst-results) {
        all: unset;

        flex-grow: 1;

        border-top: var(--svst-results-border, 1px solid currentColor);
        border-bottom: var(--svst-results-border, 1px solid currentColor);

        list-style: none;
        overflow-y: auto;
    }

    :global(.svst-results > * + *) {
        margin-top: var(--svst-results-spacing, 0.5rem);
    }
</style>
