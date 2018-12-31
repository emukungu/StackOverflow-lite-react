import React from "react";
import { mount } from "enzyme";

import {
  Signup,
  mapDispatchToProps
} from "../../src/containers/signup";

describe("update user password", () => {
  let wrapper;
  const change = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(<Signup signup={change} />);
  });
  it("should call the mock change function", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() { }
    });
    expect(change.mock.calls.length).toBe(1);
  });
  it("handle successful user registration", () => {
    wrapper.find("input#username").simulate("change", {
      target: { name: "username", value: "mark" }
    });
    wrapper.find("input#password").simulate("change", {
      target: { name: "password", value: "mark" }
    })
    wrapper.find("input#email").simulate("change", {
      target: { name: "email", value: "mark@gmail.com" }
    })
    wrapper.find("form").simulate("submit");
  });
  it("should update password on submission", () => {
    mapDispatchToProps(dispatch).signup();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
