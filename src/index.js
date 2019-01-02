import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { BrowserRouter  as Router} from "react-router-dom";
import { Provider } from "react-redux";
import "../src/assets/css/styles.css";

import App from "../src/components/App";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
