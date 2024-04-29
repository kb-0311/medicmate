// CompletedRequestFeed.jsx
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CompletedRequestCard from "../../components/CompletedRequestCard/CompletedRequestCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./CompletedRequestFeed.module.css";
import axios from "axios";

export default function CompletedRequestFeed() {
  const [completedRequests, setCompletedRequests] = useState([]);

  useEffect(() => {
    async function getRequests() {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/request/completed/all', {withCredentials:true});
        setCompletedRequests(response.data.completedRequests);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    }

    getRequests();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.feed}>
        <div className={styles.title}>
          <h1>Completed Request Feed</h1>
        </div>
        <Grid container spacing={2}>
          {completedRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={request._id}>
              <CompletedRequestCard
                prescriptionId={request._id}
                patientName={request.patientName}
                symptoms={request.symptoms}
                age={request.age}
                predictedDisease={request.predictedDisease}
                predictedPrescription={request.predictedPrescription}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}