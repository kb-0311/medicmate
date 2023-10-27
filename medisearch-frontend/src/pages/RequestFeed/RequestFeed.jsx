import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./RequestFeed.module.css"; // Import the CSS module

export default function RequestFeed() {
  const requests = [
    {
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat", "gxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },
    {
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },{
      id: 1,
      age: 25,
      gender: "Male",
      symptoms: ["Fever", "Cough", "Sore Throat"],
    },
    {
      id: 2,
      age: 30,
      gender: "Female",
      symptoms: ["Headache", "Fatigue"],
    },
    // Add more request objects
  ];

  const handleAcceptRequest = (acceptedRequest) => {
    // Implement the logic to accept the request
    console.log(`Accepted request ID ${acceptedRequest.id}`);
  };

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cards = requests.map((request) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={request.id}>
      <RequestCard request={request} onAccept={handleAcceptRequest} />
    </Grid>
  ));

  return (
    <>
      <Navbar />
      <div className={styles.feed}>
        <div className={styles.title}>
          <h1>Request Feed</h1>
        </div>
        <Grid container spacing={2}>
          {cards}
        </Grid>
      </div>
    </>
  );
}
