import React, { Component } from "react";
// import PropTypes from "prop-types";
// import signup from "../actions/signup";
import SignupComponent from "../components/signup";
import signupAction from "../actions/signup";
import { connect } from "react-redux";

export class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const data = {
      username: username,
      email: email,
      password: password
    };
    this.props.signup(data);
  };
  render() {
    return (
      <div>
        <SignupComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  signup: data => dispatch(signupAction(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
