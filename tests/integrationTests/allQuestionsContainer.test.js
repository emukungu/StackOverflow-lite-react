import React from "react";
import { shallow } from "enzyme";

import {
  AllQuestions,
  QuestionLayout
} from "../../src/containers/allQuestions";

describe("<All questions />", () => {
  it("renders the component", () => {
    const list = [
      { title: "now", author: "marcus" },
      { title: "now2", author: "markz" }
    ];
    const component = shallow(
      <AllQuestions list={list} allQns={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  it("renders the cardlayout component", () => {
    const questionDetails = { title: "now", author: "Lucas"}
    const component = shallow(
      <QuestionLayout question={questionDetails} />
    );
    expect(component).toMatchSnapshot();
  });
});
