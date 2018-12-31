/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import signupAction from "../../src/actions/signup";
import { SIGN_UP } from "../../src/actions/actionTypes";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const SIGNUP_URL = "https://stackoverflow-esther.herokuapp.com/api/v1/auth/signup";

const data = {
    username: "mark",
    email: "mark@gmail.com",
    password: "password"

};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("registers a user by call the SignUpAction", () => {
    fetchMock.post(SIGNUP_URL, data);
    const store = mockStore();
    const expectedAction = [{ type: SIGN_UP, payload: data }];
    return store
      .dispatch(signupAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });

  it("registration fails", () => {
    fetch.mockReject(new Error());
    const store = mockStore();

    store.dispatch(signupAction(data));
    expect(store.getActions()).toEqual([]);
  });
});
