import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export const LogoutLink = () => {
  localStorage.removeItem("token");
};
export const HomeLink = () => {
  return (
    <NavLink to={"/home"} className="home">
      Home
    </NavLink>
  );
};
export const HomeHeader = () => {
  return (
    <nav className=" navbar">
      {/* <HomeLink /> */}
      <NavLink to={"/login"} className="signupLinks login-link">
        Login
      </NavLink>

      <NavLink to={"/signup"} className="signupLinks">
        Sign Up
      </NavLink>
    </nav>
  );
};

export const LoggedInHeader = () => {
  return (
    <nav className=" navbar">
      <HomeLink />
      <NavLink to={"/home"} className="signupLinks login-link">
        Logout
      </NavLink>
    </nav>
  );
};
export class Header extends Component {
  render() {
    const token = localStorage.getItem("token");
    if (token) {
      return <LoggedInHeader />;
    } else {
      return <HomeHeader />;
    }
  }
}
export default Header;
