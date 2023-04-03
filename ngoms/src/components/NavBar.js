import React from "react";
import "./componentscss/NavBar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          4GR
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" >
            <HashLink to="#home_section" className="nav-links">
              Home
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink to="#about_section" className="nav-links" id="NavBarLinkToAbout">
              About Us
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink to="#event_section" className="nav-links">
              Events
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink to="#contact_section" className="nav-links">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
