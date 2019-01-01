import React from "react";
import { mount } from "enzyme";

import { PostQnContainer, mapDispatchToProps } from "../../src/containers/postQuestion";

describe("post question", () => {
  let wrapper;
  const fn = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(<PostQnContainer post={fn} />);
  });
  it("should call the mock function", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {}
    });
    expect(fn.mock.calls.length).toBe(1);
  });
  it("handle successful post", () => {
    wrapper.find("input#title").simulate("change", {
      target: { name: "title", value: "Likes" }
    });
    wrapper.find("textarea#desc").simulate("change", {
      target: { name: "desc", value: "yes" }
    });
    wrapper.find("form").simulate("submit");
  });
  it("should successfully submit qn", () => {
    mapDispatchToProps(dispatch).post();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
