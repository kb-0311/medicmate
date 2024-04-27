import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header";
import MediaCards from "../components/MediaCard/MediaCards";
import Prefooter from "../components/Prefooter/Prefooter";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Header />
      <MediaCards />
      <Prefooter />
      <Footer />
    </div>
  );
};
