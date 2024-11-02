import React, { useEffect } from "react";
//import { Html5Qrcode } from "html5-qrcode";
import { useState } from "react";
import QRCode from 'qrcode';


export const AdminDashBoard = ()=>{

    const [text, setText] = useState(''); 
    const [qrCodeUrl, setQrCodeUrl] = useState(''); 
    const x =text;
    //console.log(x);
  
    // Function to generate QR code
    const generateQrCode = async () => {
      try {
        const url = await QRCode.toDataURL(text); 
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };



    // sending data to backend in Admin API

    const sendDataToBackend = async (text) => {
        try {
          const response = await fetch('http://localhost:8080/getpass', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ qrCodeData: text }),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log("Data saved successfully:", responseData);
          } else {
            console.error("Failed to send data:", response.statusText);
          }
        } catch (error) {
          console.error("Error sending data:", error);
        }

    };
    useEffect(()=>{
        sendDataToBackend();

    },[sendDataToBackend])
  
    return (
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>QR Code Generator</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to generate QR code"
          style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
        />
        <br />
        <button
          onClick={generateQrCode}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Generate QR Code
        </button>
  
        {qrCodeUrl && (
          <div style={{ marginTop: '20px' }}>
            <h3>Generated QR Code:</h3>
            <img src={qrCodeUrl} alt="Generated QR Code" />
          </div>
        )}
      </div>
    );
  };
  
  export default AdminDashBoard;