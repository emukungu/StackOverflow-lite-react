import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../containers/signup";
import Login from "../containers/login";

import AllQuestions from "../containers/allQuestions";
import SpecificQuestion from "../containers/specificQn";
const Main = () => (
  <Switch>
    <Route exact path="/" component={AllQuestions} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route exact path="/questions" component={AllQuestions} />
    <Route path="/questions/:id" component={SpecificQuestion} />
  </Switch>
);

export default Main;
