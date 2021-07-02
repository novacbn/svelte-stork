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
        padding: var(--svst-attribution-padding, 0.5em 1em);

        color: var(--svst-attribution-color, hsla(0, 0%, 0%, 0.8));
        font-size: var(--svst-attribution-font-size, 0.8em);
    }

    :global(.svst-attribution > a) {
        text-decoration: var(--svst-attribution-text-decoration, underline);
    }

    :global(.svst-attribution > a:link) {
        color: var(--svst-attribution-link-color, hsl(192, 82%, 44%));
    }

    :global(.svst-attribution > a:visited) {
        color: var(--svst-attribution-visited-color, hsl(271, 63%, 34%));
    }

    :global(.svst-attribution > a:hover) {
        opacity: var(--svst-attribution-hover-opacity, 1);
    }
</style>
