import React, { useEffect } from "react";
import "./DiseaseList.css";
import DiseaseSingleCard from "../DiseaseCard/DiseaseSingleCard";
import Button from "@mui/material/Button";
import { useLocation } from 'react-router-dom';

const DiseaseHeader = ({ data }) => {
  const location = useLocation();
  const { prescriptionID, patientName, symptoms, age } = location.state;
  const { patientData, diseaseData } = data;

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

            <p><strong>Name</strong>: {patientName}</p>
            <p><strong>Age</strong>: {age}</p>
            <p><strong>Prescription ID</strong>: {prescriptionID}</p> 
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
