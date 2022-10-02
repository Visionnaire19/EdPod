import React, { useEffect, useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarLogin from '../components/NavbarLogin';
import './MainPage.css';
import './SignupPage.css';
import './Forms.css';
import '../utils.css'
import { randomNumberInRange, get, post } from "../utils";

class SignupPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      email: '',
      institution: '',
      checkbox: '',
    }
  }

    handleDeltaName = (event) => {
      this.setState({username : event.target.value});}
      
    handleDeltaPassword = (event) => {
      this.setState({password : event.target.value});}

    handleDeltaEmail = (event) => {
      this.setState({email : event.target.value})};

    handleDeltaInstitution = (event) => {
      this.setState({institution : event.target.value});}

    handleDeltaCheckbox = (event) => {
      this.setState({checkbox : event.target.value});}
      
   

    handleSubmit = (event) => {
      document.write("JEAHH")
      post('/api/signup', {username: this.state.username, password: this.state.password, email: this.state.email, institution: this.state.institution, globalInteraction: this.state.checkbox}).then((pods) => {
        console.log("HERREEEEE", this.state.username, this.state.password, this.state.email, this.state.institution, this.state.checkbox, pods);
      });
        event.preventDefault();}

    render() {
  
    return (
      <>
      <NavbarLogin />
          <div className="wrapper">

            <form onSubmit={this.handleSubmit}>
                <label className="label">Username (4 - 16 characters)</label>
                <input type="text" id="Username" className="box" value={this.state.username}  onChange={this.handleDeltaName} placeholder="Enter username"></input>
                <label className="label">Email</label>
                <input type="email" id="Email" className="box" value={this.state.email} onChange={this.handleDeltaEmail} placeholder="Enter email (.edu if available)" />
                <label className="label">Password</label>
                <input type="password" id="Password" className="box" value={this.state.password} onChange={this.handleDeltaPassword} placeholder="Password" />
                <label className="label">Institution</label>
                <input type="text" id="Institution" className="box" value={this.state.institution}  onChange={this.handleDeltaInstitution} placeholder="Enter Institution" />
                <input type="radio" id="Checkbox" className="small"></input>
                <p>Do you want to interact only with other learners in your institution?</p>
              <button variant="primary" className="sign_button" type="submit">
                Sign Up
              </button>
            </form>
            </div>
            </>
          );
}
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