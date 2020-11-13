import React from "react";
import "../styling/input.css";
import Account from "./account";
import Main from "./main";
//import { withRouter } from 'react-router-dom';

const Login = ({ value, name, error, errors, onLogin, account, onChange ,onClick}) => {
  //console.log(errors);
  //console.log(account);
  console.log(error);


  return (
    <form className="row" onSubmit={onLogin}>
      <div className="form-row">
        <div className=" form-group col-md-6 spacing ">
          <label for="inputEmail4">Email</label>
          <input
            name="email"
            type="email"
            className="submit form-control"
            id="inputEmail4"
            value={account.email}
            onChange={onChange}
          ></input>
          {error && (
            <div className="row">
              <svg
                aria-hidden="true"
                class="error_icon"
                fill="red"
                focusable="false"
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              </svg>
              <p className="error_email">please enter email</p>
            </div>
          )}
        </div>
        <div className="form-group col-md-4 ">
          <label for="inputPassword4">Password</label>
          <input
            name="password"
            type="password"
            value={account.passowrd}
            className="submit form-control"
            id="password"
            onChange={onChange}
          ></input>
          {errors && (
            <div className="row">
              <svg
                aria-hidden="true"
                class="error_icon"
                fill="red"
                focusable="false"
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              </svg>
              <p className="error_email"> enter password</p>
            </div>
          )}
        </div>
        <div className="form-group col-md-2">
          <button type="submit" className=" btn btn-primary click" onClick={onClick}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
