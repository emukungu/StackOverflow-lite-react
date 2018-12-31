import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../../src/components/App";
import SignupComponent from "../../src/components/signup";


describe("<App />", () => {
  it("test App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it("tests the signup snapshot", () => {
    const component = shallow(<SignupComponent />);
    expect(component).toMatchSnapshot();
  });

});
