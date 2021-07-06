/**
 * Represents the options passed into [[search]]
 */
export interface ISearchOptions {
    /**
     * Represents how long queries should be debounced in milliseconds
     * before one is executed
     */
    debounce?: number;
    /**
     * Represents the name that was passed into [[IRegisterOptions.index_name]],
     * used to look up the registered search index
     */
    index_name: string;
    /**
     * Represents the minimum character length needed before queries are peformed
     */
    minimum_length?: number;
}
export interface IStorkEntry {
    /**
     * Represents the title of the document
     */
    title: string;
    /**
     * Represents the URL to where the search result links
     */
    url: string;
}
export interface IStorkExcerpt {
    /**
     * Represents start and stop string indices within [[IStorkExcerpt.text]] that
     * are relevant to the current query
     */
    highlight_ranges: IStorkHighlightRange[];
    /**
     * Represents the "relevance" score Stork computed for the given
     * entry. Used to order all excerpts within a given result
     */
    score: number;
    /**
     * Represents the excerpt of text from the original file that contains
     * the user's search query. Usually displayed in a list
     */
    text: string;
}
export interface IStorkHighlightRange {
    /**
     * Represents where in the [[IStorkExcerpt.text]] the highlighting starts
     */
    beginning: number;
    /**
     * Represents where in the [[IStorkExcerpt.text]] the highlighting ends
     */
    end: number;
}
export interface IStorkQuery {
    /**
     * Represents the results of the query
     */
    results: IStorkResult[];
    /**
     * Represents how many documents the query was relevant to
     */
    total_hit_count: number;
    /**
     * Represents the URL to prefixed to document URL fragments
     */
    url_prefix: string;
}
export interface IStorkResult {
    /**
     * Represents the file represented by the result
     */
    entry: IStorkEntry;
    /**
     * Represents each excerpt visible to the user in the search interface
     */
    excerpts: IStorkExcerpt[];
    /**
     * Represents the "relevance" score Stork computed for the given entry. Used
     * to order the results for a given query
     */
    score: number;
    /**
     * Represents start and stop string indices within [[IStorkEntry.title]] that
     * are relevant to the current query
     */
    title_highlight_ranges: IStorkHighlightRange[];
}
export interface ISearchStore {
    set(query: string): void;
    subscribe(callback: (query: IStorkQuery | null) => void): () => void;
    update(callback: (query: IStorkQuery | null) => string): void;
}
export declare function search(options: ISearchOptions): ISearchStore;
