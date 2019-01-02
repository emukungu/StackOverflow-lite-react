// actions describe something happening, and the reducer responds to the action.
import { LOGIN } from "../actions/actionTypes";
import error from "../../utils";

export const successfulLogin = res => {
  localStorage.setItem("token", res.token);
  window.location.replace("/questions");
};
const LOGIN_URL =
  "https://stackoverflow-esther.herokuapp.com/api/v1/auth/login";
export const loginAction = data => {
  return dispatch => {
    return fetch(LOGIN_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          successfulLogin(res);
        } else {
          dispatch({ type: LOGIN, payload: res });
          error(res.message);
        }
      })
      .catch(error => error);
  };
};

export default loginAction;
