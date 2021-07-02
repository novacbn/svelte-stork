<script lang="ts">
    import type {IStorkResult} from "../stores/search";

    export let element: HTMLDivElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let results: IStorkResult[];
</script>

<div bind:this={element} class="svst-message {_class}" {style}>
    {#if results.length > 0}
        {results.length} files found.
    {:else}
        No files found.
    {/if}
</div>

<style>
    :global(.svst-message) {
        padding: var(--svst-message-padding, 0.75rem 1rem);

        font-size: var(--svst-message-font-size, 2rem);
        opacity: var(--svst-message-opacity, 0.85);
    }
</style>
