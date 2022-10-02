import React from "react";
import "./MainPage.css";
import NavBar from "../components/NavbarLogin";
import Bubbles from "../components/Bubbles";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="upper">
          <p className="slogan">Connecting learners beyond the classroom</p>
        <input className="textBox"></input>
        <div className="subtext">
          <p>Enter the subject or course you are currently working on. Or click on one below to get started.</p>
        </div>
        </div>
        <div className="bubbles">
        <Bubbles subject="Calculus 1" color="#FFC44D" href="/subjects/Calculus"/>
        <Bubbles subject="Calculus 2" color="#FFC44D" />
        <Bubbles subject="Differential Equation" color="#FFC44D" />
        <Bubbles subject="Linear Algebra" color="#FFC44D" />
        <Bubbles subject="Python" color="#4D88FF" />
        <Bubbles subject="Java" color="#4D88FF" />
        <Bubbles subject="C" color="#4D88FF" />
        <Bubbles subject="HTML/CSS" color="#4D88FF" />
        <Bubbles subject="JavaScript" color="#4D88FF" />
        <Bubbles subject="Biology" color="#31CE7E" />
        <Bubbles subject="Chemistry" color="#31CE7E" />
        <Bubbles subject="Physics" color="#31CE7E" />
        <Bubbles subject="English" color="#D295FF" />
        <Bubbles subject="French" color="#D295FF" />
        <Bubbles subject="German" color="#D295FF" />
        <Bubbles subject="Spanish" color="#D295FF" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
