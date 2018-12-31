import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import allQuestionsAction from "../actions/allQuestions";

export const QuestionLayout = props => {
  const { title, username } = props.question;
  return (
    <div className="question-layout">
      <div className="row">
        <div className=" col-xs-12 col-md-12 qn-title">
          <NavLink to="/specificQuestion">
            {title}
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className=" col-xs-12 col-md-12 qn-author">Author: {username}</div>
      </div>
    </div>
  );
};

export class AllQuestions extends Component {
  componentDidMount() {
    this.props.allQns();
  }
  render() {
    const { list } = this.props;
    console.log(list);
    return (
      <div className="container">
        <div className="row centered page-header">
          <div className=" col-xs-6 col-md-6 qnHeader">
            <p>All Questions</p>
          </div>
          <div className=" col-xs-6 col-md-6">
            <NavLink to="/postQuestion" className="qnLink">
              Post Question
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className=" col-xs-12 col-md-12 centered">
            {list.map((item, index) => (
              <QuestionLayout
                key={index}
                question={item}
                // clickHandler={clickHandler(list)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ allQnReducer }) => ({
  list: allQnReducer.list
});

export const mapDispatchToProps = dispatch => ({
  allQns: () => dispatch(allQuestionsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllQuestions);
