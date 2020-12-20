//import React from 'react';
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Button from '@material-ui/core/Button';
import './login.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch, useNavigate} from "react-router-dom";

var data1 = false;

export class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            valid: false
        };
    }
    
    validateForm(e) {
        
        if(!this.state.valid) {
            e.preventDefault();
            alert('incorrect username or password');
        }
        
    }

    handleChangePass = (e) => {
      this.setState({
        password: e.target.value
      })
      fetch(`/login?email=${this.state.email}&password=${e.target.value}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
            this.setState({
                valid: data.response
            })
            console.log(this.state.valid)
        })
    }

    handleChangeEmail = (e) => {
      this.setState({
        email: e.target.value
      })
    }
    
    handleSubmit(event) {
      event.preventDefault();
    }
    
    
    
    render() {
        let email = this.state.email
        return(
            <div>
           <div className= "header">
               <div className= "logo">
               <span className="ookla">Ookla </span>
               <span className="manager">Manager</span>
                </div>
            </div>
            <div className= "body">
               <div className="login-box">
                 <h3 className="Login"> Student Login </h3>
                 <br />
                 <div className="login-items">
                 <Form onSubmit={this.handleSubmit}>
                   <Form.Group size="lg" controlId="email">
                     <Form.Label className="email-text">Email</Form.Label>
                       <br />
                     <Form.Control
                       autoFocusls
                       
                       type="email"
                       className="login-field"
                       value={this.state.email}
               //onChange={(e) => this.state={email: e.target.value }}
                       onChange ={this.handleChangeEmail}
                     />
                   </Form.Group>
                   <Form.Group size="lg" controlId="password">
                     <Form.Label className="email-text">Password</Form.Label>
                       <br />
                     <Form.Control
                       type="password"
                       className="login-field2"
                       value={this.state.password}
               //onChange={(e) => this.state={password: e.target.value }}
                       onChange={this.handleChangePass}
                     />
                   </Form.Group>
                     <Button id="myCheck" variant="contained" className="login-button" component={Link} to="/home" onClick={e => this.validateForm(e)}>
                       Login
                   </Button>
                 </Form>
               </div>
               </div>
               </div>
               </div>
        );
    }
}