import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
console.log(path.resolve('./src/main/'))
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
      fallback: 'index.html' 
    }),
    prerender: {
      handleHttpError: 'warn'
		},
		alias: {
			$main: path.resolve('./src/main/'),
			$components: path.resolve('./src/components/'),
			$lib: path.resolve('./src/lib/'),		
			$utils: path.resolve('./src/utils/'),		
		}
	},
	preprocess: vitePreprocess(),
};

export default config;
