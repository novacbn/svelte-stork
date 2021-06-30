<script lang="ts">
    import type {IStorkQuery} from "../stores/search";

    export let element: HTMLDivElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let query: IStorkQuery;
</script>

<div bind:this={element} class="svelte-stork-message {_class}" {style}>
    {#if query.total_hit_count > 0}
        {query.total_hit_count} files found.
    {:else}
        No files found.
    {/if}
</div>

<style>
    :global(.svelte-stork-message) {
        padding: var(--svelte-stork-message-padding, 0.75rem 1rem);

        font-size: var(--svelte-stork-message-font-size, 2rem);
        opacity: var(--svelte-stork-message-opacity, 0.85);
    }
</style>
