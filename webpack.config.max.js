const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		a: './src/script/a.js',
		b: './src/script/b.js',
		c:'./src/script/c.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"), // string
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'https://www.baidu.com/'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			inject:false,
			template: 'index.html',
			title: 'a',
			test: 'this is test',
			chunks:['a']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',
			title: 'b',
			test: 'this is test',
			chunks:['b']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index.html',
			title: 'c',
			test: 'this is test',
			chunks:['c']
		}),
	],
}