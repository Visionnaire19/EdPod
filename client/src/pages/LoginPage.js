import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarLogin from '../components/NavbarLogin';
import './LoginPage.css';
import './MainPage.css';
import './Forms.css';



const LoginPage = () => {
  function collectLogin () {
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;
    console.log(email, password);
  }
    return (
      <>
      <NavbarLogin />
    <div className="wrapper">
        <Form>
      <Form.Group className="mb-3" id="Username">
        <Form.Label className="label">Username (4-16 characters)</Form.Label>
        <Form.Control type="text" className="box" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" id="Password">
        <Form.Label className="label">Password (8 - 16 characters)</Form.Label>
        <Form.Control type="password" className="box" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Login
      </Button>
      <small className="small">Not registered yet? Sign up <a target="/signup">here!</a></small>
    </Form>
    </div>
    </>
    )
}
export default LoginPage;

