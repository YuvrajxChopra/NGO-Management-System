import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import "./CSS/HomeComponent1.css";

function HomeComponent1() {
  return (
      <div className="home_section darkBg" id="home_section">
        <div className="container">
          <div
            className="row home_row"
            style={{
              display: "flex",
              height: "50vh",
              flexDirection: "start",
            }}>
            <div className="col">
              <div className="home_text-wrapper">
                <div className="top-line">NGO Management System</div>
                <h1 className="heading">4GR - For a Good Reason</h1>
                <p className="home_subtitle">description</p>
                <Link to="/SignInSignUp">
                  <input type='submit' className='signin-btn' value=' Login | New User '/>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home_img-wrapper">
                <div className="home_img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HomeComponent1;
