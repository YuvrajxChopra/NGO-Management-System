import React from 'react';
import './RegisterSucess.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {Link} from "react-router-dom";

function RegisterSucess() {
  return (
    <div className='sucess-message-container-maincontainer'>
      <div className="sucess-message-container">
        <h2>REGISTRATION SUCESSFULL!</h2>
        <Link to="/SignInSignUp">
          <input
            type="submit"
            value="Go To LogIn Page ⇛"
          />
          </Link>
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


export default RegisterSucess;