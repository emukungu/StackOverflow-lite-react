import { initialState } from "./initialState";
import {
  ALL_QUESTIONS,
  SPECIFIC_QUESTION,
  POST_QUESTION
} from "../actions/actionTypes";

const allQnReducer = (state = initialState, action) => {
  switch (action.type) {
  case ALL_QUESTIONS:
    return { ...state,
      list: action.payload };
  case SPECIFIC_QUESTION:
  return { ...state,
    question: action.payload };
    case POST_QUESTION:
    return {
      ...state,
      message: action.payload
    };
  default:
    return state;
  }
};

export default allQnReducer;
