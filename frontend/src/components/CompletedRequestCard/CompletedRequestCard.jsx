// CompletedRequestCard.jsx
import React from "react";
import styles from "./CompletedRequestCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function CompletedRequestCard({
  prescriptionId,
  patientName,
  symptoms,
  age,
  predictedDisease,
  predictedPrescription,
}) {
    const navigate = useNavigate();
  return (
    <div className={styles.customCard}>
      <div className={styles.cardContent}>
        <p className={styles.cardText}>
          <strong>Presciption ID:</strong> {prescriptionId}
        </p>
        <p className={styles.cardText}>
          <strong>Patient Name:</strong> {patientName}
        </p>
        <p className={styles.cardText}>
          <strong>Symptoms:</strong> {symptoms}
        </p>
        <p className={styles.cardText}>
          <strong>Age:</strong> {age}
        </p>
        <p className={styles.cardText}>
          <strong>Predicted Disease:</strong> {predictedDisease}
        </p>
        <p className={styles.cardText}>
          <strong>Predicted Prescription:</strong> {predictedPrescription}
        </p>
      </div>

      {/* <button className={styles.stateButton} onClick={() => navigate(`/chat/${prescriptionId}`)}>
        Chat
      </button> */}
        <Button
          variant="contained"
          component="a"
          href={`/chat/${prescriptionId}`}
        >
          P2P Chat
        </Button>

    </div>
  );
}