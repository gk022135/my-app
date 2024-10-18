import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpButton = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <button onClick={handleSignUpClick}>
      Sign Up
    </button>
  );
};

export default SignUpButton;
