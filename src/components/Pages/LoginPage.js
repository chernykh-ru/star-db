import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Login = ({ isloggedIn, onLogin }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isloggedIn) {
  //     return navigate('/');
  //   }
  // }, [isloggedIn]);

  return (
    <div className='jumbotron login-page'>
      {!isloggedIn && (
        <div>
          <h3>Login to see secret page!</h3>
          <button className='btn btn-primary' onClick={onLogin}>
            Login
          </button>
        </div>
      )}

      {isloggedIn && (
        <div>
          <h3>Welcome, you are logged in!</h3>
          <button className='btn btn-primary' onClick={onLogin}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
