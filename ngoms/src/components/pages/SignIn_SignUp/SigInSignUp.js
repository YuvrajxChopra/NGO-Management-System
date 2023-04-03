import React from "react";
import "./SignInSignUp.css";
import "../../componentscss/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {useEffect, useState} from 'react';
import ErrorNotification from "./ErrorNotification";

function SignInSignUp() {
  ValidateForm();
  return (
    <div>
      <ErrorNotification clickFunction={ShowHide} text={errorText}/>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            4GR
          </Link>
        </div>
      </div>
      <div className="signincontainer">
        <div className="SignIn">
          <h2 className="SignInHeading">Login</h2>

          <form className="signinform" id="signinform" action="http://localhost:3001/login" method="POST">
            <label data-text="Username">
              <input
                type="text"
                placeholder="Username"
                className="usernameinput"
                id="usernameinput"
                name="username"
                maxLength="50"
                required
              />
            </label>

            <label data-text="Password">
              <input
                type="text"
                placeholder="Password"
                className="passwordinput"
                id="passwordinput"
                maxLength="50"
                name="password"
                required
              />
            </label>
            <label className="signinerror" id="signinerror">
              {" "}
              ^ Incorrect Username/Password
              <br />
            </label>
            <br />
              <input type="submit" value="Login" id="login-btn" />
            <label id="forgetpassword"> Forget Password? </label>
          </form>
        </div>
        <div className="SignUp">
          <h2 className="SignUpHeading">New User</h2>
          <form className="signupform" id="signupform" action="http://localhost:3001/signup" method="post">
            <input
              type="text"
              id="firstnameinput"
              placeholder="First Name"
              maxLength="50"
              name="first_name"
              required
            />

            <input
              type="text"
              id="lastnameinput"
              placeholder="Last Name"
              maxLength="50"
              name = "last_name"
              required
            />
            <br />
            <input
              type="text"
              id="createusername"
              placeholder="Create Username"
              maxLength="50"
              name = "create_username"
              required
            />
            <input
              type="text"
              id="createpassword"
              placeholder="Create Password"
              name = "create_password"
              maxLength="50"
              required
            />
            <br />
            <label className="usernamerror" id="usernamerror">
              {" "}
              <br />
              <br />
            </label>
            <input type="date" id="dobinput" name="dob" required />
            <br />
            <input type="email" id="emailinput" placeholder="E-mail" name="create_email" required />
            <br />
            <label className="emailerror" id="emailerror">
              {" "}
              Invalid email address!
              <br />
              <br />
            </label>
            <select>
              <option>IND</option>
            </select>
            <input
              type="number"
              id="createphonenumber"
              placeholder="Phone Number"
              maxLength="10"
              name= "create_phoneno"
              required
            />
            <br />
            <label className="phonenoerror" id="phonenoerror">
              {" "}
              Phonenumber should be 10 digits long!
              <br />
              <br />
            </label>

            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
      <div className="footer-container">
        <div className="FooterItems">
          <small className="website-rights">
            {" "}
            Designed & Developed by Yuvraj Chopra © 2022{" "}
          </small>
          <section className="social-media">
            <div className="social-media-wrap">
              <p
                className="social-icon-link"
                to="/"
                prefix=""
                aria-label="Facebook"
              >
                <FaFacebook />
              </p>
              <p className="social-icon-link" aria-label="Instagram">
                <FaInstagram />
              </p>
              <p className="social-icon-link" aria-label="Youtube">
                <FaYoutube />
              </p>
              <p className="social-icon-link" to="/" aria-label="Twitter">
                <FaTwitter />
              </p>
              <p className="social-icon-link" to="/" aria-label="LinkedIn">
                <FaLinkedin />
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

var errorText = "";
function ValidateForm(){
  const [initialState, setIntialState] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/signup_check')
    .then (res => res.json())
    .then(res => setIntialState(res))
  }, [])
  console.log(initialState);
  console.log(initialState.status);
  if(initialState.status === "959"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "First name can't be empty!";
  }
  else if(initialState.status === "949"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Username can't be empty!";
  }
  else if(initialState.status === "939"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Phonenumber can't be empty!";
  }
  else if(initialState.status === "969"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Phonenumber should be 10 digit long!";
  }
  else if(initialState.status === "979"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Email can't be empty!";
  }
  else if(initialState.status === "989"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Password shouldn't be less then 8 character long!";
  }
  else if(initialState.status === "999"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Username already exist!";
  }
  else if(initialState.status === "1001"){
    document.getElementById("errorContainer").style.display = "block";
    errorText = "Wrong username or password!";
  }
  
}

function ShowHide(){
  document.getElementById("errorContainer").style.display = "none";
}

export default SignInSignUp;
