// src/QRCodeScanner.js
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import {Html5QrcodeScanner} from "html5-qrcode"

const QRCodeScanner = () => {
  const [scanResult, setScanResult] = useState('No result');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>QR Code Scanner</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode="environment"  // This sets the back camera on mobile devices
      />
      <p>Scanned Result: {scanResult}</p>
    </div>
  );
};

export default QRCodeScanner;
