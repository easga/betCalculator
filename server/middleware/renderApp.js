import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { logger } from './logger';
import configureStore from '../../common/store/configureStore';
import { receiveCommission } from '../../common/actions/commissions';
import defaultCommissions from '../../common/constants/defaultCommissions';
import routes from '../../common/router/routes';
const assets = require('../../assets.json');

const renderIndexPage = (reactHTML, initialState) => {
  // css is injected into style tag by webpack in dev mode
  const { css, js } = assets.main;
  // css is injected into style tag by webpack in dev mode, so it would not be in the assets hash
  const maybeCssAsset = !css ? '' : `<link rel="stylesheet" href="/static/${css}">`;
  const meta = DocumentMeta.renderAsHTML();
  return `
    <!doctype html>
    <html>
      <head>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        ${meta}
        <title>Bet Calculator</title>
        ${maybeCssAsset}
        <link rel="icon" href="/static/favicon.ico">
      </head>
      <body>
        <div id="app">${reactHTML}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          window.__ENV__ = {
            LOG_LEVEL: '${logger.logLevel}',
          };
        </script>
        <script src="/static/${js}"></script>
      </body>
    </html>
    `;
};

const renderReact = (store, renderProps) => ReactDOMServer.renderToString(
  <Provider store={store}>
    <div>
      <RouterContext {...renderProps} />
    </div>
  </Provider>
);

const renderApp = (req, res) => {
  const store = configureStore({});
  Object.keys(defaultCommissions).map(key =>
    store.dispatch(receiveCommission({ type: key, value: defaultCommissions[key] })));
  // Trigger the routing
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) { logger.error('Routing error:', error); }
    if (redirectLocation) { logger.info('Routing redirect:', redirectLocation); }
    if (!renderProps) { logger.error('Undefined router state: 404'); }
      // Send the rendered page back to the client
    const finalHTML = renderIndexPage(renderReact(store, renderProps), store.getState());
    res.send(finalHTML);
  });
};

export default renderApp;
