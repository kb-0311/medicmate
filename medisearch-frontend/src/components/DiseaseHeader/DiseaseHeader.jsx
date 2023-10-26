import React from "react";
import "./DiseaseHeader.css";
import DiseaseSingleCard from "../DiseaseCard/DiseaseSingleCard";

const DiseaseHeader = ({ data }) => {
  const { patientIndex, patientData, diseaseData } = data;

  const groupedDiseaseData = [];
  for (let i = 0; i < diseaseData.length; i += 2) {
    const diseasePair = diseaseData.slice(i, i + 2);
    groupedDiseaseData.push(diseasePair);
  }

  return (
    <div>
      <div className="patient-details">
        <h1 className="patient-heading">Patient Details</h1>
        <p>Age: {patientData.patientAge}</p>
        <p>Gender: {patientData.patientGender}</p>
        <button
          // onClick={navigate('/prescription/:pro')}
          className="request-history-button"
        >
          Request Patient Medical History
        </button>
      </div>
      <div className="symptoms-details">
        <h1 className="symptoms-heading">Symptoms</h1>
        <li className="symptoms-heading">
          {patientData.symptoms.map((symptom, index) => (
            <li key={index}>{" "}{symptom}</li>
          ))}
        </li>
      </div>
      <div className="disease-header">
        <h1 className="disease-heading">Disease Prediction Result</h1>
        <div className="diseasecards-row-all">
          {groupedDiseaseData.map((diseasePair, index) => (
            <div className="diseasecards-row" key={index}>
              {diseasePair.map((diseaseName, subIndex) => (
                <DiseaseSingleCard
                  key={subIndex}
                  patientIndex={patientIndex}
                  diseaseName={diseaseName}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseHeader;
