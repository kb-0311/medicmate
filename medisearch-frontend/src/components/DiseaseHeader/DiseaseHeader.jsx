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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // gap: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="patient-details"
          style={{
            backgroundColor: "#C7F2FF",
            marginTop: "90px",
            paddingBottom: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
            borderRadius: "30px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h1 className="patient-heading">Patient Details</h1>
          <p>Name: {patientData.patientName}</p>
          <p>Gender: {patientData.patientGender}</p>
          <p>Age: {patientData.patientAge}</p>
          <button
            // onClick={navigate('/prescription/:pro')}
            className="request-history-button"
          >
            Request Patient Medical History
          </button>
        </div>

        <div
          className="symptoms-details"
          style={{
            backgroundColor: "#C7F2FF",
            marginTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
            borderRadius: "30px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h1 className="symptoms-heading">Symptoms</h1>
          <div className="symptoms-heading">
            {patientData.symptoms.map((symptom, index) => (
              <div key={index}> ➜ {symptom}</div>
            ))}
          </div>
        </div>
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
