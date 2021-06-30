<script lang="ts">
    import type {IStorkExcerpt} from "../stores/search";

    import Highlight from "./StorkHighlight.svelte";

    export let element: HTMLParagraphElement | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let excerpt: IStorkExcerpt;
</script>

<p bind:this={element} class="svelte-stork-excerpt {_class}" {style}>
    ...<Highlight ranges={excerpt.highlight_ranges} text={excerpt.text} />...
</p>

<style>
    :global(.svelte-stork-excerpt) {
        all: unset;

        padding: var(--svelte-stork-excerpt-padding, 0 0.75em);
    }
</style>
