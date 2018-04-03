const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: ['./server/index.js', './node_modules/webpack/hot/poll?1000'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [/^[a-z]/],
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
      },
    ],
  },
  devtool: 'inline-source-map',
};
