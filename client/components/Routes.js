import React from "react";
import { HomePage, RegisterPage } from "../exports";
import { Route, Switch } from "react-router-dom";
import "./Routes.scss";
const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default Routes;
