import allQnReducer from "../../src/reducers/allQnReducer";
import { ALL_QUESTIONS } from "../../src/actions/actionTypes";
import { initialState } from "../../src/reducers/initialState";
describe("all questions reducer", () => {
  it("should return initial state", () => {
    expect(allQnReducer(undefined, {})).toEqual(initialState);
  });

  it("receive all bookmarks", () => {
    expect(allQnReducer([], {
        type: ALL_QUESTIONS,
        payload: [
          { title: "now", author: "marcus" },
          { title: "now2", author: "luke" }
        ]
      })).toEqual({
      list: [
        { title: "now", author: "marcus" },
        { title: "now2", author: "luke" }
      ]
    });
  });
});
