<script lang="ts">
    import type {IStorkHighlightRange} from "../stores/search";
    import type {ITextRange} from "../util/string";
    import {highlight_ranges} from "../util/string";

    let _class: string = "";
    export let style: string | undefined = undefined;

    export {_class as class};

    export let ranges: IStorkHighlightRange[] = [];
    export let text: string;

    let _parts: ITextRange[];
    $: _parts =
        ranges.length > 0 ? highlight_ranges(text, ranges) : [{is_highlighted: false, text}];
</script>

{#each _parts as {is_highlighted, text}}
    {#if is_highlighted}
        <!-- prettier-ignore -->
        <mark class="svst-highlight {_class}" {style}>{text}</mark>
    {:else}
        {text}
    {/if}
{/each}

<style>
    :global(.svst-highlight) {
        background-color: var(--svst-highlight-background-color, hsl(59, 98%, 58%));
        color: var(--svst-highlight-color, currentColor);
    }
</style>
