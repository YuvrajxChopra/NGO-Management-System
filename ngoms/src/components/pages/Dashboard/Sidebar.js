import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaDonate,
    FaHandsHelping,
    FaSignOutAlt

}from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


const Sidebar = ({children}) => {
    const navigate = useNavigate();
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Dashboard/Money",
            name:"Money Donation",
            icon:<FaDonate/>
        },
        {
            path:"/Dashboard/Items",
            name:"Items Donation",
            icon:<FaHandsHelping/>
        },
        {
            path: "/SignInSignUp",
            name: "LogOut",
            icon: <FaSignOutAlt/>
        }
    ]
    return (
        <div className="SideBarcontainer">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <Link to='../' style={{color: "white", size: "2rem"}}><p style={{display: isOpen ? "block" : "none"}} className="logo">4GR</p></Link>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none", fontSize: "14px"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};
/*onClick={()=> window.location.href = "http://localhost:3001/logout"}*/
export default Sidebar;