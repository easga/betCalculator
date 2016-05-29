import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';

import configureStore from '../common/store/configureStore';
import routes from '../common/router/routes';
import { logger } from '../common/utils/logger';
require('./scss/bundle.scss');

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

const getProvider = () =>
  <Provider store={store}>
    <div>
      <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        {routes}
      </Router>
    </div>
  </Provider>;

window.onerror = function sendErrorToServer (errorMsg, url, lineNumber, column, errorObj) {
  logger.fatalException({
    msg: 'Exception!',
    errorMsg,
    url,
    'line number': lineNumber,
    column
  }, errorObj);
  return false;
};

const renderClient = () => {
  const provider = getProvider();
  ReactDOM.render(provider, rootElement);
};
renderClient();
