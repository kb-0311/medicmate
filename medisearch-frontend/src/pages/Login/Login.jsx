import React, { useEffect, useState } from 'react'; 
import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { loginUser, logoutUser } from '../../Actions/UserActions';
import {useSelector, useDispatch } from 'react-redux'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const x = useSelector((state) => state.user);;
  

    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        
        if (typeof window.ethereum !== "undefined") {
          const provider = new ethers.BrowserProvider(window.ethereum);

          
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Get the connected account
          const accounts = await provider.listAccounts();

          if (accounts.length > 0) {
            // console.log(x, accounts, provider);
            await dispatch(loginUser(accounts[0], provider));
            // console.log("lj")
            console.log(x)
            // navigate("/");
          }
        }
      } catch (error) {
        console.error("Error while connecting with MetaMask: ", error);
      }
    };

      const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
      };




//   useEffect(() => {
    // if (!loading && isAuthenticated) {
    //   navigate("/");
    // }
//   }, [loading , isAuthenticated])
  

  return (
    <div className={LoginCSS["bg-container"]}>
      <div className={LoginCSS.container}>
        <div className={LoginCSS["login-form"]}>
          <img
            src="https://i.imgur.com/ogkauCf.png"
            alt="logo"
            style={{ width: "20%", marginBottom: "10px", borderRadius: "20px" }}
          ></img>
          <div className={LoginCSS.logo}>Login</div>
          <input
            className={LoginCSS["input-field"]}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={LoginCSS["input-field"]}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={LoginCSS["action-buttons"]}>
            <button className={LoginCSS["submit-button"]} onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <button className={LoginCSS["forgot-password-button"]}>
            Forgot your password?
          </button>
          <p className={LoginCSS["signup-link"]}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;