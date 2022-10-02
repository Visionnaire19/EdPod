<<<<<<< HEAD
import React, { useEffect, useState, Component }from "react";
=======
import React from "react";
>>>>>>> f8d3d7c (bubble updates)
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavbarLogin from "../components/NavbarLogin";
import "./LoginPage.css";
import "./MainPage.css";
import "./Forms.css";
<<<<<<< HEAD
import { randomNumberInRange, get, post } from "../utils";



class LoginPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

    
    handleDeltaName = (event) => {
      this.setState({username : event.target.value});}
    
    handleDeltaPassword = (event) => {
      this.setState({password : event.target.value});}

    handleSubmit = (event) => {
      post('/api/login', {username: this.state.username, password: this.state.password}).then((pods) => {
        console.log("HERREEEEE", this.state.username, this.state.password, pods);
      });
        event.preventDefault();
    }
    render(){
    return (
      <>
      <NavbarLogin />
    <div className="wrapper">
    <form onSubmit={this.handleSubmit}>
        <label className="label">Username (4 - 16 characters)</label>
        <input type="text" id="Username" className="box" value={this.state.username} onChange={this.handleDeltaName} placeholder="Enter username"></input>
        <label className="label">Password</label>
        <input type="password" id="Password" className="box" value={this.state.password} onChange={this.handleDeltaPassword} placeholder="Password" />
      <button variant="primary" type="submit" className="button">
        Login
      </button>
      <small className="small">Not registered yet? Sign up <a target="/signup">here!</a></small>
    </form>
    </div>
    </>
   );
    }
    }
  

export default LoginPage;
    
=======

const LoginPage = () => {
  return (
    <>
      <NavbarLogin />
      <div className="wrapper">
        <div className="innerBox">
          <h1 className="title">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label">Username (4-16 characters)</Form.Label>
              <Form.Control type="text" className="box" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="label">Password (8 - 16 characters)</Form.Label>
              <Form.Control type="password" className="box" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="button">
              Login
            </Button>

            <a href="/signup">
              <small className="small">Not registered yet? Sign up here</small>
            </a>
          </Form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
>>>>>>> f8d3d7c (bubble updates)
