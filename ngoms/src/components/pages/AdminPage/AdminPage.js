import React from 'react';
import './AdminPage.css';
import Sidebar from '../Dashboard/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
    FaTh,
    FaSignOutAlt,
    FaDatabase,
    FaUsers,
    FaCalendar

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
  {
      path: "/SignInSignUp",
      name: "LogOut",
      icon: <FaSignOutAlt/>
  }
]

function AdminPage() {
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

export default AdminPage;
