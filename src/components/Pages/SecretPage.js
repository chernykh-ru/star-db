import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const SecretPage = ({ isloggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedIn) {
      return navigate('/login');
    }
  }, [isloggedIn]);

  if (isloggedIn) {
    return (
      <div className='jumbotron text-center login-page'>
        <h3>Welcome! This page is full of secrets!</h3>
      </div>
    );
  }
  return (
    <div className='login-page'>
      <h3>You are not logged in. You should not see this!</h3>
    </div>
  );
};

export default SecretPage;
