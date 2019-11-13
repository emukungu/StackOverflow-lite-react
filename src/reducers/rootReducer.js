import { combineReducers } from "redux";

import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import allQnReducer from "./allQnReducer";

const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  allQnReducer
});

export default rootReducer;
