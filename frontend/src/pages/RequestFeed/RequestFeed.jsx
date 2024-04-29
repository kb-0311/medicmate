import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./RequestFeed.module.css";
import axios from "axios";
import { backend_url } from "../../config";

export default function RequestFeed() {
  const [requests, setRequests] = useState([]);

  const handleAcceptRequest = (acceptedRequest) => {
    // console.log("Accepted request ID:", acceptedRequest.prescriptionId);
    // setSelectedRequest(acceptedRequest);
  };

  // useEffect(() => {
  //   async function getReq() {
  //     if (typeof window.ethereum !== "undefined") {
  //       // const provider = new ethers.BrowserProvider(window.ethereum);
  //       // const signer = await provider.getSigner();
  //       // const contract = new ethers.Contract(contractAddress, abi, signer);
  //       try {
  //         // const tx = await contract.getPending();
  //         // const array = tx.map((item) => item.toString());
  //         // // console.log(array)

  //         // const requests = [];

  //         // for (var i = 0; i < array.length; i++) {
  //         //   const index = parseInt(array[i], 10);
  //         //   const prescription = await contract.getPrescription(index);
  //         //   const arrayx = prescription.map((item) => item.toString());

  //         //   requests.push({
  //         //     prescriptionId: arrayx[0],
  //         //     operatorId: arrayx[2],
  //         //     symptoms: arrayx[5],
  //         //     disease: arrayx[6],
  //         //   });
  //         // }

  //         // setCards(requests.map((request) => (
  //         //   <Grid item xs={12} sm={6} md={4} lg={3} key={request.id}>
  //         //     <RequestCard request={request} onAccept={handleAcceptRequest} />
  //         //   </Grid>
  //         // )));
  //       } catch (error) {
  //         alert("Error writing to contract: " + error.message);
  //       }
  //     } else {
  //       alert("MetaMask is not installed.");
  //     }
  //   }

  //   // getReq();
  // }, []);

  useEffect(() => {
    async function getRequests() {
      try {
        const response = await axios.get(`${backend_url}/api/v1/request/all`, {
          withCredentials: true,
        });
        setRequests(response.data.pendingRequest);
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
          <h1>Request Feed</h1>
        </div>
        <Grid container spacing={2}>
          {requests.map((request) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={request._id}>
              <RequestCard
                prescriptionId={request._id}
                patientName={request.patientName}
                symptoms={request.symptoms}
                age={request.age}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
