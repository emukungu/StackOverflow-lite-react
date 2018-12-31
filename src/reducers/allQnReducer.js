import { initialState } from "./initialState";
import { ALL_QUESTIONS } from "../actions/actionTypes";

const allQnReducer = (state = initialState, action) => {
  switch (action.type) {
  case ALL_QUESTIONS:
    return { ...state,
      list: action.payload };
  default:
    return state;
  }
};

export default allQnReducer;
