<script lang="ts">
    import type {IStorkQuery, IStorkResult} from "../stores/search";

    import Entry from "./StorkEntry.svelte";

    export let element: HTMLLIElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export let result: IStorkResult;
    export let query: IStorkQuery;
</script>

<li bind:this={element} class="svelte-stork-result {_class}" {style}>
    <Entry
        entry={result.entry}
        excerpts={result.excerpts}
        title_highlight_ranges={result.title_highlight_ranges}
        {query}
    />
</li>

<style>
    :global(.svelte-stork-result) {
        all: unset;

        display: list-item;
    }
</style>
