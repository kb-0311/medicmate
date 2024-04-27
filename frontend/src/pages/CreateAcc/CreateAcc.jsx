import React, { useEffect, useState } from "react";
import SignupCSS from "./CreateAcc.module.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:8000/api/v1"; // Define your API base URL

const CreateAcc = () => {
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [regnum, setregnum] = useState("");
  const [age, setage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAcc = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name: fullname,
        email: email,
        password: password,
        role: username,
        uuid: regnum,
      });

      console.log("Registration successful", response.data);
      navigate("/"); // Redirect the user after successful registration
    } catch (error) {
      console.error("Error during registration:", error.response);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className={SignupCSS["bg-container"]}>
      <Navbar />
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
          {console.log(username)}

          <input
            className={SignupCSS["input-field"]}
            type="name"
            placeholder="Your Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <select
            className={SignupCSS["input-field"]}
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          >
            <option value="">Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
          </select>

          <input
            className={SignupCSS["input-field"]}
            type="text"
            placeholder="Enter your Email (eg. sush@sush.com)"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            className={SignupCSS["input-field"]}
            type="password"
            placeholder="Password (min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className={SignupCSS["input-field"]}
            type="text"
            placeholder="Registration Number"
            value={regnum}
            onChange={(e) => setregnum(e.target.value)}
          />

          <input
            className={SignupCSS["input-field"]}
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />

          <div className={SignupCSS["action-buttons"]}>
            <button
              className={SignupCSS["submit-button"]}
              onClick={handleCreateAcc}
            >
              Create Account
            </button>
          </div>
          <p className={CreateAcc["signup-link"]}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
