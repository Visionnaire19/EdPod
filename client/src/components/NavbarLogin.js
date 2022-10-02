import React from "react";
import "./NavbarLogin.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <header className="pageTitle">EdPod</header>
      </a>

      <div className="buttons">
        <a href="/signup">
          <button type="button" className="signUpButton">
            Sign Up
          </button>
        </a>
        <a href="/login">
          <button type="button" className="loginButton">
            Log In
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
