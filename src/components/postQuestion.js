import React from "react";
import { Input } from "./signup";

export const PostQn = props => {
  const { handleSubmit, handleChange } = props;
  return <div className="container">
      <div className="row">
        <div className=" col-xs-12 col-md-6 center-login">
          <h2>ADD A QUESTION</h2>
          <form onSubmit={handleSubmit} className="form-boundary">
            <Input htmlFor={"title"}
                innerHTML={"Title"}
                name={"title"}
                id={"title"}
                handleChange={handleChange}
                type={"text"}/>
            <div>
              <label htmlFor="description">Description</label>
              <textarea id="desc"
                  className="form-control post-qn"
                  name="desc"
                  onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>
};

export default PostQn;
