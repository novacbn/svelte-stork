<script context="module">
    function sort_score(a, b) {
        return a.score < b.score;
    }
</script>

<script>
    import {browser} from "$app/env";
    import {base} from "$app/paths";

    import {register, search} from "@novacbn/svelte-stork";
    import * as Stork from "@novacbn/svelte-stork/components";

    let value = "";

    let registering = browser
        ? register({
              index_name: "federalist-stork-1.2.1",
              index_url: base + "/assets/stork/federalist-stork-1.2.1.st",
              wasm_url: base + "/assets/scripts/stork.wasm",
          })
        : false;

    const store = search({
        index_name: "federalist-stork-1.2.1",
    });

    $: if (browser) $store = value;

    let _results = [];
    let _query = null;
    $: {
        _query = $store;
        if (_query) {
            _results = _query.results.map((result) => {
                let {excerpts} = result;
                excerpts = excerpts.slice(0, 3);

                excerpts.sort(sort_score);
                return {...result, excerpts};
            });

            _results.sort(sort_score);
        }
    }
</script>

{#if browser}
    {#await registering}
        <div class="card bd-primary text-primary">
            <p>Loading search index...</p>
        </div>
    {:then _}
        <label for="search">
            <strong>
                <small> SEARCH THE FEDERALIST PAPERS*:</small>
            </strong>
        </label>

        <p class="grouped">
            <input id="search" type="search" placeholder="liberty" bind:value />
            <button class="button error" disabled={!value} on:click={() => (value = "")}>X</button>
        </p>

        <small>* Well, just the first twenty.</small>

        {#if _query}
            <div class="card is-paddingless">
                <Stork.Output query={_query} results={_results} />
            </div>
        {/if}
    {:catch err}
        <div class="card bd-error text-error">
            <p>There was an error while loading the search index.</p>
        </div>
    {/await}
{:else}
    <div class="card bd-error text-error">
        <p>Your client currently does not support Javascript, or is otherwise disabled.</p>
    </div>
{/if}

<style>
    :global(:root) {
        --svelte-stork-output-max-height: min(65ex, 70vh);
    }

    :global(.svelte-stork-entry:hover) {
        /** HACK: Need to prevent Chota from messing with the Component style */
        opacity: 1 !important;
    }
</style>
