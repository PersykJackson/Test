import { defineConfig } from 'vite';

export default defineConfig({
	esbuild: {
		jsx: "automatic",
		minify: true,
	},
	root: './src/index.tsx',
	publicDir: './public',

});
