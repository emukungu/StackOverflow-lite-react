import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../../src/components/App";
import SignupComponent from "../../src/components/signup";
import LoginComponent from "../../src/components/login";
import { Header, HomeLink, HomeHeader, LoggedInHeader, logoutLink } from "../../src/components/header";
import Main from "../../src/components/main";
import { SpecificQuestion } from "../../src/containers/specificQn";
import Home from "../../src/components/home";

describe("<App />", () => {
  it("test App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it("tests the signup snapshot", () => {
    const component = shallow(<SignupComponent />);
    expect(component).toMatchSnapshot();
  });

  it("tests the login snapshot", () => {
    const component = shallow(<LoginComponent />);
    expect(component).toMatchSnapshot();
  });

  it("tests the header snapshot", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  it("tests the homeheader snapshot", () => {
    const component = shallow(<HomeHeader />);
    expect(component).toMatchSnapshot();
  });
  it("tests the LoggedInHeader snapshot", () => {
    const component = shallow(<LoggedInHeader />);
    expect(component).toMatchSnapshot();
  });

  it("tests the Main snapshot", () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });

  it("tests the Home snapshot", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
  it("logout successful", () => {
    logoutLink()
  });
  it("renders the component", () => {
    const question = { title: "worms", description: "lukewarm", qn_id: 2 };
    const component = shallow(
      <SpecificQuestion
        question={question}
        specificQn={jest.fn()}
        match={{ params: { id: 1 } }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
