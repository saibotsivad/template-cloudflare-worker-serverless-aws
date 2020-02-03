import resolve from '@rollup/plugin-node-resolve'

const plugins = [
	resolve({
		browser: true
	})
]

export default [
	{
		input: './app/node_modules/demo-one/index.js',
		output: {
			format: 'esm',
			file: './service/demo-one/index.js'
		},
		plugins
	}
]
