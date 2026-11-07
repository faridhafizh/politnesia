import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static prerender. Call adapter with NO options so that adapter-static's
			// Vercel zero-config mode kicks in on Vercel (writes .vercel/output/
			// automatically instead of `build/`).
			adapter: adapter()
		})
	]
});
