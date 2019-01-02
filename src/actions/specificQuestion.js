import { SPECIFIC_QUESTION } from "./actionTypes";
import error from "../../utils";
export const specificQuestionAction = questionId => {
  return dispatch => {
    return fetch(
      `https://stackoverflow-esther.herokuapp.com/api/v1/questions/${questionId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(res => {
        if (!res.message) {
          dispatch({ type: SPECIFIC_QUESTION, payload: res.Question });
        } else {
          error(res.messgae);
        }
      })
      .catch(error => error);
  };
};

export default specificQuestionAction;
