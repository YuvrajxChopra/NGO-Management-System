import React from "react";
import "./CSS/HomeComponent2.css";

function HomeComponent2() {
  return (
    <>
      <div className="about_section" id="about_section">
        <div className="container">
          <div
            className="row about_row"
            style={{
              display: "flex",
              height: "50vh",
              flexDirection: "row-reverse",
            }}
          >
            <div className="col">
              <div className="about_text-wrapper">
                <div className="top-line">About US</div>
                <h1 className="heading dark">4GR - NGO Management System</h1>
                <p className="about_subtitle dark">description</p>
              </div>
            </div>
            <div className="col">
              <div className="about_img-wrapper">
                <div className="about_img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent2;
