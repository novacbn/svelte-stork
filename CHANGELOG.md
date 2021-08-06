# CHANGELOG

## v0.0.5 - UNRELEASED

-   Initial NPM version published to `@novacbn/svelte-stork`.
-   Upgraded to `@sveltejs/kit`, `1.0.0-next.120` -> `1.0.0-next.142`.
-   Added `--svst-highlight-color` — Defaults to `currentColor`.
-   Changed `No files found.` -> `No results found.`.
-   Generated typedefs for Components.

## v0.0.4 - 2021/07/02

-   Added `--svst-attribution-opacity` / `--svst-message-opacity` — Both default to `0.8`.
-   Changed `--svst-attribution-color` / `--svst-message-color` — Both default to `currentColor`.
-   Changed `X files found.` -> `X results found.`.
-   Fixed `--svst-font-size` -> `--svst-output-font-size`, `--svst-font-weight` -> `--svst-output-font-weight`.
-   Generated typedefs for core library.
-   Renamed `IStorkStore` -> `ISearchStore`.

## v0.0.3 - 2021/07/02

-   Added `<StorkOutput excerpts_maximum={number}>` — Configures the maximum amount of excerpts displayed per-entry.
-   Added `<StorkOutput results_maximum={number}>` — Configures the maximum amount of results displayed per-query.
-   Added `initialize(options: IInitializeOptions): Promise<void>` — Initializes Stork Search library with WASM blob, optionally allowing for downloading and mounting the Stork Search library if not previously loaded.

    -   `IInitializeOptions.script_url?: string` — Optionally allows for download the Stork Search JS library and mounting it.
    -   `IInitializeOptions.wasm_url: string` — Moved from previous `IRegisterOptions.wasm_url`.

-   Moved `IRegisterOptions.wasm_url` -> `IInitializeOptions.wasm_url`.
-   Renamed all `svelte-stork-` prefixes -> `svst-`.
-   Updated `<StorkOutput query={XXX} />` to accept `undefined` values.
-   Updated base styles to more closely align with Stork Search's basic theme.

## v0.0.2 - 2021/06/30

-   Added `IRegisterOptions.overwrite` — Allows calls to `register` overwrite same-name search indices, instead of throwing an exception.
-   Fixed NPM install.

## v0.0.1 - 2021/06/30

-   Initial release.
