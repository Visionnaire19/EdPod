import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarLogin from '../components/NavbarLogin';
import './LoginPage.css';
import './MainPage.css';
import './Forms.css';


function collectLogin () {
  const username = document.getElementById('Username').value;
  const password = document.getElementById('Password').value;
  
}

const LoginPage = () => {
    return (
      <>
      <NavbarLogin />
    <div className="wrapper">
    <form onSubmit={collectLogin}>
        <label className="label">Username (4 - 16 characters)</label>
        <input type="text" id="Username" className="box" placeholder="Enter username"></input>
        <label className="label">Password</label>
        <input type="password" id="Password" className="box" placeholder="Password" />
      <button variant="primary" type="submit" className="button">
        Login
      </button>
      <small className="small">Not registered yet? Sign up <a target="/signup">here!</a></small>
    </form>
    </div>
    </>
   );
}

export default LoginPage;

