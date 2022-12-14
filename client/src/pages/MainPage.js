import React, { useEffect, useState } from "react";
import "./MainPage.css";
import NavBar from "../components/NavbarLogin";
import Bubbles from "../components/Bubbles";
import {randomNumberInRange, get, post} from '../utils'

const MainPage = ({userId}) => {

  if(!userId){
    useEffect(() => {
      get("/api/whoami").then((user) => {
        if (user._id) {
          // they are registed in the database, and currently logged in.
          setUserId(user._id);
          console.log("user_ID", user_id)
          // setUser(user);
        }
      });
    }, []);
  }
  
  return (
    <>
    <NavBar userId={userId}></NavBar>
      <div className="wrapper">
        <div className="upper">
          <p className="slogan">Connecting learners beyond the classroom</p>
          <input className="textBox"></input>
          <div className="subtext">
            <p>
              Enter the subject or course you are currently working on. Or click on one below to get
              started.
            </p>
          </div>
        </div>
        <div className="bubbles">
          <a href="/subjects/Calculus">
            <Bubbles subject="Calculus 1" color="#FFC44D" href="/subjects/Calculus" userId={userId}/>
          </a>
          <a href="/subjects/Calculus">
          <Bubbles subject="Calculus 2" color="#FFC44D" userId={userId}/>
          </a>
          <a href="/subjects/Differential Equation">
          <Bubbles subject="Differential Equation" color="#FFC44D" userId={userId} />
          </a>
          <a href="/subjects/Linear Algebra">
          <Bubbles subject="Linear Algebra" color="#FFC44D" userId={userId} />
          </a>
          <a href="/subjects/Python">
          <Bubbles subject="Python" color="#4D88FF" userId={userId} />
          </a>
          <a href="/subjects/Java">
          <Bubbles subject="Java" color="#4D88FF"  userId={userId}/>
          </a>
          <a href="/subjects/C">
          <Bubbles subject="C" color="#4D88FF"  userId={userId}/>
          </a>
          <a href="/subjects/HTMLCSS">
          <Bubbles subject="HTML/CSS" color="#4D88FF" userId={userId} />
          </a>
          <a href="/subjects/JavaScript">
          <Bubbles subject="JavaScript" color="#4D88FF" userId={userId} />
          </a>
          <a href="/subjects/Biology">
          <Bubbles subject="Biology" color="#31CE7E"  userId={userId}/>
          </a>
          <a href="/subjects/Chemistry">
          <Bubbles subject="Chemistry" color="#31CE7E" userId={userId} />
          </a>
          <a href="/subjects/Physics">
          <Bubbles subject="Physics" color="#31CE7E" userId={userId} />
          </a>
          <a href="/subjects/English">
          <Bubbles subject="English" color="#D295FF"  userId={userId}/>
          </a>
          <a href="/subjects/French">
          <Bubbles subject="French" color="#D295FF"  userId={userId}/>
          </a>
          <a href="/subjects/German">
          <Bubbles subject="German" color="#D295FF"  userId={userId}/>
          </a>
          <a href="/subjects/Spanish">
          <Bubbles subject="Spanish" color="#D295FF"  userId={userId}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainPage;
