import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as path from 'path'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
    alias: {
			$main: path.resolve('./src/main'),
      $component: path.resolve('./src/components'),
      $lib: path.resolve('./src/lib'),
      $utils: path.resolve('./src/utils'),
    },
  },
});
