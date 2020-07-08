import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../screen/Main";
import Login from "../screen/Login";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
