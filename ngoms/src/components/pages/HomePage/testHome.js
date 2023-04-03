import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "../../NavBar";
import HomeComponent1 from "./HomeComponent1";
import HomeComponent2 from "./HomeComponent2";
import Events from './Events';
import Footer from "../../Footer";
import Contact from "./Contact";
import "./CSS/Home.css";


function TestHome() {
  return (
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<HomeComponent1/>} />
          <Route exact path="/About" element={<HomeComponent2 />} />
          <Route exact path="/About" element={<Events />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Footer" element={<Footer />} />
        </Routes>
    </div>
  );
}

export default TestHome;
