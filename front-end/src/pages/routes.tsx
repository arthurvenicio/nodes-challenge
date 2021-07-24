import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
