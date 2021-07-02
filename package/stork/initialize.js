import { mount_script } from "../util/html";
export async function initialize(options) {
    const { script_url, wasm_url } = options;
    let stork = window.stork;
    if (script_url) {
        if (stork) {
            console.warn("[svelte-stork] Stork Search library was previously mounted and initialized, skipping...");
        }
        else {
            try {
                await mount_script("stork-search", script_url);
                stork = window.stork;
            }
            catch (err) {
                // TODO: Standardize error object
                throw new ReferenceError(`bad dispatch to 'initialize' (failed to mount and initialize Stork Search library)`);
            }
        }
    }
    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'initialize' (Stork namespace not found)`);
    }
    try {
        await stork.initialize(wasm_url);
    }
    catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error("bad option 'IInitializeOptions.wasm_url' to 'initialize' (failed to download and initialize Stork WASM blob)");
    }
}
