import React, { useState } from 'react'; 
import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Actions/UserActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', {
        email,
        password,
        role
      }, {
        withCredentials: true // Include cookies in cross-origin requests
      });

      dispatch(loginUser(response.data.user, null)); // Assuming loginUser action can handle this response
      // dispatch(loginUser({ email: response.data.email, ...response.data }));
      navigate("/"); // Navigate to home page or dashboard after successful login

    } catch (error) {
      console.error("Error during login:", error.response);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className={LoginCSS["bg-container"]}>
      <div className={LoginCSS.container}>
        <div className={LoginCSS["login-form"]}>
          <img
            src="https://i.imgur.com/ogkauCf.png"
            alt="logo"
            // style={{ width: "20%", marginBottom: "10px", borderRadius: "20px" }}
            style={{ width: "20%", marginBottom: "10px", borderRadius: "20px", cursor: "pointer" }}
            // onClick={() => navigate('/')}
          ></img>
          <div className={LoginCSS.logo}>Login</div>
          <select
            className={LoginCSS["input-field"]}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select a role</option>
            <option value="doctor">Doctor</option>
            <option value="operator">Operator</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
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
              Log In
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