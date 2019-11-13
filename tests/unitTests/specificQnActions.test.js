/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import specificQuestionAction from "../../src/actions/specificQuestion";
import { SPECIFIC_QUESTION } from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const questionId = "1"

describe(" specific question ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("return a speific questions", () => {
    fetchMock.get(
      `https://stackoverflow-esther.herokuapp.com/api/v1/questions/${questionId}`,
      {
        headers: {
          "content-type": "application/json"
        },
        body: []
      }
    );
    const store = mockStore();
    const expectedAction = [{ type: SPECIFIC_QUESTION, payload: undefined}];
    return store
      .dispatch(specificQuestionAction(questionId))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });

  it("fails to return a specific question", () => {
    fetch.mockReject(new Error());
    const store = mockStore();

    store.dispatch(specificQuestionAction());
    expect(store.getActions()).toEqual([]);
  });

});
