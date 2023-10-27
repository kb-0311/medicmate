import React, { useEffect, useState } from "react";
import SignupCSS from "./Signup.module.css";
import { ethers } from 'ethers'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [regnum, setregnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(username, name, regnum, email, password, window.ethereum);
    
    if (window.etherium) {
      const contractAddress = "0x0Cd36a6526311eDD7b5C8C92F8B64dcFe7030218";
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, abi, signer);
    }
    else {
      console.log("Not connected");
    }
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