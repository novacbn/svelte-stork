# svelte-stork

## Description

Minimalist Svelte wrapper Stores around [Stork](https://github.com/jameslittle230/stork) search, also provides customizable Components.

## Demo

See a demo of the Svelte Components at [novacbn.github.io/svelte-stork](https://novacbn.github.io/svelte-stork).

## Getting Started

> **NOTE**: To learn how to build your own custom search indices and other concepts, visit the [Stork documentation](https://stork-search.net/docs).

To get started with this library, you need to [install Stork](https://stork-search.net/docs/install) on your Web Application. And make sure the `stork` global namespace available.

## Usage

### Stores

```javascript
import {register, search} from "svelte-stork";

// Before we can do anything with search, you need to register
// your search index and Stork's WASM build. Which will be fetched
// from the network
await register({
    // All search indices are globally registered to the webpage, so
    // you need to choose a unique name. Preferably versioned as well
    index_name: "my-search-index_v1.0.0",

    // Search index and WASM blob be self-hosted or using Stork's CDN
    index_url: "/path/to/search_index.v1.0.0.st",
    wasm_url: "/path/to/stork.wasm",
});

// Now if we registered successfully, we can create our Svelte Store
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
    // https://github.com/novacbn/svelte-stork/blob/e8fe53ccdf0547a568b6f7e1cd59aad0ba22499d/src/lib/stores/search.ts#L95-L110
    console.log(query.results);
});
```

### Components

<!-- prettier-ignore -->
```html
<script>
    import {register, search} from "svelte-stork";
    import * as Stork from "svelte-stork/components";

    // Initialized the exact same way as the above example
    const registration_promise = register(...);
    const store = search(...);

    let value = "";

    // After the initial configuration / load, it's really simple to get started. Just
    // use Svelte's reactive blocks pattern to update from input and listen for query results
    $: $store = value;
    $: query = $store;
</script>

<!--
    Before we can render the search UI and results, we need to
    wait for the WASM blob to load and the search index to be
    registered
-->
{#await registration_promise}
    Loading search index...
{:then}
    <input type="text" placeholder="...search" bind:value />

    <!-- Now we can just pass in the query output into the premade basic search UI -->
    {#if query}
        <Stork.Output {query} />
    {/if}
{/await}
```

## Developer

### Installation

Open your terminal and install via `npm`:

```sh
npm install github:novacbn/svelte-stork#0.0.1
```

Install current in-development code:

```sh
npm install github:novacbn/svelte-stork
```

### Documentation

> TODO

### CSS Custom Properties

| Name                                          | Default                  |
| --------------------------------------------- | ------------------------ |
| `--svelte-stork-attribution-padding`          | `0.75rem 1rem`           |
| `--svelte-stork-entry-padding`                | `0.5rem 0.5rem`          |
| `--svelte-stork-entry-hover-background-color` | `hsl(192, 82%, 78%)`     |
| `--svelte-stork-entry-spacing`                | `0.125em`                |
| `--svelte-stork-entry-title-spacing`          | `0.125em`                |
| `--svelte-stork-entry-title-font-size`        | `1.75rem`                |
| `--svelte-stork-entry-title-font-weight`      | `bold`                   |
| `--svelte-stork-excerpt-padding`              | `0 0.75em`               |
| `--svelte-stork-highlight-background-color`   | `hsl(59, 98%, 58%)`      |
| `--svelte-stork-message-padding`              | `0.75rem 1rem`           |
| `--svelte-stork-message-font-size`            | `2rem`                   |
| `--svelte-stork-message-opacity`              | `0.85`                   |
| `--svelte-stork-output-max-height`            | `auto`                   |
| `--svelte-stork-results-border`               | `1px solid currentColor` |
| `--svelte-stork-results-spacing`              | `0.5rem`                 |

### API

-   Functions

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
