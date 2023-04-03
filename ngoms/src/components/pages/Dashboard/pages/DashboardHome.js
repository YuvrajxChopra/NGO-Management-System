import React from "react";
import "./DashboardHome.css";
import {FaMoneyCheckAlt} from 'react-icons/fa';

function DashboardHome(props) {
  return (
    <div className="DashboardHome">
      <h1 className="WelcomeMessage">Welcome back {props.username}</h1>
      <div className="boxes">
        <div className="box1">
          <h2>
            Total Money Donated
          </h2>
          <p>All Time</p>
        </div>
        <div className="box2">
          <h2>
            Total Items Donated
          </h2>
          <p>All Time</p>
        </div>
        <div className="box2">
          <h2>
            Last Donation
          </h2>
          <p>10 Oct 2022</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
