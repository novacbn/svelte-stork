<script lang="ts">
    import type {IStorkExcerpt} from "../stores/search";

    import Highlight from "./StorkHighlight.svelte";

    export let element: HTMLParagraphElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let excerpt: IStorkExcerpt;
</script>

<p bind:this={element} class="svst-excerpt {_class}" {style}>
    ...<Highlight ranges={excerpt.highlight_ranges} text={excerpt.text} />...
</p>

<style>
    :global(.svst-excerpt) {
        margin: 0 0 var(--svst-excerpt-spacing, 0.8em) 0;

        line-height: var(--svst-excerpt-line-height, 1);
    }
</style>
