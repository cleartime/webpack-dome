const path = require('path');
module.exports = {
	entry:{
		a:'./hello.js',
		b:'./word.js'
	},
	output:{
		 path: path.resolve(__dirname, "dist/js"), // string
		filename:'[name]-[chunkhash].js',
	},
}