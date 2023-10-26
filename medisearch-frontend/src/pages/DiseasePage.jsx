import React from "react";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DiseaseHeader from "../components/DiseaseHeader/DiseaseHeader";

export const DiseasePage = () => {

  const dummydata = {
    
    patientIndex: 1123,
    
    patientData : {
      patientAge: "117",
      patientGender: "female",
      symptoms: ["Symptom 1", "Symptom 2", "Symptom 3"],
    },

    diseaseData: [
      "Disease Name 1",
      "Disease Name 2",
      "Disease Name 3",
      "Disease Name 4",
      "Disease Name 5",
      "Disease Name 6",
    ],
    
  }
  
  return (
    <div className="page">
      <Navbar />
      <DiseaseHeader data={dummydata} />
      <Footer />
    </div>
  );
};
