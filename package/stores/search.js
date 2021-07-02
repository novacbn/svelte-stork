import { get, readable, writable } from "svelte/store";
import { debounce } from "../util/functional";
export function search(options) {
    // @ts-expect-error - HACK: If we're running on the server, end-developers shouldn't be
    // trying to set the value anyway
    if (typeof window === "undefined")
        return readable(null);
    const { debounce: debounce_duration = 250, index_name, minimum_length = 3 } = options;
    const stork = window.stork;
    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'search' (Stork namespace not found)`);
    }
    const store = writable(null);
    const { set, subscribe } = store;
    const _set = debounce((query) => {
        if (query && query.length >= minimum_length) {
            const _query = stork.search(index_name, query);
            set(_query);
        }
        else {
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
