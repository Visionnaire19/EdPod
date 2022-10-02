import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './LoginPage.css';
import './MainPage.css';



const LoginPage = () => {
    return (
    <div className="wrapper">
        <main className="MainPage-container">
        <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username (4-16 characters)</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password (8 - 16 characters)</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
        <small className="small">Not registered yet? Sign up <a target="/SignupPage">here!</a></small>
      </Button>
    </Form>
    </main>
    </div>
    )
}
export default LoginPage;

