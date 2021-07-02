<script context="module">
    import {base} from "$app/paths";
    import {initialize, register} from "@novacbn/svelte-stork";

    let PROMISE_INITIALIZE = null;

    let PROMISE_REGISTER = null;

    function initialize_stork() {
        if (!PROMISE_INITIALIZE) {
            PROMISE_INITIALIZE = initialize({
                script_url: `${base}/assets/stork/stork-v1.2.1.js`,
                wasm_url: `${base}/assets/stork/stork-v1.2.1.wasm`,
            });
        }

        return PROMISE_INITIALIZE;
    }

    function register_stork() {
        if (!PROMISE_REGISTER) {
            PROMISE_REGISTER = register({
                index_name: "federalist-stork-1.2.1",
                index_url: `${base}/assets/stork/federalist-stork-v1.2.1.st`,
            });
        }

        return PROMISE_REGISTER;
    }
</script>

<script>
    import {browser} from "$app/env";

    import {search} from "@novacbn/svelte-stork";
    import * as Stork from "@novacbn/svelte-stork/components";

    let value = "";

    async function await_initialize() {
        await initialize_stork();
        await register_stork();

        _store = search({
            index_name: "federalist-stork-1.2.1",
        });
    }

    let initializing = browser ? await_initialize() : null;

    let _store, _query;
    $: if (_store) $_store = value;
    $: if (_store) _query = $_store;
</script>

{#if browser}
    {#await initializing}
        <div class="card bd-primary text-primary">
            <p>Loading Stork Search / search index...</p>
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

        <div class="card is-paddingless">
            <Stork.Output excerpts_maximum={3} query={_query} />
        </div>
    {:catch err}
        <div class="card bd-error text-error">
            <p>There was an error while loading the search index.</p>

            <!-- prettier-ignore -->
            <pre><code>{err.message}</code></pre>
        </div>
    {/await}
{:else}
    <div class="card bd-error text-error">
        <p>Your client currently does not support Javascript, or is otherwise disabled.</p>
    </div>
{/if}

<style>
    :global(:root) {
        --svst-font-size: 1.3em;
        --svst-output-max-height: min(65ex, 60vh);
    }

    :global(.svst-entry:hover) {
        /** HACK: Needed to prevent Chota from messing with `svelte-stork`'s base styles '*/
        opacity: 1 !important;
    }
</style>
