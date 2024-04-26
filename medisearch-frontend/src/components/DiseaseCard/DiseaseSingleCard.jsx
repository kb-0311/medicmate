import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DiseaseCard.css";

const DiseaseSingleCard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props, "this");
  }, [props]);

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="disease-name">{props.diseaseName}</h3>
        <button
          onClick={() => {
            navigate(
              `/prescription/${props.PrescriptionID}/${props.diseaseName}`
            );
          }}
          className="generate-button"
        >
          Generate Prescription
        </button>
      </div>
    </div>
  );
};

export default DiseaseSingleCard;
