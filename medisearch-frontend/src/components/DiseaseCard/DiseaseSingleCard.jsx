import React from "react";
import { useNavigate } from "react-router-dom";
import "./DiseaseCard.css";

const DiseaseSingleCard = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="disease-info">
            <h3 className="disease-name">{props.diseaseName}</h3>
            <p className="disease-type">{props.diseaseType}</p>
          </div>
          <button
            onClick={() => {
            navigate(`/prescription/${props.patientIndex}`)}}
            className="generate-button"
          >
            Generate Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiseaseSingleCard;
