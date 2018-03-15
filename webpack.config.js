const webpack = require('webpack');
const path = require('path');

module.exports = {

	entry: {
		app: "./src/App.jsx",
		// vendor: ['react', 'react-dom', 'whatwg-fetch'],
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, "static"),
		publicPath: "./",
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "initial",
					test: path.resolve(__dirname, "node_modules"),
					name: "vendor",
					enforce: true
				},
				app: {
					chunks: "initial",
					test: "app",
					name: "app",
					enforce: true
				}
			}
		}
	},
	// plugins: [
	// 	new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
	// ],
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
