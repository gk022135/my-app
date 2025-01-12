###  npm i html5-qrcode@2.2.7
### documentation of qr code scanner  
     https://www.npmjs.com/package/html5-qrcode/v/2.2.7
   
# QR-based Entry-Exit System (Frontend)

This repository contains the **frontend** part of the QR-based Entry-Exit System, designed to streamline and secure entry and exit logging at university campuses. Users scan a QR code at the campus gate to log their entry or exit. This system reduces manual work, enhances security, and tracks each individual's movement.

---

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippets](#code-snippets)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Technologies Used
- **React.js**: JavaScript library for building user interfaces.
- **HTML5-QRCode**: Library for handling QR code scanning.
- **bcrypt.js**: Library for password hashing.
- **CSS**: For styling the user interface.

---

## Features
- QR code scanning for entry and exit logging.
- Secure login and registration system.
- Real-time validation of QR codes.
- Password hashing for user security using bcrypt.

---

## Installation

### Prerequisites
- Node.js installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/gk022135@/qr-entry-exit-system-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd qr-entry-exit-system-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## Usage
1. **User Registration**: Users must register to access the QR code scanning feature.
2. **Login**: Users log in to scan their entry/exit QR codes.
3. **QR Code Scanning**: The camera captures the QR code, and the system logs the entry/exit time.

---

## Code Snippets

### QR Code Scanning Example (React Component)
```jsx
import React from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrScanner = () => {
  React.useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 });
    scanner.render(
      (decodedText, decodedResult) => {
        console.log(`QR Code detected: ${decodedText}`);
      },
      (error) => {
        console.warn(`QR Code scan error: ${error}`);
      }
    );

    return () => scanner.clear();
  }, []);

  return <div id="reader" style={{ width: '100%' }}></div>;
};

export default QrScanner;
```

### Password Hashing with bcrypt.js
```javascript
import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
```

---

## Future Enhancements
- **Facial Recognition**: Integrating facial recognition for additional security.
- **Attendance System**: Expanding to mark attendance based on entry logs.
- **Mobile App Integration**: Creating a mobile version for improved accessibility.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

