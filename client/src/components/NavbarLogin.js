import React from "react";
import "./NavbarLogin.css";

const NavBar = ({userId}) => {
  console.log("navbar", userId)
  return (
    <div className="navbar">
      <a href="/{userId}" className="underline">
        <header className="pageTitle">EdPod</header>
      </a>

      {userId ? <div className="buttons"><button type="button" className="signUpButton"> Logout</button></div>
      : <div className="buttons">
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
    </div>}

      
    </div>
  );
};

export default NavBar;
