import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser, registerUser } from '../../Actions/UserActions';
import SignupCSS from "./Signup.module.css";
// import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [regnum, setregnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { loading } = useSelector((state) => state.user);
  //   const { isAuthenticated, user } = useSelector((state) => state.user);

  const handleSignup = async (e) => {
    e.preventDefault();
    // await dispatch(registerUser(username, email, password));
  };

  //   useEffect(() => {
  // if (!loading && isAuthenticated) {
  //   navigate("/");
  // }
  //   }, [loading , isAuthenticated])

  return (
    <div className={SignupCSS["bg-container"]}>
      <div className={SignupCSS.container}>
        <div className={SignupCSS["login-form"]}>
          <img
            src="https://i.imgur.com/ogkauCf.png"
            alt="logo"
            style={{ width: "20%", marginBottom: "10px", borderRadius: "20px" }}
          ></img>
          <div className={SignupCSS.logo}>Sign-Up</div>
          <select
            className={SignupCSS["input-field"]}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            <option value="">Select a role</option>
            <option value="doctor">Doctor</option>
            <option value="operator">Operator</option>
            <option value="pharmacy">Pharmacy</option>
          </select>

          <input
            className={SignupCSS["input-field"]}
            type="name"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          {username === "doctor" ? (
            <input
              className={SignupCSS["input-field"]}
              type="text"
              placeholder="Doctor's Registration Number"
              value={regnum}
              onChange={(e) => setregnum(e.target.value)}
            />
          ) : (
            <div></div>
          )}

          <input
            className={SignupCSS["input-field"]}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={SignupCSS["input-field"]}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={SignupCSS["action-buttons"]}>
            <button
              className={SignupCSS["submit-button"]}
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
          <p className={SignupCSS["login-link"]}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;