import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MedicineItem from "../../components/MedicineItem/MedicineItem";
import styles from "./Prescription.module.css";

export const Prescription = () => {
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
    // Add more medicines here
  ]);

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

  const handlesubmit = () => {
    console.log(medicines, "hello")
  }

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
              <input
                type="text"
                placeholder="Search for medicines"
                value={searchText}
                className={styles.searchBarinput}
                onChange={handleSearchTextChange}
              />
              <div className={styles.suggestedMedicines}>
                {suggestedMedicines.map((suggestedMedicine, index) => (
                  <div
                    key={index}
                    className={styles.suggestedMedicine}
                    onClick={() => addSuggestedMedicine(suggestedMedicine)}
                  >
                    {suggestedMedicine}
                  </div>
                ))}
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
        <div
              className={styles.submit}
              onClick={handlesubmit()}
        >
        </div>
      </div>
    </>
  );
};
