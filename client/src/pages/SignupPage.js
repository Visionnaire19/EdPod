import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarLogin from '../components/NavbarLogin';
import './MainPage.css';
import './SignupPage.css';
import './Forms.css';
import '../utils.css'

function collectSignup () {
  let data = new FormData();
  data.append('username', document.getElementById('Username').value);
  data.append('password', document.getElementById('Password').value);
  data.append('email', document.getElementById('Email').value);
  data.append('Checkbox', document.getElementById('Checkbox').value);
   }
  
const SignupPage = () => {

    return (
      <>
      <NavbarLogin />
          <div className="wrapper">
            <form onSubmit={collectSignup}>
                <label className="label">Username (4 - 16 characters)</label>
                <input type="text" id="Username" className="box" placeholder="Enter username"></input>
                <label className="label">Email</label>
                <input type="email" id="Email" className="box" placeholder="Enter email (.edu if available)" />
                <label className="label">Password</label>
                <input type="password" id="Password" className="box" placeholder="Password" />
                <input type="checkbox" id="Checkbox" className="small"></input>
              <button variant="primary" className="sign_button" type="submit">
                Sign Up
              </button>
            </form>
            </div>

          );
            </>
          )
}
export default SignupPage;


/* const universities = [
    "Massachusetts Institute of Technology",
    "Harvard University",
    "Stanford University",
    "University of California, Berkeley",
    "University of California, Los Angeles",
    "University of California, San Diego",
    "California Institute of Technology",
    "University of Washington",
    "University of Michigan",
    "New York University",
    "University of Pennsylvania",
    "Columbia University",
    "University of Chicago",
] */