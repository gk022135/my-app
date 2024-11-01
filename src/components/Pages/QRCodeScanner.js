// src/QRCodeScanner.js
import React, { useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [gPassStatus ,setGPassStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);  // To track whether scanning is active

  let html5QrCode;
  let dataToSend;

  const startScanning = () => {
    setIsScanning(true);  // Indicate that scanning is in progress
    html5QrCode = new Html5Qrcode("reader");



    //decodedText is by default provided by Html5QrCode
    const qrCodeSuccessCallback = (decodedText) => {
      // Store scanned data and stop scanning
      setScannedData(decodedText);

      stopScanning();  // Automatically stop scanning after a successful scan



      // trying to create object or string to send qr data to backend
      const dataObject = { qrCodeData: decodedText };
      //const xyz = scannedData;
      //console.log(" hi it is scanned",xyz);
      
      console.log(dataObject);
    };

    const qrCodeErrorCallback = (errorMessage) => {
      // Handle scanning errors
      setError(errorMessage);
      console.error("QR Code scanning error:", errorMessage);
    };

    // Start the QR code scanner
    html5QrCode.start(
      { facingMode: "environment" }, // Rear camera by default
      {
        fps: 10, // Frames per second
        qrbox: 250, // Scanning box size
      },
      qrCodeSuccessCallback,
      qrCodeErrorCallback
    ).catch((err) => {
      console.error("Failed to start QR Code scanner:", err);
      setError("Failed to start the scanner. Try again.");
      setIsScanning(false);
    });
  };

  const stopScanning = () => {
    if (html5QrCode) {
      html5QrCode.stop().then(() => {
        console.log("QR Code scanning stopped.");
        setIsScanning(false); // Scanning is no longer active
      }).catch((err) => {
        console.error("Failed to stop scanning:", err);
      });
    }
    const SendDataBackend = async (dataObject,req,res)=>{
      const url = "http://localhost:8080/auth/gatepass";
      fetch(url,{
        method: 'POST',
        headers :{
          'Content-Type': 'application | json'
        }, body: JSON.stringify(dataObject)
      })
      const result = await res.json();
      const {message, success} = result;
      console.log(result);
    }








  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>QR Code Scanner</h1>

      {/* Scanning area */}
      <div id="reader" style={{ width: "500px", height: "500px", marginBottom: "20px" }}></div>

      {/* Start Scanning Button */}
      <button 
        onClick={startScanning} 
        disabled={isScanning}
        style={{
          padding: "10px 20px", 
          backgroundColor: isScanning ? "gray" : "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: isScanning ? "not-allowed" : "pointer"
        }}
      >
        {isScanning ? "Scanning..." : "Start Scanning"}
      </button>

      {/* Display the scanned data or error */}
      <div style={{ marginTop: '20px' }}>
        {scannedData && <p>Scanned Data: {scannedData}</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default QRCodeScanner;
