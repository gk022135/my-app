import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils.js';
import './SignUp.css';



export function SignUp() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
        
    }
    console.log("SigmUpInfo->",signupInfo);

    const handleSignup = async (e) => {
        e.preventDefault(); // prevent from page refresh
        const API_URL = process.env.REACT_APP_API_URL;

        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {// api fetching
            const url = `https://qr-bakend.onrender.com`;

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
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
        <div className='bdy'>

            <div className='container'>
                <h1>Signup</h1>
                <form onSubmit={handleSignup}>
                    <div className='form'>
                        <label htmlFor='name'>Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='name'
                            autoFocus
                            placeholder='Enter your name...'
                            value={signupInfo.name}
                        />
                    </div >
                    <div className='form'>
                        <label jnjfdhtmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            required
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={signupInfo.email}
                        />
                    </div>
                    <div className='form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={signupInfo.password}
                        />
                    </div>
                    <div className='form'>
                        <label htmlFor='name'>Hostel</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='hostel'
                            autoFocus
                            placeholder='  Hostel Name...'
                            value={signupInfo.hostel}
                        />
                    </div >



                    <button type='submit' className='button'>Signup</button>
                    <span className='span'>Already have an account ?
                        <Link to="/login">Login</Link>
                    </span>
                </form>
               
            </div>
            <div className='error'>
            <ToastContainer />
            </div>
           
        </div>

    )
}

export default SignUp
