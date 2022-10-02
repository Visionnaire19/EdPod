import React from "react";
import { Router } from "@reach/router";
import './App.css';
import MainPage from './pages/MainPage.js';
import SubjectPage from "./pages/SubjectPage";
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <Router>
        <MainPage path="/"/>
        <SubjectPage path="subjects/:SubjectName"></SubjectPage>
        <LoginPage path="/login"></LoginPage>
        <SignupPage path="/signup"></SignupPage>
        </Router>
        
    </div>
    </div>
  );
}

export default App;
