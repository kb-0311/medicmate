import React, { useState } from "react";
import styles from "./MedicineItem.module.css";

const MedicineItem = ({ medicine, onDosageChange, isSuggested }) => {
  const [editedDosage, setEditedDosage] = useState(medicine.dose);
  const [editedStrength, setEditedStrength] = useState(medicine.strength);
  const [editedDuration, setEditedDuration] = useState(medicine.duration);

  const handleDosageChange = () => {
    onDosageChange(editedDosage);
  };

  return (
    <li className={styles.medicineItem}>
      <div className={styles.medicineName}>{medicine.name}</div>
      <div className={styles.medicineInfo}>
        <div className={styles.fieldContainer}>
          <div className={styles.label}>
            <strong>Dosage:</strong>
          </div>
          <input
            type="text"
            className={styles.input} // Use the input class from CSS
            value={editedDosage}
            onChange={(e) => setEditedDosage(e.target.value)}
          />
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.label}>
            <strong>Strength:</strong>
          </div>
          <input
            type="text"
            className={styles.input} // Use the input class from CSS
            value={editedStrength}
            onChange={(e) => setEditedStrength(e.target.value)}
          />
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.label}>
            <strong>Duration:</strong>
          </div>
          <input
            type="text"
            className={styles.input} // Use the input class from CSS
            value={editedDuration}
            onChange={(e) => setEditedDuration(e.target.value)}
          />
        </div>
      </div>
      {/* {!isSuggested && (
                <button onClick={handleDosageChange} className={styles.changeDosageButton}>
                    Change Dosage
                </button>
            )} */}
    </li>
  );
};

export default MedicineItem;
