import React from 'react';
import './CSS/dashboard.css';
import SideBar from './Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import DashboardHome from './pages/DashboardHome';
import Money from './pages/Money';
import Items from './pages/Items';
import {useNavigate} from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  let CurrUser = DashboardLoad();
  if(CurrUser === "NaN" || CurrUser === undefined || CurrUser === ""){
    navigate("/SignInSignUp")
    return(<div style={{textAlign:"center"}}><h5>Redirecting...</h5></div>)
  }
  else
  return (
    <div className='HomeOfDash'>
        <SideBar>
        <Routes>
          <Route exact path='/' element ={<DashboardHome username={CurrUser}/>} />
          <Route exact path="/DashboardHome" element={<DashboardHome username={CurrUser}/>} />
          <Route exact path="/Money" element={<Money />} />
          <Route exact path="/Items"  element={<Items />} />
        </Routes>
        </SideBar>
    </div>
  );
}

function DashboardLoad(){
  const [initialState, setIntialState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/dashboardload")
      .then((res) => res.json())
      .then((res) => {
        if (res === "" || res.username === "NaN") {
          setIntialState(res)
        } else {
          setIntialState(res);
        }
      });
  });
  return initialState.username;
}

export default Dashboard;