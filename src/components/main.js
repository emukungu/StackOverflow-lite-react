import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../containers/signup";
import Login from "../containers/login";

import AllQuestions from "../containers/allQuestions";
const Main = () => (
  <Switch>
    <Route exact path="/" component={AllQuestions} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/questions" component={AllQuestions} />
    
  </Switch>
);

export default Main;
