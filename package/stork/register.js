export async function register(options) {
    const { index_name, index_url, overwrite = false } = options;
    const stork = window.stork;
    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'register' (Stork namespace not found)`);
    }
    try {
        await stork.downloadIndex(index_name, index_url, { forceOverwrite: overwrite });
    }
    catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error("bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)");
    }
}
