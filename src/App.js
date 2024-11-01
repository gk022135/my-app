import "./App.css";
import Reat from 'react';
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AdminLogin } from "./components/Pages/AdminLogin";
import { Login } from "./components/Pages/Login";
import { About } from "./components/Pages/About";
import {SignUp} from "./components/Pages/SignUp";
import RefrshHandler from './RefrshHandler';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }



  return (
    <>
        
      <Router>
           <RefrshHandler setIsAuthenticated=                         {setIsAuthenticated} />

        <NavBar />
        <div className="pages">
   
          <Routes>
            <Route path='/' element={<PrivateRoute element={<Home />} />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/" element={<Home />} /> */}

          </Routes>
          
        </div>
      </Router>
  </>
  );
}

export default App;
