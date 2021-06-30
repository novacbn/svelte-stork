import {get, readable, writable} from "svelte/store";

import {debounce} from "../util/functional";

/**
 * Represents the options passed into [[register]]
 */
export interface IRegisterOptions {
    /**
     * Represents the name used for registration of your search
     * index. It's **RECOMMENDED** to use unique and versioned names
     * e.g. `kahi-ui.v0.2.11`
     */
    index_name: string;

    /**
     * Represents the URL used to download of Stork search index
     * which will be used for queries
     */
    index_url: string;

    /**
     * Represents the URL used to download and initialize the
     * WASM build of Stork
     */
    wasm_url: string;
}

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

export interface IStorkStore {
    set(query: string): void;

    subscribe(callback: (query: IStorkQuery | null) => void): () => void;

    update(callback: (query: IStorkQuery | null) => string): void;
}

export async function register(options: IRegisterOptions): Promise<void> {
    const {index_name, index_url, wasm_url} = options;
    const stork = (window as any).stork;
    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'register' (Stork namespace not found)`);
    }

    try {
        await stork.initialize(wasm_url);
    } catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error(
            "bad option 'IRegisterOptions.wasm_url' to 'register' (failed to download and initialize WASM blob)"
        );
    }

    try {
        await stork.downloadIndex(index_name, index_url);
    } catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error(
            "bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)"
        );
    }
}

export function search(options: ISearchOptions): IStorkStore {
    // @ts-expect-error - HACK: If we're running on the server, end-developers shouldn't be
    // trying to set the value anyway
    if (typeof window === "undefined") return readable<null>(null);

    const {debounce: debounce_duration = 250, index_name, minimum_length = 3} = options;
    const stork = (window as any).stork;

    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'search' (Stork namespace not found)`);
    }

    const store = writable<IStorkQuery | null>(null);
    const {set, subscribe} = store;

    const _set = debounce((query: string) => {
        if (query && query.length >= minimum_length) {
            const _query = stork.search(index_name, query);

            set(_query);
        } else {
            set(null);
        }
    }, debounce_duration);

    return {
        set: _set,
        subscribe,

        update(callback) {
            const query = get(store);
            const new_query = callback(query);

            _set(new_query);
        },
    };
}
