import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import RequestCard from "../../components/AcceptedRequestCard/DiseaseList";
import "./Request.css";
import axios from "axios";

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
      symptoms: ["Fever", "Cough", "Fatigue"],
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

  useEffect(() => {
    console.log(id);
    const fun = async () => {};

    fun();
  }, [id]);

  return (
    <div className="page">
      <Navbar />


      <RequestCard data={dummydata} />      
      
      <Footer />
    </div>
  );
};
