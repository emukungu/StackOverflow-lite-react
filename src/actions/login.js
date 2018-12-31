// actions describe something happening, and the reducer responds to the action.
import { LOGIN } from "../actions/actionTypes";

export const successfulLogin = res => {
  console.log(res.token);
  localStorage.setItem("token", res.token);
  window.location.replace("/questions");
};
const LOGIN_URL = "http://localhost:5000/api/v1/auth/login";
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
        }
      })
      .catch(error => error);
  };
};

export default loginAction;
