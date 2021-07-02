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
        padding: var(--svst-message-padding, 0.5em 1em);

        color: var(--svst-message-color, hsla(0, 0%, 0%, 0.8));
        font-size: var(--svst-message-font-size, 1em);
    }
</style>
