import React from "react";
import { Input } from "./signup";

export const LoginComponent = props => {
  const { handleSubmit, handleChange } = props;
  return (
    <div className="container">
      <div className="row">
        <div className=" col-xs-12 col-md-6">
          <h1>StackOverflow-Lite</h1><p>A platform where people can ask questions and provide answers.</p>
        </div>
        <div className=" col-xs-12 col-md-6 center-signup"><h2>LOGIN</h2>
          <form onSubmit={handleSubmit} className="form-boundary">
            <Input htmlFor={"Username"} innerHTML={"Username"}
                name={"username"} id={"username"}
                handleChange={handleChange}
                type={"text"}
                placeholder={"Username"}/>
            <Input htmlFor={"Password"} innerHTML={"Password"}
                id={"password"} name={"password"}
                handleChange={handleChange}
                type={"password"}
                placeholder={"Password"} />
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );};

export default LoginComponent;
