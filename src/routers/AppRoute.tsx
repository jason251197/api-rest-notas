import React from "react";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import NotaRoute from "./NotaRoute";


const AppRoute = () => {

  return (
    <Router>
      <Switch>
        <Route
          path="/notes"
          component={NotaRoute}
        />
        <Redirect to="/notes" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
