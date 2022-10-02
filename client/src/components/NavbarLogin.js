import React from "react";
import "./NavbarLogin.css";

const NavBar = () => {
  return (
    <div className="navbar">
    <header className="pageTitle">
      EdPod
    </header>

    <div className="buttons">
      <button type="button" className="signUpButton">
        Sign Up
      </button>
      <button type="button" className="loginButton">
        Log In
      </button>
    </div>

    </div>
  );
};

export default NavBar;