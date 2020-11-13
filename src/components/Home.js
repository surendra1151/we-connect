import React, { Component } from "react";
import "../styling/Home.css";
import LoginForm from "./loginForm";


class Home extends Component {
  state = {};
  render() {
    return <div className="Home">
      <LoginForm/>
    </div>;
  }
}

export default Home;
