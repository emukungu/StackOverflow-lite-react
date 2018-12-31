import { initialState } from "./initialState";
import { LOGIN } from "../actions/actionTypes";

export const loginReducer = (state = initialState.message, action) => {
  const { payload } = action
  switch (action.type) {
    case LOGIN:
      return payload;
    default:
      return state;
  }
}
