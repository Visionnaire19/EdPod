import React from "react";
import "./MainPage.css";
import NavBar from "../components/NavbarLogin";


const MainPage = () => {
  return (
    <>
    <NavBar />
    <div className="wrapper">
      <input className="textBox"> 
      </input>
      <div className="subtext">
      <p >
        Enter the subject or course you are currently working on.
      </p>
      <p>
        Or click on one below to get started.
      </p>
      </div>
    </div>
    </>
  );
};


export default MainPage;
