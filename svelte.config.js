import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({})],
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [svg()]
		}
	},
	trailingSlash: 'always'
};

export default config;
