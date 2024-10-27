import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpButton = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <button onClick={handleSignUpClick}
    style={{ margin:"10px",borderRadius: "20px",border: "5px 2px solid aliceblue", padding: "10px 20px", backgroundColor: "alice blue", color: "black", cursor: "pointer" }}>
      Sign Up
    </button>
  );
};

export default SignUpButton;
