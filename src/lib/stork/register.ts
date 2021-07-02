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
     * Represents if the search index being registered should overwrite
     * any existing indices under the same name. Instead of erroring out
     */
    overwrite?: boolean;
}

export async function register(options: IRegisterOptions): Promise<void> {
    const {index_name, index_url, overwrite = false} = options;
    const stork = (window as any).stork;

    if (!stork) {
        // TODO: Standardize error object
        throw new ReferenceError(`bad dispatch to 'register' (Stork namespace not found)`);
    }

    try {
        await stork.downloadIndex(index_name, index_url, {forceOverwrite: overwrite});
    } catch (err) {
        // TODO: Look into what exceptions this spits out
        // and provide standardized error object
        throw new Error(
            "bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)"
        );
    }
}
