import React, { Component } from "react";

import PostQn from "../components/postQuestion";
import postQnAction from "../actions/postQuestionAction";
import { connect } from "react-redux";

export class PostQnContainer extends Component {
  state = {
    title: "",
    desc: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, desc } = this.state;
    const data = {
      title: title,
      description: desc
    };
    this.props.post(data);
  };
  render() {
    return (
      <div>
        <PostQn
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  post: data => dispatch(postQnAction(data))
});

export default connect(
  null,
  mapDispatchToProps
)(PostQnContainer);
