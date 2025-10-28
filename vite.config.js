import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as path from 'path'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
    alias: {
			$main: path.resolve('./climaxpro/src/main'),
      $component: path.resolve('./climaxpro/src/components'),
      $lib: path.resolve('./climaxpro/src/lib'),
      $utils: path.resolve('./climaxpro/src/utils'),
    },
  },
});
