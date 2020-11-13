import React, { Component } from "react";
import SplashScreen from "./splashscreen";
import "../styling/login.css";
import Login from "./login";
import Account from "./account";
//import Joi from "joi-browser";
import { withRouter } from 'react-router-dom';
import { login } from "./services/loginApi";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      account: { email: "", password: "" },
      errors: {},
    };
  }

  validate = () => {
    const errors = {};
    if (this.state.account.email.trim() === "") errors.email = "email required";
    if (this.state.account.password.trim() === "") errors.password = "email required";
    console.log(errors);

    return Object.keys(errors).length === 0 ? null : errors;
  };
  componentDidMount() {
    setTimeout(() => {
      this.nextPage();
    }, 3000);
  }

  nextPage = () => {
    this.setState({ isLoading: false });
  };

  handleLogin = (e) => {
    e.preventDefault();
    //console.log("Login");
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    //console.log(errors);
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleClick = async() =>{
    try {
      //const {account}=this.state;
      //await login(account.email,account.password);
      this.props.history.push('/Main');
    } 
    catch (ex) {
       if(ex.response.status===400){

        console.log(ex.response,ex.response.status);
        const errors={...this.state.errors}
        //errors.email=ex.response.account;
        //console.log(errors.email)
        this.setState({errors});
      }
      
    }
 
  };
  render() {
    return (
      <div className="login">
        {this.state.isLoading ? (
          <SplashScreen />
        ) : (
          <div>
            <div className="back">
              <div className="row">
                <h1 className="we_connect">WE CONNECT</h1>
                <div className="email">
                  <Login
                    onLogin={this.handleLogin}
                    account={this.state.account}
                    error={this.state.errors.email}
                    errors={this.state.errors.password}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <img className="main" src={require("../images/Main.jpg")} />
              <Account />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LoginForm);
