import {mount_script} from "../util/html";

/**
 * Represents the options passed into [[initialize]]
 */
export interface IInitializeOptions {
    /**
     * Represents the URL used to mount and initialize the main
     * Stork Search global Javascript library
     *
     * **NOTE**: This is optional if you manually load the library via `<script>`
     */
    script_url?: string;

    /**
     * Represents the URL used to download and initialize the
     * WASM build of Stork
     */
    wasm_url: string;
}

export async function initialize(options: IInitializeOptions): Promise<void> {
    const {script_url, wasm_url} = options;
    let stork = (window as any).stork;

    if (script_url) {
        if (stork) {
            console.warn(
                "[svelte-stork] Stork Search library was previously mounted and initialized, skipping..."
            );
        } else {
            try {
                await mount_script("stork-search", script_url);
                stork = (window as any).stork;
            } catch (err) {
                // TODO: Standardize error object
                throw new ReferenceError(
                    `bad dispatch to 'initialize' (failed to mount and initialize Stork Search library)`
                );
            }
        }
    }

    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'initialize' (Stork namespace not found)`);
    }

    try {
        await stork.initialize(wasm_url);
    } catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error(
            "bad option 'IInitializeOptions.wasm_url' to 'initialize' (failed to download and initialize Stork WASM blob)"
        );
    }
}
