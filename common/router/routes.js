import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import Play from '../containers/Play';

const routes = [
  <Route key="0" name="app" path="/" component={App} />,
  <Route key="1" name="play" path="/play" component={Play} />
];

export default routes;
