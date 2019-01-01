import React, { Component } from "react";
import { connect } from "react-redux";

import specificQuestionAction from "../actions/specificQuestion";

export class SpecificQuestion extends Component {
  componentDidMount() {
    const { match, specificQn } = this.props;
    // const { id } = match.params;
    specificQn(match.params.id);
  }
  render() {
    const { question } = this.props;
    return (
      <div className="container ">
        <div className="row question-layout center-singleqn">
          <div className=" col-xs-12 col-md-12 qn-title">{question.title}</div>
          <div className=" col-xs-12 col-md-12 ">{question.description}</div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ allQnReducer }) => ({
  question: allQnReducer.question
});

export const mapDispatchToProps = dispatch => ({
  specificQn: id => dispatch(specificQuestionAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificQuestion);
