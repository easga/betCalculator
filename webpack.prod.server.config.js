const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'betCalculator');
const mainPath = path.resolve(__dirname, 'server', 'server.js');

module.exports = {
  target: 'node',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  // Every non-relative module is external
  externals: /^[a-z\/\-0-9]+$/i,
  plugins: [
    new webpack.DefinePlugin({
      // WARNING: the following 'process.env.NODE_ENV' line is needed for now for getting a "Production" flavored build of React.
      // We'll need to be careful to monitor whether it should change in the future.
      'process.env.NODE_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      { from: 'package.json', to: 'package.json' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
