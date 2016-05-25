const path = require('path');
const webpack = require('webpack');
const host = 'localhost';
const port = 3001;
const AssetsPlugin = require('assets-webpack-plugin');

const STATIC_DIRECTORY = 'static';

module.exports = {
  target: 'web',
  devServerPort: port,
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, STATIC_DIRECTORY),
    filename: '[name].[hash].js',
    publicPath: `http://${host}:${port}/${STATIC_DIRECTORY}/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: 'assets.json',
      path: __dirname,
      fullPath: false
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
    ]
  }
};
