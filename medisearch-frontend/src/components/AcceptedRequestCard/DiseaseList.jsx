import React, { useEffect } from "react";
import "./DiseaseList.css";
import DiseaseSingleCard from "../DiseaseCard/DiseaseSingleCard";
import Button from "@mui/material/Button";

const DiseaseHeader = ({ data }) => {
  const { prescriptionID, patientData, diseaseData } = data;

  const groupedDiseaseData = [];
  for (let i = 0; i < diseaseData.length; i += 2) {
    const diseasePair = diseaseData.slice(i, i + 2);
    groupedDiseaseData.push(diseasePair);
  }

  useEffect(() => {
    console.log(data, "ghdghfg");
  }, []);

  return (
    <div className="container">
      <div className="left-container">
        <div className="patient-details">
          <h1 className="patient-heading">Patient Details</h1>
          <div className="patient-personal">
            <p>Name: {patientData.name}</p>
            <p>Age: {patientData.age}</p>
            <p>Gender: {patientData.gender}</p>
          </div>
        </div>

        <div className="symptoms-details">
          <h1 className="symptoms-heading">Symptoms</h1>
          <div className="symptoms-heading">
            {patientData.symptoms.map((symptom, index) => (
              <div key={index}> ➜ {symptom}</div>
            ))}
          </div>
        </div>

        <Button
          variant="contained"
          component="a"
          href={`/chat/${prescriptionID}`}
        >
          P2P Chat
        </Button>
      </div>
      <div className="right-container">
        <div className="disease-card">
          <h1 className="disease-heading">Predicted Diseases</h1>
          <div className="diseases-list">
            {groupedDiseaseData.flat().map((diseaseName, index) => (
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
