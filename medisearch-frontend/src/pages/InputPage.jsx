import React from "react";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import InputHeader from "../components/InputHeader/InputHeader";
import Footer from "../components/Footer/Footer";

export const InputPage = () => {
  return (
    <div className="page">
      <Navbar />
      <InputHeader />
      <Footer />
    </div>
  );
};
