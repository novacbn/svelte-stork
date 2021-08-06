import adapter from "@sveltejs/adapter-static";
import markdownIt from "markdown-it";
import markdownItPrism from "markdown-it-prism";
import sveltePreprocess from "svelte-preprocess";
import {plugin as markdownPlugin, Mode as MarkdownMode} from "vite-plugin-markdown";

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: [sveltePreprocess()],

    kit: {
        adapter: adapter(),
        target: "body",

        paths: {
            assets: "/svelte-stork",
            base: "/svelte-stork",
        },

        vite: () => {
            /** @type {import('vite').UserConfig} */
            return {
                plugins: [
                    markdownPlugin({
                        markdownIt: markdownIt({html: true}).use(markdownItPrism),
                        mode: [MarkdownMode.HTML],
                    }),
                ],
            };
        },
    },
};
