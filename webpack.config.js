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
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        // conditions for the issuer (the origin of the import)

        // flags to apply these rules, even if they are overridden (advanced option)

        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ["es2015"]
        },
        // options for the loader
      }]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
		}),
	],
}