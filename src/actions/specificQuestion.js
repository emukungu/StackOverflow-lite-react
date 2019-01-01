import { SPECIFIC_QUESTION } from "./actionTypes";

export const specificQuestionAction = questionId => {
  return dispatch => {
    return fetch(`http://localhost:5000/api/v1/questions/${questionId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        if (!res.message) {
          dispatch({ type: SPECIFIC_QUESTION, payload: res.Question });
        }
      })
      .catch(error => error);
  };
};

export default specificQuestionAction;
