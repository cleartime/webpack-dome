const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"), // string
		filename: 'js/[name].js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader'
		}]
	},
}