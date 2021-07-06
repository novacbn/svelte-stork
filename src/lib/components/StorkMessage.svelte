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
        {results.length} results found.
    {:else}
        No results found.
    {/if}
</div>

<style>
    :global(.svst-message) {
        padding: var(--svst-message-padding, 0.5em 1em);

        color: var(--svst-message-color, currentColor);
        font-size: var(--svst-message-font-size, 1em);

        opacity: var(--svst-message-opacity, 0.8);
    }
</style>
