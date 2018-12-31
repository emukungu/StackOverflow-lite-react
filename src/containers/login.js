import React, { Component } from "react";
// import PropTypes from "prop-types";
// import signup from "../actions/signup";
import LoginComponent from "../components/login";
import loginAction from "../actions/login";
import { connect } from "react-redux";


export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const data = {
      username: username,
      password: password
    };
    this.props.login(data);
  };
  render() {
    return (
      <div>
        <LoginComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginAction(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
