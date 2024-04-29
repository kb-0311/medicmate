import React, { useState, useEffect } from "react";
import "./DiseaseList.css";
import DiseaseSingleCard from "../DiseaseCard/DiseaseSingleCard";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DiseaseHeader = ({ data }) => {
  const location = useLocation();
  const { prescriptionID, patientName, symptoms, age } = location.state;
  const { patientData, diseaseData } = data;

  const [predictedDiseases, setPredictedDiseases] = useState([]);

  const groupedDiseaseData = [];
  for (let i = 0; i < diseaseData.length; i += 2) {
    const diseasePair = diseaseData.slice(i, i + 2);
    groupedDiseaseData.push(diseasePair);
  }

  const handlePredictDiseases = () => {
    axios
      .post(
        "https://ffce-2409-40c2-205e-868-ace0-23a5-b140-b40d.ngrok-free.app/predict_disease",
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

        <Button
          variant="contained"
          component="a"
          href={`/chat/${prescriptionID}`}
        >
          P2P Chat
        </Button>

        <Button component="a" onClick={handlePredictDiseases}>
          Predict Diseases
        </Button>
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
