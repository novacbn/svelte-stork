<script lang="ts">
    export let element: HTMLDivElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};
</script>

<div bind:this={element} class="svst-attribution {_class}" {style}>
    Powered by <a href="https://stork-search.net" target="_blank" rel="noopener noreferrer">
        Stork
    </a>
</div>

<style>
    :global(.svst-attribution) {
        padding: var(--svst-attribution-padding, 0.75rem 1rem);
    }
</style>
