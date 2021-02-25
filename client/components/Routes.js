import React from 'react';
import { HomePage } from '../exports';
import { Route, Switch } from 'react-router-dom';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
