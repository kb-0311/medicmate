import React, { useState } from "react";
import { Grid, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./OperatorFeed.module.css"; 

export default function OperatorFeed() {
    const [selectedRequestType, setSelectedRequestType] = useState("pending");
    const PendingRequests = [
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
    const AcceptedRequests = [
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
    
      const handleRequestTypeChange = (event) => {
        setSelectedRequestType(event.target.value);
    };
    
      const requestCards =
        selectedRequestType === "pending"
          ? PendingRequests.map((request) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={request.id}>
                  <RequestCard request={request} onAccept={handleAcceptRequest} access={"op-pending"} />
              </Grid>
            ))
          : AcceptedRequests.map((request) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={request.id}>
                <RequestCard request={request} onAccept={handleAcceptRequest} access={"op-accepted"}/>
              </Grid>
            ));
    
      return (
        <>
          <Navbar />
          <div className={styles.feed}>
            <div className={styles.title}>
              <h1>Operator Feed</h1>
            </div>
            <div className={styles.centerFormControl}>
                <FormControl>
                    <Select
                    value={selectedRequestType}
                    onChange={handleRequestTypeChange}
                    >
                    <MenuItem value="pending">Pending Requests</MenuItem>
                    <MenuItem value="accepted">Accepted Requests</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container spacing={2}>
              {requestCards}
            </Grid>
          </div>
        </>
      );
    }