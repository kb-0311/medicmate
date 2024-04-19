import React from 'react';
import styles from './RequestCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function RequestCard({ request, onAccept, access }) {
  const navigate = useNavigate();
  
  const handleAcceptClick = () => {
    const requestId = request.prescriptionId;
    navigate(`/disease-list/${requestId}`);
  };

  const handleDetailsClick = () => {
    const requestId = request.prescriptionId;
    navigate(`/disease-list/${requestId}`);
  };

  return (
    <div className={styles.customCard}>
      <div className={styles.cardContent}>
        <h5 className={styles.cardTitle}>
        PrescriptionId:{request.prescriptionId} 
        </h5>
        <p className={styles.cardText}>
          <strong>Symptoms:</strong> {request.symptoms} 
        </p>
        <p className={styles.cardText}>
          <strong>Disease:</strong> {request.disease} 
        </p>

        {/* Chat Button */}
        <button className={styles.chatButton} onClick={() => navigate(`/chat/${request.prescriptionId}`)}>
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
