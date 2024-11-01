import React, { useState } from 'react';
import './Login.css';
import SignUpButton from './SignUpButton';
import { Link,useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

export function Login() {

  const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      const copyLoginInfo = { ...loginInfo };
      copyLoginInfo[name] = value;
      setLoginInfo(copyLoginInfo);
  }

  const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = loginInfo;
      if (!email || !password) {
          return handleError('email and password are required')
      }
      try {
          const url = `http://localhost:8080/auth/login`;
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginInfo)
          });
          const result = await response.json();
          const { success, message, jwtToken, name,hostel, error } = result;
          if (success) {
            //succes per data frontend ke liye aa raha hai aur local storage me save ho raha hai
              handleSuccess(message);
              localStorage.setItem('token', jwtToken);
              localStorage.setItem('loggedInUser', name);
              localStorage.setItem('hostelname', hostel);
              setTimeout(() => {
                  navigate('/home')
              }, 1000)
          } else if (error) {
              const details = error?.details[0].message;
              handleError(details);
          } else if (!success) {
              handleError(message);
          }
          console.log(result);
      } catch (err) {
          handleError(err);
      }
  }

  return (
    <div className='login'>
      <h2 className='header'>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div className='input'>
          <label>Username: </label>
          <input className='inp'
            type='email'
            name='email'
            placeholder='   22bcs037@smvdu.ac.in'
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input'>
          <label>Password: </label>
          <input className='inp'
            type="password"
            name='password'
            placeholder='    password'
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="button"type="submit">Login</button>
        <p className='new'>Create new account</p>
        <SignUpButton />
      </form>
      <div className='error'>
      <ToastContainer />
      </div>

      
    </div>
  );
};

export default Login;
