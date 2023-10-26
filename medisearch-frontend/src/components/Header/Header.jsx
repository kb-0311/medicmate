import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const startDiagnosis = () => {
    navigate("/diagnosis");
  };
  const usageGuide = () => {
    navigate("/usage");
  };

  return (
    <div className="holder">
      <header className="header">
        <div className="header-row">
          <div className="header-row-left-column">
            <h1 className="header-row-left-column-head">
              AI-based Medical Assistant
            </h1>
            <div className="header-row-left-column-desc">
              <p>
                In a world where data-driven decision-making is transforming
                industries, healthcare remains ripe for innovation. "MediSearch"
                is a groundbreaking project aimed at revolutionizing healthcare
                by harnessing the power of Machine Learning and Generative AI.
                We understand that every individual's health needs are unique,
                and our mission is to provide personalized medicine
                recommendations for various diseases, ensuring the most
                effective treatments for all.
              </p>
              <div className="header-row-left-column-desc-buttons">
                <button
                  type="button"
                  className="usage-guide-button"
                  onClick={usageGuide}
                >
                  Overview & Workflow
                </button>
                <button
                  type="button"
                  className="start-diagnosis-button"
                  onClick={startDiagnosis}
                >
                  Start Diagnosis
                </button>
              </div>
            </div>
          </div>
          <div className="header-row-right-column">
            <img
              className="phone-img"
              src="https://i.imgur.com/a8MM9fw.png"
              alt="loda"
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
