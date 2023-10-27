import React, { useState } from "react";
import "./InputHeader.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loaddiseases } from "../../Actions/UserActions";

const InputHeader = () => {
  const isButtonEnabled = true; // Set it to true or false based on your logic
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [symptoms, setSymptoms] = useState("");

  const viewDiseases = () => {
    dispatch(loaddiseases(symptoms));
    // navigate("/disease-list");
  };

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  return (
    <div>
      <div className="input-header">
        <h1 className="input-heading">Input Patient Symptoms</h1>
        <p className="input-heading-desc">
          In Order to Predict the Disease, You need to Provided us what are the
          symptoms that you are facing right now. MediSearch AI Engine will
          Predict your disease based on your virtual Diagnosis.
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
              value={symptoms}
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
              id="outlined-multiline-static"
              label="Patient's Full Name"
              // multiline
              // rows={1}
              placeholder="Mr./Mrs./Ms. Name LastName"
              style={{ width: "75%" }}
            />
            <div style={{ margin: "8px 0" }}>
              {/* Add margin (space) between the two TextField components */}
            </div>
            <TextField
              id="outlined-number"
              label="Patient's Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "75%" }}
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
            <button class="submit-detail-button"
              onClick={viewDiseases}
            >SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputHeader;
