// require('esbuild')
// 	.serve(
// 		{ port: 3000, host: 'localhost', servedir: './public' },
// 		{
// 			entryPoints: ['src/index.tsx'],
// 			outfile: './public/index.js',
// 			jsx: 'automatic',
// 			bundle: true,
// 			sourcemap: true,
// 			minify: true,
// 			// watch: {
// 			// 	onRebuild: (error, result) => {
// 			// 		if (error) {
// 			// 			console.error('Build failed! - ', error);
// 			// 		} else {
// 			// 			console.clear();
// 			// 			console.log('Builded!');
// 			// 		}
// 			// 	}
// 			// }
// 		}).then(({ host, port }) => {
// 		const open = require('open');
// 	}).catch(
// 	(e) => {
// 		console.log(e);
// 		process.exit(1);
// 	}
// );
