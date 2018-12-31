import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import allQnReducer from "../../src/reducers/allQnReducer";
import allQuestionsAction from "../../src/actions/allQuestions";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../src/containers/allQuestions";
import { ALL_QUESTIONS } from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({ list: [] });
describe("allquestions list", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("test successfully fetch all questions", () => {
    fetchMock.get("http://localhost:5000/api/v1/questions", {
      headers: {
        "content-type": "application/json"
      },
      body: []
    });

    return store.dispatch(allQuestionsAction()).then(() => {
      expect(store.getActions()).toEqual([
        { type: ALL_QUESTIONS, payload: undefined }
      ]);
    });
  });

  it("fetching bookmarksfails", () => {
    fetch.mockReject(new Error());
    const store = mockStore();

    store.dispatch(allQuestionsAction());
    expect(store.getActions()).toEqual([]);
  });
});

describe("test mappings to Props", () => {
  it("should test mapStateToProps", () => {
    expect(mapStateToProps({ allQnReducer }).list).toEqual(undefined);
  });
  it("should test mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).allQns();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
