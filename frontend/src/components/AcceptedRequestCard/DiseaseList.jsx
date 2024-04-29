import React, { useState, useEffect } from "react";
import "./DiseaseList.css";
import DiseaseSingleCard from "../DiseaseCard/DiseaseSingleCard";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { llm_url } from "../../config";
import TextField from "@mui/material/TextField";

const DiseaseHeader = ({ data }) => {
  const location = useLocation();
  const { prescriptionID, patientName, symptoms, age } = location.state;
  const { patientData, diseaseData } = data;

  const [predictedDiseases, setPredictedDiseases] = useState([]);
  const [newDisease, setNewDisease] = useState("");

  const handleAddDisease = () => {
    setPredictedDiseases((prevDiseases) => [...prevDiseases, newDisease]);
    setNewDisease("");
  };

  const groupedDiseaseData = [];
  for (let i = 0; i < diseaseData.length; i += 2) {
    const diseasePair = diseaseData.slice(i, i + 2);
    groupedDiseaseData.push(diseasePair);
  }

  const handlePredictDiseases = () => {
    axios
      .post(
        `${llm_url}/predict_disease`,
        {
          symptoms: symptoms,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setPredictedDiseases(response.data.diseases);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    console.log(data, "ghdghfg");
  }, []);

  return (
    <div className="container">
      <div className="left-container">
        <div className="patient-details">
          <h1 className="patient-heading">Patient Details</h1>
          <div className="patient-personal">
            <p>
              <strong>Name</strong>: {patientName}
            </p>
            <p>
              <strong>Age</strong>: {age}
            </p>
            <p>
              <strong>Prescription ID</strong>: {prescriptionID}
            </p>
          </div>
        </div>

        <div className="symptoms-details">
          <h1 className="symptoms-heading">Symptoms</h1>
          <div className="symptoms-heading">
            <p>{symptoms}</p>
          </div>
        </div>

        <div className="options">
          <Button
            variant="contained"
            component="a"
            href={`/chat/${prescriptionID}`}
          >
            Doctor - Operator Chat
          </Button>

          <Button
            component="a"
            onClick={handlePredictDiseases}
            variant="contained"
          >
            Predict Diseases
          </Button>
        </div>

        <div className="add-disease-container">
          <TextField
            label="Add a new disease"
            className="disease-input"
            value={newDisease}
            onChange={(e) => setNewDisease(e.target.value)}
          />
          {/* <Button onClick={handleAddDisease} className="add-diesease-button">
            Add Disease
          </Button>

          <input
            type="text"
            placeholder="Type a message..."
            className="disease-input"
            value={newDisease}
            onChange={(e) => setNewDisease(e.target.value)}
          /> */}
          <Button component="a" onClick={handleAddDisease} variant="contained">
            Add Disease
          </Button>
          {/* <button onClick={handleAddDisease} className="add-diesease-button">
            Send
          </button> */}
        </div>
      </div>
      <div className="right-container">
        <div className="disease-card">
          <h1 className="disease-heading">Predicted Diseases</h1>
          <div className="diseases-list">
            {console.log(predictedDiseases)}
            {predictedDiseases.map((diseaseName, index) => (
              <DiseaseSingleCard
                key={index}
                PrescriptionID={prescriptionID}
                diseaseName={diseaseName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseHeader;
