import React, { Children, useState, useEffect } from "react";
import "./InputHeader.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
// import { abi, contractAddress } from "../../data/metamask";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../../config";
// import { loaddiseases } from "../../Actions/UserActions";

// const abiobj = abi;
// const contractAddressobj = contractAddress;
// const ethers = require("ethers");
// var inpsymp;
// var stringList;
// var Dlist;

// async function writeContract() {
//   if (typeof window.ethereum !== "undefined") {
//     const abi = abiobj;
//     const contractAddress = contractAddressobj;
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();
//     const contract = new ethers.Contract(contractAddress, abi, signer);
//     try {
//       // const deseaseList =
//       console.log(Dlist.data.Diseases, "geted")
//       const tx = await contract.addPrescriptionStep1(stringList, Dlist.data.Diseases);
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

const InputHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Diseases = useSelector((state) => state.user.Diseases);

  const [symptoms, setSymptoms] = useState("");
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  var Dlist;

  useEffect(() => {
    Dlist = Diseases;
  }, [Diseases]);

  const viewDiseases = () => {
    navigate("/disease-list");
  };

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) =>{
    setGender(event.target.value);
  } 

  async function handleClick(e) {
    // console.log({ symptoms });
    // inpsymp = symptoms;
    // stringList = inpsymp.split(",");
    // await dispatch(loaddiseases(symptoms))
    // writeContract();

    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/api/v1/request/add`,
        {
          patientName,
          age: parseInt(age, 10),
          symptoms,
          gender
        },
        {
          withCredentials: true, // Include cookies in cross-origin requests
        }
      );

      console.log("Success:", response.data);

      alert("Entry has been successfully added to request feed.");
      window.location.reload();
      // Optionally handle further actions here, like navigation or state updates
    } catch (error) {
      console.error("Error:", error);
      alert("Error in SUBMITTING: " + error.message);
    }
  }

  return (
    <div>
      <div className="input-header">
        <h1 className="input-heading">Input Patient Symptoms</h1>
        <p className="input-heading-desc">
          In Order to Predict the Disease, You need to Provided us what are the
          symptoms that you are facing right now. MedicMate AI Engine will
          predict your disease based on your virtual Diagnosis.
        </p>
        <div className="inputarea-1">
          <h2 className="inputarea-1-head">
            Tell us How the Patient is Feeling ?
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Symptoms"
              multiline
              rows={4}
              placeholder="eg. Cough, Headache, etc..."
              style={{ width: "75%" }}
              value={symptoms} // Set the value of the text field to the state variable
              onChange={handleSymptomsChange}
            />
            <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Additional Information (if any)"
              // multiline
              // rows={1}
              placeholder="eg. Past Medical History, etc..."
              style={{ width: "75%" }}
            />
          </div>
        </div>
        <div className="inputarea-2">
          <h2 className="inputarea-1-head">Patient Details</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              // id="outlined-multiline-static"
              id="patient-name"
              label="Patient's Full Name"
              placeholder="Mr./Mrs./Ms. Name LastName"
              style={{ width: "75%" }}
              value={patientName}
              onChange={handleNameChange}
            />
            <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              // id="outlined-number"
              id="patient-age"
              label="Patient's Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "75%" }}
              value={age}
              onChange={handleAgeChange}
            />
             <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              // id="outlined-number"
              id="patient-gender"
              label="Patient's Gender"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "75%" }}
              value={gender}
              onChange={handleGenderChange}
            />
            <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Patient's Current Address"
              // multiline
              // rows={1}
              placeholder="eg. Building A, Street B, City C..."
              style={{ width: "75%" }}
            />
            <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Patient's Contact Info"
              multiline
              rows={1}
              placeholder="eg. +91-xxxxxxx..."
              style={{ width: "75%" }}
            />
            <div style={{ margin: "20px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
          </div>
          <div className="submit-and-view-buttons">
            <button class="submit-detail-button" onClick={handleClick}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputHeader;
