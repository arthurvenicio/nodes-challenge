import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { List } from "./List";

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/notes"} exact component={List} />
      </Switch>
    </BrowserRouter>
  );
}
