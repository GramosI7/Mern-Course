import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
    }
  }


  handleOnChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
        <form onSubmit={this.handleOnSubmit} className="container">
        <h1>Login</h1>
        <div className="form-group">
          <label >Email address</label>
          <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleOnChange} value={this.state.email}/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.handleOnChange} value={this.state.password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Login;