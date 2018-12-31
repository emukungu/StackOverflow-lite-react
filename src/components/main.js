import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../containers/signup";
import Login from "../containers/login";
import  { LogoutLink } from "./header";
const Main = () => (
  <Switch>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={LogoutLink} />
  </Switch>
);

export default Main;
