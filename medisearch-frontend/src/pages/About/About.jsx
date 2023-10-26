import React from "react";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const UsagePage = () => {
  const navigate = useNavigate();
    
  return (
    <div className="page">
      <Navbar />

      <Footer />
    </div>
  );
};
