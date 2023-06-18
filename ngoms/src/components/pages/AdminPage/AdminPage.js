import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import './AdminPage.css';
import Sidebar from '../Dashboard/Sidebar';
import { Routes, Route} from 'react-router-dom';
import {
    FaTh,
    FaSignOutAlt,
    FaDatabase,
    FaUsers,
    FaCalendar,

}from "react-icons/fa";
import DonationsData from './DonationsData';
import UsersData from './UsersData';
import CreateEvents from './CreateEvents';
import AdminPageHome from './AdminPageHome';

const menuItem=[
  {
      path:"/AdminPage",
      name:"Admin Dashboard",
      icon:<FaTh/>
  },
  {
      path:"/AdminPage/DonationsData",
      name:"Donations Data",
      icon:<FaDatabase/>
  },
  {
      path:"/AdminPage/UsersData",
      name:"Users Data",
      icon:<FaUsers/>
  },
  {
    path: "/AdminPage/Events",
    name:"Create Events",
    icon: <FaCalendar/>
  },
  /*
  {
      path: "/AdminPage/FeedbackResponse",
      name: "Feedback Response",
      icon: <FaPenSquareO/>
  },
  */
  {
      path: "/SignInSignUp",
      name: "LogOut",
      icon: <FaSignOutAlt/>
  }
]

function AdminPage() {
  const navigate = useNavigate();
  let CurrUser = DashboardLoad();
  if (CurrUser === "NaN" || CurrUser === undefined || CurrUser === "") {
    navigate("/SignInSignUp")
    return (<div style={{ textAlign: "center" }}><h5>Redirecting...</h5></div>)
  }
  else
  return (
    <div>
        <Sidebar menuItem={menuItem}>
          <Routes>
            <Route exact path='/' element={<AdminPageHome/>} />
            <Route exact path='/AdminPage' element={<AdminPageHome/>} />
            <Route exact path='/DonationsData' element={<DonationsData/>} />
            <Route exact path="/UsersData" element={<UsersData />} />
            <Route exact path="/Events" element={<CreateEvents />} />
          </Routes>
        </Sidebar>
    </div>
  );
}
function DashboardLoad() {
  const [initialState, setIntialState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/admindashboardload")
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
export default AdminPage;
