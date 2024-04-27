import React from "react";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UsageHeader from "../components/UsageHeader/UsageHeader";

export const UsagePage = () => {
  return (
    <div className="page">
      <Navbar />
      <UsageHeader />
      <Footer />
    </div>
  );
};
