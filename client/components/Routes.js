import React from 'react';
import { HomePage } from '../exports';
import { Route, Switch } from 'react-router-dom';
import './Routes.scss';
const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Routes;
