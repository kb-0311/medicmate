import React from 'react';
import styles from './RequestCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function RequestCard({ request, onAccept, access }) {
  const navigate = useNavigate();
  
  const handleAcceptClick = () => {
    console.log(access)
    onAccept(request);
  };

  const handleDetailsClick = () => {
    const requestId = request.id;
    navigate(`/prescription/${requestId}`);
  };

  return (
    <div className={styles.customCard}>
      <div className={styles.cardContent}>
        <h5 className={styles.cardTitle}>
          Age: {request.age}, Gender: {request.gender}
        </h5>
        <p className={styles.cardText}>Symptoms: {request.symptoms.join(", ")}</p>
        <p className={styles.cardText}>Disease: {request.disease.join(", ")}</p>
        {access === 'op-accepted' ? (
          <button className={styles.stateButton} onClick={handleDetailsClick}>
            Details
          </button>
        ) : access === 'op-pending' ? (
          <button className={styles.pendingButton} disabled>
            Pending...
          </button>
        ) : (
          <button className={styles.stateButton} onClick={handleAcceptClick}>
            Accept
          </button>
        )}
      </div>
    </div>
  );
}
