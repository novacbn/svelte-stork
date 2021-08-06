import type {IStorkHighlightRange} from "../stores/search";

export interface ITextRange {
    /**
     * Represents if the range of text is highlighted
     */
    is_highlighted: boolean;

    /**
     * Represents the text belonging to the range
     */
    text: string;
}

export function highlight_ranges(text: string, ranges: IStorkHighlightRange[]): ITextRange[] {
    return ranges.reduce<ITextRange[]>((accum, range, index) => {
        // TODO: Stork Search has weird text range indices being 1-indexed and overlap, need
        // to fix / look into it
        const {beginning, end} = range;

        if (index === 0 && beginning > 0) {
            accum.push({
                is_highlighted: false,
                text: text.slice(0, beginning),
            });
        }

        accum.push({
            is_highlighted: true,
            text: text.slice(beginning, end),
        });

        if (end < text.length - 1) {
            const next_range = ranges[index + 1];
            const next_end = next_range ? next_range.beginning : text.length;

            accum.push({
                is_highlighted: false,
                text: text.slice(end, next_end),
            });
        }

        return accum;
    }, []);
}
