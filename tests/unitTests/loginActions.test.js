/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import loginAction, { successfulLogin } from "../../src/actions/login";
import { LOGIN } from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const LOGIN_URL =
  "http://localhost:5000/api/v1/auth/login";

const data = {
  username: "mark",
  password: "password"
};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("registers a user by call the SignUpAction", () => {
    fetchMock.post(LOGIN_URL, data);
    const store = mockStore();
    const expectedAction = [{ type: LOGIN, payload: data }];
    return store
      .dispatch(loginAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });

  it("registration fails", () => {
    fetch.mockReject(new Error());
    const store = mockStore();

    store.dispatch(loginAction(data));
    expect(store.getActions()).toEqual([]);
  });

  it("registration successful", () => {
    const res = {token:"hello"}
    successfulLogin(res)
  });
});
