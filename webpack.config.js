const path = require('path');

module.exports = {
	entry: "./src/App.jsx",
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, "static"),
		filename: "app.bundle.js",
		publicPath: "./",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					presets: ["react", "es2015"]
				},
			}
		]
	}
};
