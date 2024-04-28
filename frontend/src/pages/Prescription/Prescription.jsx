import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MedicineItem from "../../components/MedicineItem/MedicineItem";
import styles from "./Prescription.module.css";
import { useParams } from "react-router";
import { ethers } from "ethers";
import Button from "@mui/material/Button";
import { abi, contractAddress } from "../../data/metamask";
import { useDispatch, useSelector } from "react-redux";
import { loadPrescription, loadRequest } from "../../Actions/UserActions";
import axios from "axios";

export const Prescription = () => {
  const dispatch = useDispatch();
  const [medicines, setMedicines] = useState([
    // {
    //   name: "Medicine A",
    //   strength: "500mg",
    //   dose: "1-0-1",
    //   duration: "4 weeks",
    // },
    // {
    //   name: "Medicine B",
    //   strength: "250mg",
    //   dose: "1-0-1",
    //   duration: "3 weeks",
    // },
  ]);
  const [predictedPrescription, setPredictedPrescription] = useState("Sushrut, Lachure, hehe");

  const [newMedicineName, setNewMedicineName] = useState(""); // State for the new medicine input
  const [isAddingMedicine, setIsAddingMedicine] = useState(false); // State to toggle input field visibility

  // const  prescription  = useSelector((state) => state.user.Prescription);

  const { account } = useSelector((state) => state.user);
  const { pendingRequest } = useSelector((state)=>state.user);


  const { prescriptionId, disease } = useParams();

  const handleDosageChange = (index, newDosage) => {
    setMedicines((prevMedicines) => {
      const newMedicines = [...prevMedicines];
      newMedicines[index].dose = newDosage;
      return newMedicines;
    });
  };

  const handleRemoveMedicine = (medicineToRemove) => {
    setMedicines((prevMedicines) =>
      prevMedicines.filter((medicine) => medicine !== medicineToRemove)
    );
  };

  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  const handleNewMedicineNameChange = (event) => {
    setNewMedicineName(event.target.value);
  };

  const handlesubmit = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const concatenatedMedicines = medicines.map((medicine) => {
      return `${medicine.name}#${medicine.strength}#${medicine.dose}#${medicine.duration}`;
    });

    console.log(concatenatedMedicines, "hellojkgfhh");

    const tx = await contract.addPrescriptionStep2(
      prescriptionId,
      disease,
      concatenatedMedicines
    );
    // const array = tx.map((item) => item.toString());
    console.log("hello", tx);
  };

  useEffect(() => {

    // 662e788e35902d790d42b791
    
    dispatch(loadRequest(prescriptionId));
  
  }, [])
  

  // useEffect(() => {
  //   console.log(prescription, "f");
  //   if (prescription && prescription.length > 0) {
  //     const newMedicines = prescription.map((medicineName) => ({
  //       name: medicineName,
  //       strength: "0mg",
  //       dose: "0-0-0",
  //       duration: "0 weeks",
  //     }));
  //     setMedicines(newMedicines);
  //   }
  // }, [prescription]);

  const handleAddNewMedicine = () => {
    if (newMedicineName) {
      setMedicines((prevMedicines) => [
        ...prevMedicines,
        {
          name: newMedicineName,
          strength: "0mg",
          dose: "0-0-0",
          duration: "0 weeks",
        },
      ]);
      setNewMedicineName("");
      setSearchVisible(false);
    }
  };

  const handleLoadMedicines = async () => {
    try {
      const response = await axios.post('https://f200-2409-40c2-2050-53fe-8150-fc3a-33cf-fb31.ngrok-free.app/predict_medicine', {
        disease: disease
      });
      const { medicines } = response.data;
      setMedicines(medicines.map(medicine => ({
        name: medicine,
        strength: "0mg",
        dose: "0-0-0",
        duration: "0 weeks",
      })));

      // As a , separated string
      const prescriptionString = medicines.join(', ');
      setPredictedPrescription(prescriptionString);
    console.log(predictedPrescription);
    } catch (error) {
      console.error('Error loading medicines:', error);
    }
  };

  const handleMarkAsDone = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/request/done', {
        requestId: prescriptionId,
        predictedDisease: disease,
        predictedPrescription: predictedPrescription
      }, {withCredentials:true});
      console.log('Request marked as done:', response.data);
    } catch (error) {
      console.error('Error marking request as done:', error);
    }
  };

  const currentDate = new Date();

  // Get the year, month, and day
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so January is 0
  const day = currentDate.getDate();

  // Format the date as desired (e.g., YYYY-MM-DD)
  const formattedDate = `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year}`;

  console.log(formattedDate);

  return (
    <>
      <Navbar />
      <div className={styles.testContainer}>
        <h1 className={styles.testTitle}>Prescription for {disease} & prescriptionId: {prescriptionId} & predictedPrescription : {predictedPrescription}</h1>
        {console.log(medicines)}
        <div className={styles.patientDoctorInfo}>
          <div className={styles.patientInfo}>
            <div>
              <strong>Patient Name:</strong> {pendingRequest? pendingRequest.patientName:""}
            </div>
            <div>
              <strong>Patient Age:</strong> {pendingRequest? pendingRequest.age:""}
            </div>
          </div>
          <div className={styles.doctorInfo}>
            <div>
              <strong>Doctor Name:</strong> {account?account.name:""}
            </div>
            <div>
              <strong>Doctor ID:</strong>  {account?account._id:""}
            </div>
            <div>
              <strong>Date:</strong> {formattedDate}
            </div>
          </div>
        </div>

        
        <Button
            component="a"
            onClick={handleLoadMedicines}
          >
            Load Medicines
        </Button>

        <ul className={styles.medicinesList}>
          {medicines.map((medicine, index) => (
            <div key={index} className={styles.medicineRow}>
              <MedicineItem
                medicine={medicine}
                onDosageChange={(newDosage) =>
                  handleDosageChange(index, newDosage)
                }
              />

              <button
                onClick={() => handleRemoveMedicine(medicine)}
                className={styles.removeMedicineButton}
              >
                Remove
              </button>
            </div>
          ))}
          <div className={styles.addButtonContainer}>
            {searchVisible ? (
              <div className={styles.searchBar}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Medicine Name"
                    value={newMedicineName}
                    onChange={handleNewMedicineNameChange}
                  />
                  <button onClick={handleAddNewMedicine}>Add Medicine</button>
                </div>
              </div>
            ) : (
              <div
                className={styles.changeDosageButton}
                onClick={toggleSearchBar}
              >
                Add new medicine
              </div>
            )}
          </div>
        </ul>
        {/* {isAddingMedicine ? (
          <div>
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={newMedicineName}
              onChange={handleNewMedicineNameChange}
            />
            <button onClick={handleAddNewMedicine}>Add Medicine</button>
          </div>
        ) : null} */}
        <div className={styles.submitbuttoncontainer}>
          <div className={styles.submit} onClick={handleMarkAsDone}>
            Mark as Done
          </div>
        </div>
        <div className={styles.submitbuttoncontainer}>
          <div className={styles.submit}>
            Download
          </div>
        </div>
      </div>
    </>
  );
};
