import React from "react";
import { mount } from "enzyme";

import {
  mapStateToProps,
  mapDispatchToProps
} from "../../src/containers/specificQn";
import allQnReducer from "../../src/reducers/allQnReducer";

describe("user login", () => {
  const dispatch = jest.fn();

  it("should test mapStateToProps", () => {
    expect(mapStateToProps({ allQnReducer }).question).toEqual(undefined);
  });
  it("should tset map Dispatch to Props", () => {
    mapDispatchToProps(dispatch).specificQn(1);
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
