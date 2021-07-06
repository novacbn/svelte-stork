<script lang="ts">;
import Highlight from "./StorkHighlight.svelte";
export let element = null;
let _class = "";
export let style = undefined;
export { _class as class };
export let excerpt;
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
