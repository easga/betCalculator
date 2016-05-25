const path = require('path');
const mainPath = path.resolve(__dirname, 'client', 'index.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const STATIC_DIRECTORY = 'static';
const buildPath = path.resolve(__dirname, 'betCalculator', STATIC_DIRECTORY);

module.exports = {
  target: 'web',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      // WARNING: the following 'process.env.NODE_ENV' line is needed for now for getting a "Production" flavored build of React.
      // We'll need to be careful to monitor whether it should change in the future.
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  }
};
