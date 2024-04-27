import React from "react";
import "./UsageHeader.css";
// import { useNavigate } from "react-router-dom";

const UsageHeader = () => {
  //   const isButtonEnabled = true; // Set it to true or false based on your logic
  //   const navigate = useNavigate();

  //   const viewDiseases = () => {
  //     navigate("/disease-list");
  //   };

  return (
    <div>
      {/* <div className="workflow-heading">
        <h1 className="workflow-head">Overview</h1>
      </div> */}

      <div className="workflow-heading">
        <h1 className="workflow-head">Workflow Diagram</h1>
      </div>
      <div className="workflow-diagram">
        <img
          className="workflow-img"
          src="https://i.imgur.com/236wvwO.png"
          alt="workflow diagram"
        ></img>
      </div>
    </div>
  );
};

export default UsageHeader;
