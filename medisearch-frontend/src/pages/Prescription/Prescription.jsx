import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Prescription.module.css'; // Import your CSS Module

export const Prescription = () => {
    const [medicines, setMedicines] = useState([
        { name: 'Medicine A', dosage: '10mg' },
        { name: 'Medicine B', dosage: '20mg' },
        { name: 'Medicine C', dosage: '30mg' },
    ]);

    const handleDosageChange = (index, newDosage) => {
        setMedicines(prevMedicines => {
            const newMedicines = [...prevMedicines];
            newMedicines[index].dosage = newDosage;
            return newMedicines;
        });
    };

    return (
        <div className={styles.prescriptionContainer}>
            <Navbar />
            <h1 className={styles.prescriptionTitle}>Prescription</h1>
            <ul className={styles.medicinesList}>
                {medicines.map((medicine, index) => (
                    <li key={index} className={styles.medicineItem}>
                        <div className={styles.medicineName}>{medicine.name}</div>
                        <div className={styles.medicineDosage}>Dosage: {medicine.dosage}</div>
                        <button
                            onClick={() => handleDosageChange(index, prompt('Enter new dosage:'))}
                            className={styles.changeDosageButton}
                        >
                            Change Dosage
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
