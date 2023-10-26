import React from "react";
import "./Prefooter.css";

const Prefooter = () => {
  return (
    <>
      <div className="prefooter-row">
        <div className="prefooter-col-left">
          <h1 className="prefooter-heading-left">
            Backed by Healtcare Practitioners
          </h1>
          <p className="prefooter-desc">
            The appreciation by doctors for "Medi-Search" underscores the
            project's commitment to enhancing patient care, reducing errors, and
            streamlining the healthcare process. The endorsement of medical
            professionals highlights our project's potential to revolutionize
            healthcare and contribute to a healthier, more informed society.
          </p>
        </div>
        <div className="prefooter-col-right">
          <img
            className="prefooter-img"
            src="https://i.imgur.com/H55Wqld.jpg"
            alt="IMG2"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Prefooter;
