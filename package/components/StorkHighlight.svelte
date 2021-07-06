<script lang="ts">;
let _class = "";
export let style = undefined;
export { _class as class };
export let ranges = [];
export let text;
let _parts;
$: _parts =
    ranges.length > 0
        ? ranges.reduce((accum, range, index) => {
            const { beginning, end } = range;
            if (index === 0 && beginning > 0) {
                accum.push([text.slice(0, beginning), false]);
            }
            accum.push([text.slice(beginning, end), true]);
            if (end < text.length - 1) {
                const next_range = ranges[index + 1];
                const next_end = next_range ? next_range.beginning : text.length;
                accum.push([text.slice(end, next_end), false]);
            }
            return accum;
        }, [])
        : [[text, false]];
</script>

{#each _parts as [sub_text, is_highlighted]}
    {#if is_highlighted}
        <!-- prettier-ignore -->
        <mark class="svst-highlight {_class}" {style}>{sub_text}</mark>
    {:else}
        {sub_text}
    {/if}
{/each}

<style>
    :global(.svst-highlight) {
        background-color: var(--svst-highlight-background-color, hsl(59, 98%, 58%));
    }
</style>
