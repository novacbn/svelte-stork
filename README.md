# svelte-stork

## Description

Minimalist Svelte wrapper Stores around [Stork Search](https://github.com/jameslittle230/stork), also provides customizable Components.

## Demo

See a demo of the Svelte Components at [novacbn.github.io/svelte-stork](https://novacbn.github.io/svelte-stork).

## Getting Started

> **NOTE**: To learn how to build your own custom search indices and other concepts, visit the [Stork documentation](https://stork-search.net/docs).

To get started with this library, you need to [install Stork Search](https://stork-search.net/docs/install) on your Web Application. Alternatively, see the below sample on how to have this library handle that for you.

## Usage

### Stores

```javascript
import {initialize, register, search} from "svelte-stork";

// Before we can do anything with `search`, you need to
// initialize Stork Search
await initialize({
    // If you want this library to handle mounting / loading
    // of the main Stork JS library after page load, you can
    // uncomment the following line
    //
    // script_url: "/path/to/stork.js",

    // The WASM blob is not optional however, due to how
    // Browsers handle loading them
    wasm_url: "/path/to/stork.wasm",
});

// Next, you need to register your search index with Stork Search
await register({
    // All search indices are globally registered to the webpage, so
    // you need to choose a unique name. Preferably versioned as well
    index_name: "my-search-index_v1.0.0",

    // Make sure this path publically accessible
    index_url: "/path/to/search_index.v1.0.0.st",
});

// Now if we initialized and registered successfully, we can create the Svelte Store
const store = search({
    // You can customize how long in milliseconds the Store after
    // receiving input to update the query results
    //
    // DEFAULT: 250ms (0.25s)
    debounce: 250,

    // You also need to reference your registered search index
    index_name: "my-search-index_v1.0.0",

    // Lastly, you can customize the minimum amount of characters a
    // end-user needs to input before queries are performed
    //
    // DEFAULT: 3 (three characters)
    minimum_length: 3,
});

// Like any other Svelte Store, we update the input query via `set`
store.set("my search query");

// Also subscriptions
store.subscribe((query) => {
    // Finally retrieve your query results, visit the link below to see the typings
    // https://github.com/novacbn/svelte-stork/blob/afc328ca576f83a7c903027f0b117f5a1a566f12/src/lib/stores/search.ts#L115-L130
    console.log(query.results);
});
```

### Components

> **NOTE**: This sample expects initialization / registration of Stork Search was already performed.

<!-- prettier-ignore -->
```html
<script>
    import {search} from "svelte-stork";
    import * as Stork from "svelte-stork/components";

    // Just input the same options you passed into the Javascript sample
    const store = search(...);

    let value = "";

    // After the initial configuration / load, it's really simple to get started. Just
    // use Svelte's reactive blocks pattern to update from input and listen for query results
    $: $store = value;
    $: query = $store;
</script>


<input type="text" placeholder="...search" bind:value />

<!--
    Now we can just pass in the query output into the built-in basic search UI

    Properties:
        - `excerpts_maximum` / `results_maximum` — When set greater than `-1`, they limit the respective amount of
        excerpts and results items displayed in search outputs
-->

<Stork.Output
    excerpts_maximum={-1}
    results_maximum={-1} 
    {query}
/>
```

## Developer

### Installation

Open your terminal and install via `npm`:

```bash
npm install github:novacbn/svelte-stork#0.0.4
```

Install current in-development code:

```bash
npm install github:novacbn/svelte-stork
```

### Documentation

> TODO

### CSS Custom Properties

| Name                                  | Default                                                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `--svst-attribution-color`            | `currentColor`                                                                                                               |
| `--svst-attribution-font-size`        | `0.8em`                                                                                                                      |
| `--svst-attribution-padding`          | `0.5rem 1em`                                                                                                                 |
| `--svst-attribution-opacity`          | `0.8`                                                                                                                        |
| `--svst-attribution-text-decoration`  | `underline`                                                                                                                  |
| `--svst-attribution-hover-opacity`    | `1`                                                                                                                          |
| `--svst-attribution-link-color`       | `hsl(192, 82%, 44%)`                                                                                                         |
| `--svst-attribution-visited-color`    | `hsl(271, 63%, 34%)`                                                                                                         |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-entry-color`                  | `currentColor`                                                                                                               |
| `--svst-entry-cursor`                 | `pointer`                                                                                                                    |
| `--svst-entry-padding`                | `1em`                                                                                                                        |
| `--svst-entry-text-decoration`        | `none`                                                                                                                       |
| `--svst-entry-hover-background-color` | `hsl(192, 82%, 78%)`                                                                                                         |
| `--svst-entry-hover-opacity`          | `1`                                                                                                                          |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-entry-title-spacing`          | `0.8em`                                                                                                                      |
| `--svst-entry-title-font-size`        | `1.1em`                                                                                                                      |
| `--svst-entry-title-font-weight`      | `bold`                                                                                                                       |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-excerpt-line-height`          | `1`                                                                                                                          |
| `--svst-excerpt-spacing`              | `0.8em`                                                                                                                      |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-highlight-background-color`   | `hsl(59, 98%, 58%)`                                                                                                          |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-message-color`                | `currentColor`                                                                                                               |
| `--svst-message-padding`              | `0.5em 1em`                                                                                                                  |
| `--svst-message-font-size`            | `1em`                                                                                                                        |
| `--svst-message-opacity`              | `0.8`                                                                                                                        |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-output-color`                 | `black`                                                                                                                      |
| `--svst-output-font-family`           | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` |
| `--svst-output-font-size`             | `1em`                                                                                                                        |
| `--svst-output-font-weight`           | `400`                                                                                                                        |
| `--svst-output-max-height`            | `auto`                                                                                                                       |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-result-border`                | `1px solid hsla(0, 0%, 90%, 1)`                                                                                              |
| `--svst-result-font-size`             | `0.8em`                                                                                                                      |
| <hr />                                | <hr />                                                                                                                       |
| `--svst-results-border`               | `1px solid hsla(0, 0%, 80%, 1)`                                                                                              |

### API

-   Functions

    -   `initalize`
    -   `register`

-   Stores

    -   `search`

-   Components

    -   `Output`

    -   `Message`
    -   `Attribution`

    -   `Highlight`

    -   `Result`
    -   `Results`

    -   `Entry`
    -   `EntryTitle`
    -   `Excerpt`
