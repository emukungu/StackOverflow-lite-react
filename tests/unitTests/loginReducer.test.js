import { loginReducer } from "../../src/reducers/loginReducer";
import { LOGIN } from "../../src/actions/actionTypes";
describe("login reducer", () => {
  it("should return initial state", () => {
    expect(loginReducer(undefined, {})).toEqual("");
  });

  it("User successfully logins", () => {
    expect(loginReducer([], {
      type: LOGIN,
      payload: "successful"
    })).toEqual("successful");
  });
});
