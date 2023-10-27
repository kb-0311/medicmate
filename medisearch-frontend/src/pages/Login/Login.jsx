import React, { useEffect, useState } from 'react'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../Actions/UserActions';
import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { isAuthenticated , loading, user} = useSelector((state) => state.user);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    // await dispatch(loginUser(email, password));
  };


//   useEffect(() => {
    // if (!loading && isAuthenticated) {
    //   navigate("/");
    // }
//   }, [loading , isAuthenticated])
  

  return (
    <div className={LoginCSS['bg-container']}>
      <div className={LoginCSS.container}>
        <div className={LoginCSS['login-form']}>
          <div className={LoginCSS.logo}>Login</div>
          <input
            className={LoginCSS['input-field']}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={LoginCSS['input-field']}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={LoginCSS['action-buttons']}>
            <button className={LoginCSS['submit-button']} onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <button className={LoginCSS['forgot-password-button']}>Forgot your password?</button>
          <p className={LoginCSS['signup-link']}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;