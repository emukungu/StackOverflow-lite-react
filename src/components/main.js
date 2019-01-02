import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../containers/signup";
import Login from "../containers/login";

import AllQuestions from "../containers/allQuestions";
import SpecificQuestion from "../containers/specificQn";
import PostQnContainer  from "../containers/postQuestion";
import Home  from "../components/home";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/postQuestion" component={PostQnContainer} />
    <Route exact path="/questions" component={AllQuestions} />
    <Route path="/questions/:id" component={SpecificQuestion} />
  </Switch>
);

export default Main;
