import allQnReducer from "../../src/reducers/allQnReducer";
import {
  ALL_QUESTIONS,
  SPECIFIC_QUESTION,
  POST_QUESTION
} from "../../src/actions/actionTypes";
import { initialState } from "../../src/reducers/initialState";
describe("all questions reducer", () => {
  it("should return initial state", () => {
    expect(allQnReducer(undefined, {})).toEqual(initialState);
  });

  it("receive all questions", () => {
    expect(
      allQnReducer([], {
        type: ALL_QUESTIONS,
        payload: [
          { title: "now", author: "marcus" },
          { title: "now2", author: "luke" }
        ]
      })
    ).toEqual({
      list: [
        { title: "now", author: "marcus" },
        { title: "now2", author: "luke" }
      ]
    });
  });
  it("receive a specific question", () => {
    expect(
      allQnReducer([], {
        type: SPECIFIC_QUESTION,
        payload: { title: "worms", description: "lukewarm", qn_id: 2 }
      })
    ).toEqual({
      question: { title: "worms", description: "lukewarm", qn_id: 2 }
    });
  });
  it("post a question", () => {
    expect(
      allQnReducer([], {
        type: POST_QUESTION,
        payload: "successful"
      })
    ).toEqual({ message: "successful" });
  });
});
