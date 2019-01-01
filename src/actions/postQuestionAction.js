import { POST_QUESTION } from "../actions/actionTypes";


const POSTQN_URL = "http://localhost:5000/api/v1/questions";
const token = localStorage.getItem("token");
export const postQnAction = data => {
  return dispatch => {
    return fetch(POSTQN_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res.Successful) {
          window.location.replace("/questions");
        } else {
          dispatch({ type: POST_QUESTION, payload: res });
        }
      })
      .catch(error => error);
  };
};

export default postQnAction;
