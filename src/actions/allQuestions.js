import { ALL_QUESTIONS } from "./actionTypes";


const ALLQN_URL = "http://localhost:5000/api/v1/questions";
export const allQuestionsAction = () => {
  return dispatch => {
    return fetch(ALLQN_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => {
        return response.json()})
      .then(res => {
        if (!res.message) {
          dispatch({ type: ALL_QUESTIONS, payload: res.Results });
        }
      })
      .catch(error => error);
  };
};

export default allQuestionsAction;
