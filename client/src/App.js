import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import './App.css';
import MainPage from './pages/MainPage.js';
import SubjectPage from "./pages/SubjectPage";
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import NavBar from "./components/NavbarLogin"
import {randomNumberInRange, get, post} from './utils'

function App() {
  const [userId, setUserId] = useState(undefined);

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
  return (
    <div className="App">
      {/* <NavBar userId={userId}/> */}
      <div className="App-container">
      
      <Router>
        <MainPage path="/:userId" userId={userId}/> 
        <MainPage path="/" userId={userId}/>
        <SubjectPage path="subjects/:SubjectName"></SubjectPage>
        <LoginPage path="/login"></LoginPage>
        <SignupPage path="/signup"></SignupPage>
        </Router>
        
    </div>
    </div>
  );
}

export default App;
