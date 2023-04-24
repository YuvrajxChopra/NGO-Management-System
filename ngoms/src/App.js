import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestHome from "./components/pages/HomePage/testHome";
import Dashboard from "./components/pages/Dashboard/dashboard";
import SignInSignUp from "./components/pages/SignIn_SignUp/SigInSignUp";
import RegisterSucess from "./components/pages/ResposePage/RegisterSucess";
import AdminPage from './components/pages/AdminPage/AdminPage';

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route exact path="*" element={<TestHome/>} />
          <Route exact path="/SignInSignUp" element={<SignInSignUp/>}/>
          <Route exact path="/Dashboard/*" element={<Dashboard/>}/>
          <Route exact path="/RegisterSucess" element={<RegisterSucess/>}/>
          <Route exact path="/AdminPage/*" element={<AdminPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
