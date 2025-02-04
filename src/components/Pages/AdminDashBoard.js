import React, { useEffect } from "react";
//import { Html5Qrcode } from "html5-qrcode";
import { useState } from "react";
import QRCode from 'qrcode';
import { handleError, handleSuccess } from '../../utils.js';
import Footer from './Footer.js'


import './AdminDashBoard.css';
import { ToastContainer } from "react-toastify";


export const AdminDashBoard = () => {

  const [AdminName, setAdminName] = useState('');
  const [QrData, setQrData] = useState({
    QrEntry: '',
    QrExit: '',
  });
  const [UserId, setUserId] = useState({
    email: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const emData = { ...UserId }
    const copyQrdata = { ...QrData };
    copyQrdata[name] = value;
    emData[name] = value;
    setUserId(emData);
    setQrData(copyQrdata);

  }
  console.log(UserId)



  useEffect(() => {
    setAdminName(localStorage.getItem("AdminName"));
    console.log("it workng fine till here");

  }, [])

  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const x = text;
  //console.log(x);

  const generateQrCode = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };









  const lele = {
    QrEntry: QrData.QrEntry,
    QrExit: QrData.QrExit,
    email: localStorage.getItem("AdminName")

  }
  const handleUpdate = async (e) => {
    const API_URL = process.env.REACT_APP_API_URL;
    console.log(QrData);
    console.log("fine till here")
    e.preventDefault();

    const { QrEntry, QrExit } = QrData;

    if (!QrEntry || !QrExit) {
      return handleError('name, email and password are required')
    }
    try {
      const url = `${API_URL}gatepass`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lele)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
      } 
      else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  }




  const handleDetails = async (e) => {



  }



  const eml = {
    Admemail: localStorage.getItem("AdminName"),
    Useremail: UserId.email2,
  }
  console.log("delete krna bsdke", eml)

  const handleDelete = async (e) => {

    e.preventDefault();
    console.log(eml)

    const { email2 } = UserId;

    if (!email2) {
      return handleError('email daal betichod')
    }
    try {
      const url = `http://localhost:8080/qr-code-system/gatepass`;
      console.log("response will come")

      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eml)
      });
     console.log("response will come")

      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
      } 
      else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } 
      else if (!success) {
        handleError(message);
      }
      console.log(result);
    } 
    catch (err) {
      handleError(err);
    }



  }
  console.log(UserId.email1);
  return (
    <div className="container">

      <div className="name">
        <p>{AdminName}</p>
      </div>
      <div className="adm">

        <div className="qr">
          <p>Update Qr</p>
          <div className="update">

            <label>entry Qr</label>
            <input type="text"
              onChange={handleChange}
              name="QrEntry"
              value={QrData.QrEntry}

            ></input>

            <label id="name">exit Qr</label>
            <input type="text" id="name"
              onChange={handleChange}
              name="QrExit"
              value={QrData.QrExit}
            ></input>
            <button onClick={handleUpdate}>Update</button>
          </div>

        </div>
        <div className="qr">
          <p>Operation</p>
          <div className="update">

            <label>Enter User Id</label>
            <input type="text"
              name="email1"
              value={UserId.email1}
            ></input>
            <button
              onClick={handleDetails}>
              User Details</button>

            <label id="name">User Id</label>
            <input type="text" id="name"
              onChange={handleChange}
              name="email2"
              value={UserId.email2}
            ></input>
            <button
              onClick={handleDelete}
            >Delete User</button>
          </div>

        </div>



        <div>

        </div>
      </div>

      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate QR code"
        style={{
          padding: '10px', width: '300px', marginTop: '10px',
          borderRadius: '25px'
        }}
      />
      <br />
      <button
        onClick={generateQrCode}
        style={{
          padding: '10px 20px',
          backgroundColor: '#080808',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Generate QR Code
      </button>

      {qrCodeUrl && (
        <div className="imgg">
        <h3>Generated QR Code:</h3>
        <img id="qrCodeImage" src={qrCodeUrl} alt="Generated QR Code" />
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = qrCodeUrl; // Use the source of the QR code image
            link.download = "QRCode.png"; // Set the downloaded file name
            link.click();
          }}
        >
          Download QR Code
        </button>
      </div>
      
      )}
      <Footer/>
      <ToastContainer/>
    </div>
  );
};

export default AdminDashBoard;
