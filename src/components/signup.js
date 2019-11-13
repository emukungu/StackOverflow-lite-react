import React from "react";

export const Input = props => {
  const { handleChange, type, id, placeholder, name, innerHTML , htmlFor} = props;
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{innerHTML}</label>
      <div className="md-form">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="form-control"
          name={name}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};
export const SignupComponent = props => {
  const { handleSubmit, handleChange } = props;
  return (
    <div className="container">
      <div className="row">
        <div className=" col-xs-12 col-md-6">
          <h1>StackOverflow-Lite</h1>
          <p>A platform where people can ask questions and provide answers.</p>
        </div>
        <div className=" col-xs-12 col-md-6 center-signup">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <Input htmlFor={"Username"}
                  innerHTML={"Username"}
                  name={"username"}
                  id={"username"}
                  handleChange={handleChange}
                  type={"text"}
                  placeholder={"Username"}/>
            <Input htmlFor={"Email"}
                  innerHTML={"Email"}
                  id={"email"}
                  name={"email"}
                  handleChange={handleChange}
                  type={"email"}
                  placeholder={"Email"}/>
            <Input htmlFor={"Password"}
                  innerHTML={"Password"}
                  id={"password"}
                  name={"password"}
                  handleChange={handleChange}
                  type={"password"}
                  placeholder={"Password"}/>
            <button type="submit" className="btn btn-default"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
