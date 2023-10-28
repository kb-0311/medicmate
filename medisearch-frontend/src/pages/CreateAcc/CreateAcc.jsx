import React, { useEffect, useState } from "react";
import SignupCSS from "./CreateAcc.module.css";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../data/metamask";
import { useNavigate } from "react-router-dom";

const abiobj = abi;
const contractAddressobj = contractAddress;
var rnum;
var fname;
var sex;
var uname;

// async function writeContract(rnum, fname, sex) {
//   if (typeof window.ethereum !== "undefined") {
//     const abi = abiobj;
//     const contractAddress = contractAddressobj;
//     const provider = new ethers.BrowserProvider(window.ethereum);

//     const signer = await provider.getSigner();
//     console.log(signer);
//     const contract = new ethers.Contract(contractAddress, abi, signer);
//     console.log(contract);
//     try {
//       const tx = await contract.addDoctor(Number(rnum), fname, 0, sex); // Replace with your function
//       console.log("Transaction Hash: ", tx.hash);
//       const receipt = await tx.wait();
//       console.log("Transaction Receipt: ", receipt);
//     } catch (error) {
//       alert("Error writing to contract: " + error.message);
//     }
//   } else {
//     alert("MetaMask is not installed.");
//   }
// }

const CreateAcc = () => {
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [gender, setgender] = useState("");
  const [regnum, setregnum] = useState("");
  const [age, setage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(username, fullname, regnum, age, password, window.ethereum);

    if (window.etherium) {
      const contractAddress = "0x4D0D4fCE4BB635709B586C9e7cE9cAaC0C739843";
  // const contractAddress = "0x2cfe4165748aa94C35FC3Db008BA9727f431ccf0"; // old

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, abi, signer);
    } else {
      console.log("Not connected");
    }
  };

  //   useEffect(() => {
  // if (!loading && isAuthenticated) {
  //   navigate("/");
  // }
  //   }, [loading , isAuthenticated])

  function handleCreateAcc() {
    console.log(fullname);
    fname = fullname;
    rnum = regnum;
    sex = gender;
    uname = username;
    async function writeContract(uname, rnum, fname, sex) {
      if (typeof window.ethereum !== "undefined") {
        const abi = abiobj;
        const contractAddress = contractAddressobj;
        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();
        console.log(signer);
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract);
        try {
          var tx;
          if (uname === "doctor") {
            tx = await contract.addDoctor(Number(rnum), fname, 0, sex); // Replace with your function
          } else if (uname === "operator") {
            tx = await contract.addAssistant(Number(rnum), fname, 0, sex); // Replace with your function
          } else if (uname === "pharmacy") {
            tx = await contract.addPharmacist(Number(rnum), fname); // Replace with your function
          }

          console.log("Transaction Hash: ", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction Receipt: ", receipt);
          navigate("/");
        } catch (error) {
          alert("Error writing to contract: " + error.message);
        }
      } else {
        alert("MetaMask is not installed.");
      }
    }
    writeContract(uname, rnum, fname, sex);
  }

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
            placeholder="Registration Number"
            value={regnum}
            onChange={(e) => setregnum(e.target.value)}
          />

          <input
            className={SignupCSS["input-field"]}
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
          {/* <input
            className={SignupCSS["input-field"]}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <div className={SignupCSS["action-buttons"]}>
            <button
              className={SignupCSS["submit-button"]}
              onClick={handleCreateAcc}
            >
              Create Account
            </button>
          </div>
          {/* <p className={SignupCSS["login-link"]}>
            Already have an account? <a href="/login">Login</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
// licence num, name, age, gender