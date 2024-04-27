import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import RequestCard from "../../components/AcceptedRequestCard/DiseaseList";
import "./Request.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';


export const Request = () => {

  // const [patientData, setPatientData] = useState({});

  // useEffect(() => {
  //   const fetchPatientData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/api/v1/request/all`, { withCredentials: true });
  //       setPatientData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching patient data:", error);
  //     }
  //   };

  //   fetchPatientData();
  // }, []);
  // console.log(patientData);
  
  const dummydata = {
    prescriptionID: 1,
    patientData: {
      name: "ACE",
      age: "30",
      gender: "Female",
      symptoms: "Fever, Cough, Fatigue"
    },
    diseaseData: [
      "Common Cold",
      "Influenza",
      "Pneumonia",
      "Bronchitis",
      "Asthma",
      "COVID-19",
    ],
  };


  const { id } = useParams();
  // const location = useLocation();
  // const { prescriptionID, patientName, symptoms, age, predictedDiseases } = location.state;
  // const [diseaseData, setDiseaseData] = useState([]);

  // useEffect(() => {
  //   console.log(id);
  //   const fun = async () => {};

  //   fun();
  // }, [id]);
  // useEffect(() => {
  //   const fetchDiseaseData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/api/v1/request/${id}`);
  //       setDiseaseData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching disease data:", error);
  //     }
  //   };

  //   fetchDiseaseData();
  // }, [id]);
  

  return (
    <div className="page">
      <Navbar />

      <RequestCard data={dummydata} />      
      <Footer />
    </div>
  );
};
