const path = require('path');
module.exports = {
	entry:'./src/script/main.js',
	output:{
		 path: path.resolve(__dirname, "dist/js"), // string
		filename:'bundle.js'
	}
}