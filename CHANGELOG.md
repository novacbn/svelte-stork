# CHANGELOG

-   Added `<StorkOutput excerpts_maximum={number}>` — Configures the maximum amount of excerpts displayed per-entry.
-   Added `<StorkOutput results_maximum={number}>` — Configures the maximum amount of results displayed per-query.
-   Added `initialize(options: IInitializeOptions): Promise<void>` — Initializes Stork Search library with WASM blob, optionally allowing for downloading and mounting the Stork Search library if not previously loaded.

    -   `IInitializeOptions.script_url?: string` — Optionally allows for download the Stork Search JS library and mounting it.
    -   `IInitializeOptions.wasm_url: string` — Moved from previous `IRegisterOptions.wasm_url`.

-   Moved `IRegisterOptions.wasm_url` -> `IInitializeOptions.wasm_url`.
-   Renamed all `svelte-stork-` prefixes -> `svst-`.
-   Updated `<StorkOutput query={XXX} />` to accept `undefined` values.

## v0.0.2 - 2021/06/30

-   Added `IRegisterOptions.overwrite` — Allows calls to `register` overwrite same-name search indices, instead of throwing an exception.
-   Fixed NPM install.

## v0.0.1 - 2021/06/30

-   Initial release.