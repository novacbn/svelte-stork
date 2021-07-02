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
export declare function register(options: IRegisterOptions): Promise<void>;
