<script lang="ts">
    import type {IStorkQuery, IStorkResult} from "../stores/search";

    import {ENTRY_BEHAVIOR} from "./StorkEntry.svelte";
    import Result from "./StorkResult.svelte";

    export let element: HTMLUListElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let entry_behavior: keyof typeof ENTRY_BEHAVIOR = ENTRY_BEHAVIOR.auto;
    export let excerpts_maximum: number = -1;
    export let results: IStorkResult[];
    export let query: IStorkQuery;
</script>

<ul bind:this={element} class="svst-results {_class}" {style}>
    {#each results as result (result.entry.url)}
        <Result {entry_behavior} {excerpts_maximum} {query} {result} />
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
