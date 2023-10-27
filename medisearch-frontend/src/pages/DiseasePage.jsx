import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DiseaseHeader from "../components/DiseaseHeader/DiseaseHeader";
import { useParams } from "react-router";
import { ethers } from "ethers";

export const DiseasePage = () => {
  const dummydata = {
    
    prescriptionID: 1,
    
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
  const [data, setData] = useState(dummydata);
  const { id } = useParams();
  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "ad",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_lc_no",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_gender",
          type: "string",
        },
      ],
      name: "addAssistant",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_lc_no",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_gender",
          type: "string",
        },
      ],
      name: "addDoctor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_gender",
          type: "string",
        },
      ],
      name: "addPatient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_lc_no",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "addPharmacist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "addPrescriptionStep0",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string[]",
          name: "_symptoms",
          type: "string[]",
        },
        {
          internalType: "string[]",
          name: "_diseases",
          type: "string[]",
        },
      ],
      name: "addPrescriptionStep1",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_prescription_id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_final_disease",
          type: "string",
        },
        {
          internalType: "string[]",
          name: "_medicines",
          type: "string[]",
        },
      ],
      name: "addPrescriptionStep2",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_prescription_id",
          type: "uint256",
        },
      ],
      name: "addPrescriptionStep3",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "admin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "Assistant_mapper",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "assistants",
      outputs: [
        {
          internalType: "uint256",
          name: "license_number",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "assistant_address",
          type: "address",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "gender",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "createDefaultStruct",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "prescription_id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "patient_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "assistant_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "doctor_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "pharmacist_address",
              type: "address",
            },
            {
              internalType: "string[]",
              name: "symptoms",
              type: "string[]",
            },
            {
              internalType: "string[]",
              name: "diseases",
              type: "string[]",
            },
            {
              internalType: "string",
              name: "final_disease",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "medicines",
              type: "string[]",
            },
            {
              internalType: "bool",
              name: "allDone",
              type: "bool",
            },
          ],
          internalType: "struct MediContract.Prescription",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "Doctor_mapper",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "doctors",
      outputs: [
        {
          internalType: "uint256",
          name: "license_number",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "doctor_address",
          type: "address",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "gender",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getAssistant",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "license_number",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "assistant_address",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "age",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "gender",
              type: "string",
            },
          ],
          internalType: "struct MediContract.Assistant",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getDoctor",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "license_number",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "doctor_address",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "age",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "gender",
              type: "string",
            },
          ],
          internalType: "struct MediContract.Doctor",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPatient",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "patient_address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "age",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "gender",
              type: "string",
            },
          ],
          internalType: "struct MediContract.Patient",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPending",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPharmacist",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "license_number",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "pharmacist_address",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          internalType: "struct MediContract.Pharmacist",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPrescription",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "prescription_id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "patient_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "assistant_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "doctor_address",
              type: "address",
            },
            {
              internalType: "address",
              name: "pharmacist_address",
              type: "address",
            },
            {
              internalType: "string[]",
              name: "symptoms",
              type: "string[]",
            },
            {
              internalType: "string[]",
              name: "diseases",
              type: "string[]",
            },
            {
              internalType: "string",
              name: "final_disease",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "medicines",
              type: "string[]",
            },
            {
              internalType: "bool",
              name: "allDone",
              type: "bool",
            },
          ],
          internalType: "struct MediContract.Prescription",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "Patient_mapper",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "patients",
      outputs: [
        {
          internalType: "address",
          name: "patient_address",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "gender",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "pending",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "Pharmacist_mapper",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "pharmacists",
      outputs: [
        {
          internalType: "uint256",
          name: "license_number",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "pharmacist_address",
          type: "address",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "prescription_count",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "prescriptions",
      outputs: [
        {
          internalType: "uint256",
          name: "prescription_id",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "patient_address",
          type: "address",
        },
        {
          internalType: "address",
          name: "assistant_address",
          type: "address",
        },
        {
          internalType: "address",
          name: "doctor_address",
          type: "address",
        },
        {
          internalType: "address",
          name: "pharmacist_address",
          type: "address",
        },
        {
          internalType: "string",
          name: "final_disease",
          type: "string",
        },
        {
          internalType: "bool",
          name: "allDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contractAddress = "0x2cfe4165748aa94C35FC3Db008BA9727f431ccf0";
  

  useEffect(() => {
    console.log(id)
    const fun = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const prescription = await contract.getPrescription(id);
      const arrayx = prescription.map((item) => item.toString());
      console.log(arrayx)
      const symptoms = arrayx[5].split(",");
      const diseases = arrayx[6].split(",");

      setData({
        patientData: {
          patientAge: "117",
          patientGender: "female",
          symptoms: symptoms,
        },

        diseaseData: diseases,
        prescriptionID: id,
      });

    }

    fun();
    
  }, [id]);
  
  return (
    <div className="page">
      <Navbar />
      <DiseaseHeader data={data} />
      <Footer />
    </div>
  );
};
