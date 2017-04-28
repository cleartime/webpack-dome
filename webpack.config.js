const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		a: './src/script/main.js',
		b: './word.js'
	},
	output: {
		path: path.resolve(__dirname, "dist/js"), // string
		filename: '[name]-[chunkhash].js',
	},
	plugins: [
		new htmlWebpackPlugin(),
	],
}