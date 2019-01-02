import React from "react";
import { mount } from "enzyme";

import { Login, mapDispatchToProps } from "../../src/containers/login";

describe("user login", () => {
  let wrapper;
  const change = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(<Login login={change} />);
  });
  it("should call the change function", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() { }
    });
    expect(change.mock.calls.length).toBe(1);
  });
  it("handle successful user login", () => {
    wrapper.find("input#username").simulate("change", {
      target: { name: "username", value: "mark" }
    });
    wrapper.find("input#password").simulate("change", {
      target: { name: "password", value: "mark" }
    });
    wrapper.find("form").simulate("submit");
  });
  it("should test mapDispatchToProps", () => {
    mapDispatchToProps(dispatch).login();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
