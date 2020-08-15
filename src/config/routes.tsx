import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Home/Home';
import NotFoundPage from '../views/NotFound/NotFoundPage';
import { HOME_PAGE, NOT_FOUND_PAGE } from './paths';

/**
 * Routes configuration for route
 * @constant
 */
const routes = (
  <Switch>
    <Route
      exact
      path={HOME_PAGE}
      render={(props) => (
        <Dashboard {...props}>
          <Home {...props} />
        </Dashboard>
      )}
    />
    <Route path={NOT_FOUND_PAGE} render={(props) => <NotFoundPage {...props} />} />
  </Switch>
);

export default routes;
