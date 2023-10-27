import React from 'react';
import styles from './RequestCard.module.css';

export default function RequestCard({ request, onAccept }) {
  const handleAcceptClick = () => {
    onAccept(request);
  };

  return (
    <div className={styles.customCard}>
      <div className={styles.cardContent}>
        <h5 className={styles.cardTitle}>
          Age: {request.age}, Gender: {request.gender}
        </h5>
        <p className={styles.cardText}>Symptoms: {request.symptoms.join(", ")}</p>
        <button className={styles.acceptButton} onClick={handleAcceptClick}>
          Accept
        </button>
      </div>
    </div>
  );
}
