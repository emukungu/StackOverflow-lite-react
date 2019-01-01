import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import postQnAction from "../../src/actions/postQuestionAction";
import { POST_QUESTION } from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const POST_URL =
  "http://localhost:5000/api/v1/questions";

const data = {
  title: "Today",
  description: "Monday"
};

describe(" post question actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("successfully posts a question", () => {
    fetchMock.post(POST_URL, data);
    const store = mockStore();
    const expectedAction = [{ type: POST_QUESTION, payload: data }];
    return store
      .dispatch(postQnAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });

  it("post fails", () => {
    fetch.mockReject(new Error());
    const store = mockStore();

    store.dispatch(postQnAction(data));
    expect(store.getActions()).toEqual([]);
  });

});
