import { signupReducer } from "../../src/reducers/signupReducer";
import { SIGN_UP } from "../../src/actions/actionTypes";
describe("signup reducer", () => {
  it("should return initial state", () => {
    expect(signupReducer(undefined, {})).toEqual("");
  });

  it("User successfully signups", () => {
    expect(signupReducer([], {
        type: SIGN_UP,
        payload: "successful"
      })).toEqual("successful" );
  });
});
