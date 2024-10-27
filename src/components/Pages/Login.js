import React, { useState } from 'react';
import './Login.css';
import SignUpButton from './SignUpButton';

export const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State to show a success or error message
  const [message, setMessage] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Send form data as JSON
      });

      const data = await response.json(); // Parse response data

      if (response.ok) {
        // If login is successful, show a success message
        setMessage(`Login successful! Welcome, ${data.username}`);
      } else {
        // If login fails, show an error message
        setMessage('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='login'>
      <h2 className='header'>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Username: </label>
          <input className='inp'
            type="text"
            name="username"
            placeholder='   22bcs037@smvdu.ac.in'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input'>
          <label>Password: </label>
          <input className='inp'
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="button"type="submit">Login</button>
        <p className='new'>Create new account</p>
        <SignUpButton />
      </form>

      {/* Display message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
