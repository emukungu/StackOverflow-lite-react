import { loginReducer } from "../../src/reducers/loginReducer";
import { LOGIN } from "../../src/actions/actionTypes";
describe("login reducer", () => {
  it("should return initial state", () => {
    expect(loginReducer(undefined, {})).toEqual("");
  });

  it("User successfully logs in", () => {
    expect(loginReducer([], {
      type: LOGIN,
      payload: "successful"
    })).toEqual("successful");
  });
});
