import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.CREATE} component={LoginPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
