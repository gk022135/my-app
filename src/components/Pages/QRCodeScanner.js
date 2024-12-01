import React, { useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [dataToSend, setDataToSend] = useState("");  // State to hold QR code data

  let html5QrCode;

  const startScanning = () => {
    html5QrCode = new Html5Qrcode("reader");

    const qrCodeSuccessCallback = (decodedText) => {
      setScannedData(decodedText);
      setDataToSend(decodedText); // Update dataToSend state

      stopScanning(); // Stop scanning after reading a QR code

      const str = decodedText.substring(0, 4); // Check the first 4 characters of QR code

      const PassObj = {
        email: localStorage.getItem("useremail"),
        QrEntry: (str === 'ENTR') ? decodedText : null,
        QrExit: (str === 'EXIT') ? decodedText : null,
      };

      // Call SendDataBackend with PassObj
      SendDataBackend(PassObj);
    };

    const qrCodeErrorCallback = (errorMessage) => {
      setError(errorMessage);
      console.error("QR Code scanning error:", errorMessage);
    };

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

    setIsScanning(true);
  };

  const stopScanning = () => {
    if (html5QrCode) {
      setIsScanning(false);
      html5QrCode.stop().then(() => {
        console.log("QR Code scanning stopped.");
      }).catch((err) => {
        console.error("Failed to stop scanning:", err);
      });
    }
  };

  const SendDataBackend = async (PassObj) => {
    try {
      const url = "http://localhost:8080/auth/gatepass";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(PassObj),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const { message, success } = result;

      


      console.log(result);
      console.log(message);
      return { success, message };
    } catch (error) {
      console.error("Error sending data to backend:", error);
      return { success: false, message: error.message };
    }
  };

  const handleClick = () => {
    if (isScanning) {
      stopScanning();
    } else {
      startScanning();
    }
  };

  return (
    <div>
      <div id="reader" style={{ width: "300px", height: "300px", marginBottom: "20px" }}></div>

      <div>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: isScanning ? "#FF0000" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </button>

        <div style={{ marginTop: '20px' }}>
          {scannedData && <p>Scanned Data: {scannedData}</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanner;
