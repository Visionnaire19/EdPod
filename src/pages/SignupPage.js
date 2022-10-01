import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MainPage.css';
import './SignupPage.css';


const SignupPage = () => {
    return (

            <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username (4 - 16 characters)</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email (.edu if available)" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Do you want to interact with your university only?" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
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