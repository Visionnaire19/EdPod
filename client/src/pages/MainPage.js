import React from "react";
import { Form } from "react-bootstrap";
import "./MainPage.css";
import NavBar from "../components/NavbarLogin";


const MainPage = () => {
  return (
    <>
    <NavBar />
    <div className="wrapper">
      <input className="textBox"> 
      </input>
      <p >
        Enter the subject or course you are currently working on.
      </p>
      <p>
        Or click on one below to get started.
      </p>
    </div>
    </>
  );
};


export default MainPage;
