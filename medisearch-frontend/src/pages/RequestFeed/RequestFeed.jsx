import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./RequestFeed.module.css";
import { abi, contractAddress } from "../../data/metamask";
import { ethers, utils } from "ethers";

export default function RequestFeed() {
  const requests = [
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
    {
      id: 1,
      age: 30,
      gender: "Male",
      symptoms: ["Fever", "Cough"],
      disease: ["Common Cold"],
    },
  ];

  const handleAcceptRequest = (acceptedRequest) => {
    // Implement the logic to accept the request
    console.log("Accepted request ID"`${acceptedRequest.id}`);
  };

  useEffect(() => {
    async function getReq() {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
          // const deseaseList =
          // console.log(Dlist.data.Diseases, "geted")
          const tx = await contract.getPending();
          // const responseFormat = ["uint256[]"];
          const array = tx.map((item) => item.toString());
          console.log(array);
          for (var i = 0; i < array.length; i++) {}
          // const tx1 = await contract.get();
        } catch (error) {
          alert("Error writing to contract: " + error.message);
        }
      } else {
        alert("MetaMask is not installed.");
      }
    }

    getReq();
  }, []);

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
