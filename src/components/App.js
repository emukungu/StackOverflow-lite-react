import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../containers/signup";
const App = () => {
    return (
        <div>
            <Switch>
              <Route path = "/" component = { Signup }/>
            </Switch>
        </div>
    );
};

export default App;
