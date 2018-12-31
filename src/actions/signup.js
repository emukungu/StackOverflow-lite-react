// actions describe something happening, and the reducer responds to the action.
import { SIGN_UP } from "../actions/actionTypes";
// import loginAction from "./login";

const SIGNUP_URL =
  "https://stackoverflow-esther.herokuapp.com/api/v1/auth/signup";
export const signupAction = data => {
  return dispatch => {
    return fetch(SIGNUP_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === "You have been successfully registered") {
          const loginData = {
            username: data.username,
            password: data.password
          };
          loginAction(loginData);
        } else {
          dispatch({ type: SIGN_UP, payload: res });
        }
      })
      .catch(error => error);
  };
};

export default signupAction;
