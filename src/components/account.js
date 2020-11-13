import React, { Component } from "react";
import "../styling/account.css";
import DatePicker from "react-datepicker";
import Joi from "joi-browser";
import "react-datepicker/dist/react-datepicker.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import {Register} from "./services/userApi";



class Account extends Component{
render(){
  return(
    <Input/>
  );
}


}

  const nameValidation = RegExp(/^[ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöü¡¿çÇßØøÅåÆæÞþÐð""\D\s-'.,&amp;#@:?!()$\/]+(\s{0,1}[ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöü¡¿çÇßØøÅåÆæÞþÐð""\D\s-'.,&amp;#@:?!()$\/])*$/);
  //const lastname = RegExp(/^[a-z]$/i);
  const email=RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
  const password= RegExp(/^[#\w@_-]{8,20}$/);
  const phonenumber=RegExp(/^\d{10,11}$/);



  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)

    );
    
    //console.log(valid)
    return valid;
  }

  



class Input extends Component {
  constructor(props){
  super(props);
  this.state = {
    startDate: new Date(),
    account:{
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      phonenumber:'',
    },
      errors:{
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      phonenumber:'',
      },
      empty:{},
      value:"female",
  };
}
  handleChange = (date) => {
    this.setState({
      startDate: date,
      });

      console.log(this.state.startDate);
  };

 
  handleAccount = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    //let empty=this.state.empty;
   //console.log(firstname.test(value)) ;

    switch(name){
      case 'firstname': 
        errors.firstname = 
        nameValidation.test(value)
          ? ''
            : 'first name is not valid';

            


        break;
        case 'lastname': 
        errors.lastname = 
        nameValidation.test(value)
            ? ''
            : 'last name is not valid';
        break;
      case 'email': 
        errors.email = 
          email.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          password.test(value)
            ? ''
            : 'password is not valid';
        break;
        case 'phonenumber': 
        errors.phonenumber = 
          phonenumber.test(value)
            ? ''
            : 'phone number  is not valid';
        break;
      default:
        break;
    }
    //console.log(this.state.errors);
    this.setState({errors, [name]: value});

    const account = { ...this.state.account };

  account[name]=value;

    this.setState({account});
    console.log(account);

    //console.log(firstname,email);
   
  }

  handleEmpty= ()=>{
    const empty ={};
  const{firstname,lastname,email,password,phonenumber}=this.state.account;

if(firstname.trim()==="") empty.firstname="required";
if(lastname.trim()==="") empty.lastname="required";
if(email.trim()==="") empty.email="required";
if(password.trim()==="") empty.password="required";
if(phonenumber.trim()==="") empty.phonenumber="required";

console.log(empty);

return Object.keys(empty).length === 0 ? null : empty;
  }


  handleSubmit = async(event) => {
    event.preventDefault();
  
  const empty=this.handleEmpty();
  this.setState({empty});
  try {
    await Register(this.state.account)  ;

  } catch (ex) {
    if(ex.response.status===400){

      console.log(ex.response,ex.response.status);
      const errors={...this.state.errors}
      //errors.email=ex.response.account;
      //console.log(errors.email)
      this.setState({errors});

  }
}

};
handleRadioChange=(event)=>{
  this.setState({value:event.target.value});
}

  render() {
    
    //spaces are not allowed in range
    //select all the input fields and add an onkeyup event listener to them
    const {errors,empty,value}=this.state;
    const {classes}=this.props;
    
    console.log(empty);
    return (
      <div className="register">
        <h1 className="account">Create a Account</h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="firstname"
                className="name form-control"
                id="inputfirstname"
                name="firstname"
                placeholder="First Name"
                onChange={this.handleAccount}

                noValidate
              />

              
               {errors.firstname.length > 0 && 
                <span className='error'>{errors.firstname}</span>}
               {empty && <span className="empty">{empty.firstname}</span>}
            </div>
            <div className="form-group col-md-6">
              <input
                type="lastname"
                className="name form-control"
                id="inputlastname"
                name="lastname"
                placeholder="Last Name"
                onChange={this.handleAccount}
                noValidate
              />
              
               {errors.lastname.length > 0 && 
                <span className='error'>{errors.lastname}</span>}
                {empty && <span className="empty">{
                empty.lastname}</span>}
                                


            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 emailText">
              <input
                type="email"
                name="email"
                className="name form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={this.handleAccount}
                noValidate
              />
               {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
               {empty && <span className="empty">{empty.email}</span>}

            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                className="name form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                onChange={this.handleAccount}
                noValidate
              />
               {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
                               {empty && <span className="empty">{empty.password}</span>}

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="phone number"
                className="name form-control"
                id="inputphone"
                name="phonenumber"
                placeholder="Phone Number"
                onChange={this.handleAccount}
                noValidate
              />
              {errors.phonenumber.length > 0 && 
                <span className='error'>{errors.phonenumber}</span>}
               {empty && <span className="empty">{empty.phonenumber}</span>}

            </div>
            <div className="date form-group col-md-6">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Date of Birth"
                required={true}
              />
            </div>
          </div>
          
      <FormControl component="fieldset">
        <RadioGroup row aria-label="gender" name="gender1" value={value}  onChange={this.handleRadioChange}>
        <Box ml={3} mt={2}>
       <FormControlLabel classes={{ label: 'my-class-name' }} value="female" control={<Radio   color="primary" />} label="Female"  required/>
        <FormControlLabel  classes={{ label: 'my-class-name' }} value="male" control={<Radio  color="primary"/>} label="Male"  required/>
        <FormControlLabel  classes={{ label: 'my-class-name' }} value="other" control={<Radio color="primary"/>} label="Other"  required/>
        </Box>
      </RadioGroup>
        
     
    </FormControl>
          
        </form>
        <button type="submit" className="signup btn btn-primary" onClick={this.handleSubmit} noValidate>
          signup
        </button>
      </div>
    );
  }
}


export default Account;
