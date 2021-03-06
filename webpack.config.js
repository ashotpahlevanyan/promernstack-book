//  const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    app: ['./client/Client.jsx'],
    // vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router'],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '**': {
        target: 'http://localhost:3000/',
      },
    },
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: './',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          enforce: true,
        },
        app: {
          chunks: 'initial',
          test: 'app',
          name: 'app',
          enforce: true,
        },
      },
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
