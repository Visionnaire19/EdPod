import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarLogin from '../components/NavbarLogin';
import './MainPage.css';
import './SignupPage.css';
import './Forms.css';
import '../utils.css'


const SignupPage = () => {
    return (
      <>
      <NavbarLogin />
          <div className="wrapper">
            <main className="MainPage-container">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="label">Username (4 - 16 characters)</Form.Label>
                <Form.Control type="email" className="box" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control type="email" className="box" placeholder="Enter email (.edu if available)" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control type="password" className="box" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" className="small" label="Do you want to interact with your university only?" />
              </Form.Group>
              <Button variant="primary" className="sign_button" type="submit">
                Sign Up
              </Button>
            </Form>
            </main>
            </div>
            </>
          )
}

export default SignupPage;


const universities = [
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
]