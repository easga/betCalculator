import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { crashReporter, loggerMiddleware } from '../middleware/logger';

const getComposer = () => {
  const middlewares = [
    thunk,
    loggerMiddleware,
    crashReporter
  ];
  const appliedMiddleware = applyMiddleware(...middlewares);
  const initDevToolsIfAvailable = (typeof window === 'object' && typeof window.devToolsExtension === 'function') ?
    window.devToolsExtension()
    : f => f;
  return compose(
    appliedMiddleware, // Enables middlewares
    initDevToolsIfAvailable
  );
};

const enableWebPackHotModuleReplacementForReducers = (module, store) => {
  if (!module.hot) { return; }
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
};

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, getComposer());
  enableWebPackHotModuleReplacementForReducers(module, store);
  return store;
}
