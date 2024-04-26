import React from 'react';
import styles from './RequestCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function RequestCard({ patientName, symptoms, age, onAccept, access }) {
  const navigate = useNavigate();
  
  const handleAcceptClick = () => {
    navigate(`/disease-list/${patientName}`);
  };

  const handleDetailsClick = () => {
    navigate(`/disease-list/${patientName}`);
  };

  return (
    <div className={styles.customCard}>
      <div className={styles.cardContent}>
        <h5 className={styles.cardTitle}>
          Patient Name: {patientName} 
        </h5>
        <p className={styles.cardText}>
          <strong>Symptoms:</strong> {symptoms} 
        </p>
        <p className={styles.cardText}>
          <strong>Age:</strong> {age} 
        </p>

        {/* Chat Button */}
        <button className={styles.chatButton} onClick={() => navigate(`/chat/${patientName}`)}>
          P2P Chat
        </button>

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