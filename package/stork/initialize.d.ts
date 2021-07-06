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
export declare function initialize(options: IInitializeOptions): Promise<void>;
