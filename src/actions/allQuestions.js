import { ALL_QUESTIONS } from "./actionTypes";
import error from "../../utils";

const ALLQN_URL = "https://stackoverflow-esther.herokuapp.com/api/v1/questions";
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
        return response.json();
      })
      .then(res => {
        if (!res.message) {
          dispatch({ type: ALL_QUESTIONS, payload: res.Results });
        }
        else{
          error(res.message);
        }
      })
      .catch(error => error);
  };
};

export default allQuestionsAction;
