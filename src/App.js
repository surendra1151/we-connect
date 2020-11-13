import React from "react";
//import logo from "./logo.svg";
import{Route,Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/Home";
import Main from "./components/main";
import "./App.css";


function App() {
  return (
    <React.Fragment>
      <main className="Container">
      <Route path="/home" component={Home} />
      <Route path="/main" component={Main} />
      <Redirect from="/" to="/home"/>
      </main>

    </React.Fragment>
  );
}

export default App;
