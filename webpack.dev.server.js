/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true
  }
}).listen(config.devServerPort, 'localhost', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`==> 🚧  Webpack development server listening on port ${config.devServerPort}`);
});
