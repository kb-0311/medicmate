import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MedicineItem from "../../components/MedicineItem/MedicineItem";
import styles from "./Prescription.module.css";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../data/metamask";
import { useDispatch, useSelector } from "react-redux";
import { loadPrescription } from "../../Actions/UserActions";

export const Prescription = () => {
  const dispatch = useDispatch();
  const [medicines, setMedicines] = useState([
    {
      name: "Medicine A",
      strength: "500mg",
      dose: "1-0-1",
      duration: "4 weeks",
    },
    {
      name: "Medicine B",
      strength: "250mg",
      dose: "1-0-1",
      duration: "3 weeks",
    },
  ]);

  const [newMedicineName, setNewMedicineName] = useState(""); // State for the new medicine input
  const [isAddingMedicine, setIsAddingMedicine] = useState(false); // State to toggle input field visibility

  const prescription = useSelector((state) => state.user.Prescription);

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
  const [searchText, setSearchText] = useState("");
  const [suggestedMedicines, setSuggestedMedicines] = useState([
    "Suggested Medicine 1",
    "Suggested Medicine 2",
    "Suggested Medicine 3",
  ]);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const addSuggestedMedicine = (suggestedMedicine) => {
    setMedicines((prevMedicines) => [
      ...prevMedicines,
      {
        name: suggestedMedicine,
        strength: "0mg",
        dose: "0-0-0",
        duration: "0 weeks",
      },
    ]);
    setSearchVisible(false);
  };

  const handleNewMedicineNameChange = (event) => {
    setNewMedicineName(event.target.value);
  };


  const handlesubmit = () => {
    console.log(medicines, "hello");
  };

  useEffect(() => {
    async function getReq() {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
          const prescription = await contract.getPrescription(prescriptionId);
          const arrayx = prescription.map((item) => item.toString());
          console.log(arrayx, "hello");
          const symptoms = arrayx[5];

          dispatch(loadPrescription(symptoms, disease));
        } catch (error) {
          alert("Error writing to contract: " + error.message);
        }
      } else {
        alert("MetaMask is not installed.");
      }
    }

    getReq();
  }, [prescriptionId, disease]);

  useEffect(() => {
    console.log(prescription, "f")
    if (prescription && prescription.length > 0) {
      
      const newMedicines = prescription.map((medicineName) => ({
        name: medicineName,
        strength: "0mg",
        dose: "0-0-0",
        duration: "0 weeks",
      }));
      setMedicines(newMedicines);
    }
  }, [prescription]);

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
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.testContainer}>
        <h1 className={styles.testTitle}>Prescription</h1>
        <div className={styles.patientDoctorInfo}>
          <div>
            <strong>Doctor:</strong> Dr. Sushrut Lachure
          </div>
          <div>
            <strong>Patient Name:</strong> Vishal Singh Tanwar
          </div>
          <div>
            <strong>Patient Age:</strong> 12 years
          </div>
          <div>
            <strong>Patient Gender:</strong> Male
          </div>
        </div>
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
        </ul>
        <div className={styles.addButtonContainer}>
          {searchVisible ? (
            <div className={styles.searchBar}>
              {/* <input
                type="text"
                placeholder="Search for medicines"
                value={searchText}
                className={styles.searchBarinput}
                onChange={handleSearchTextChange}
              /> */}
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
              +
            </div>
          )}
        </div>
        {isAddingMedicine ? (
          <div>
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={newMedicineName}
              onChange={handleNewMedicineNameChange}
            />
            <button onClick={handleAddNewMedicine}>Add Medicine</button>
          </div>
        ) : null}
        <div className={styles.submit} onClick={handlesubmit}>
          Submit
        </div>
      </div>
    </>
  );
};
