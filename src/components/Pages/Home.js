import React, { useState, useEffect } from "react";
import './Home.css';
import { Link, useNavigate } from 'react-router-dom'
import QRCodeScanner from "./QRCodeScanner";
//import useNavigate  from "react-router-dom";
import { handleSuccess, handleError } from "../../utils";
import { ToastContainer } from 'react-toastify';
import StudentDetails from "./StudentDetails";


export const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [hostel, setHostel] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
    setHostel(localStorage.getItem("hostelname"));
    console.log("it workng fine till here");

  }, [])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('hostelname');
    handleSuccess('user logged out successed');
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }


  const onNewScanResult = (decodedText, decodedResult) => {
  };
  return (
    <div className="home">
      <div className="profile">
        <h1>Welcome {loggedInUser}</h1>
        <h2>Hostel:{hostel}</h2>
        <button onClick={handleLogout}>Logout</button>

        <ToastContainer />
      </div>
      <div className="student">

        <div className="std_child"><p>Qr for Exit</p></div>
        <div className="std_child"><p>Qr for Entry</p></div>
        <div className="std_child"><p>Your Past History</p></div>
        <div className="std_child">
          <Link to="/studentdetails">
            <button>
              Show Details
            </button>
          </Link>
        </div>

      </div>
      <div className="qr">
        <h2>Make Scan here </h2>

      </div>
      <QRCodeScanner />


      <h1>Home</h1>

      <div class="animated-text">
        Welcome To <span></span>
        <div className="para">
          <p>QR code-based digital entry pass system
            Delhi High Court has initiated the QR code-based digital entry pass system for lawyers who are entering the courtroom premises and attending physical hearings from January 25, 2021. QR code based digital pass shall be generated and issued digitally by the High Court Registry one day in advance on the basis of listing of cases before the benches holding physical hearings. The Pass will be received by all the advocates concerned and parties-in-person, who have got their mobile number and email IDs registered in the ‘Case Information System’ of the court. The QR pass shall be sent as an attachment (PDF file) through email and SMS. The concerned advocate and party-in-person shall be required to download the attached digital entry pass (PDF file) on her or his Mobile/Laptop/Tablet/iPad from the email or SMS link, and show such downloaded QR Pass to the security personnel at the Entry Gate(s) of respective court building(s) while entering and while making exit. There shall not be any requirement of generating any printout of such QR Pass and it will be valid for the day for which it is issued and can be used only once that day.</p>
        </div>

        <div className="home2">

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;