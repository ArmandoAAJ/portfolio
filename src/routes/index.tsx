import React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard/index";
import { Projects } from "../pages/Projects/index";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};
