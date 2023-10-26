import React from "react";
import "./MediaCards.css";
import MediaSingleCard from "./MediaSingleCard";

const MediaCards = () => {
  return (
    <>
      <div className="mediacards-full">
        <h1 className="mediacards-heading">Why MediSearch ?</h1>
        <div className="mediacards-row">
          <MediaSingleCard
            title="24 Hours Service"
            link="https://img.freepik.com/premium-vector/24hr-service-vector-illustration_624938-729.jpg?w=2000"
            sub_title="MediSearch's 24/7 Service is a crucial aspect of our project, ensuring that healthcare assistance and information are accessible to users round the clock, improving healthcare access, reducing delays, and enhancing patient care in both urban and rural areas."
          />
          <MediaSingleCard
            title="Fine Tuned AI Engine"
            link="https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt98d8a946b63c9b5f/64b7170ab314c94aa481d8c3/Untitled_design_(1).jpg"
            sub_title="The Heart of MediSearch is LLAMA2-7B which essentially gives a list of most probable diseases to the doctor. It's core component responsible for accurately predicting diseases based on the symptoms provided by the patients. This AI engine has been specifically trained and fine-tuned to excel in the field of medical diagnosis."
          />
          <MediaSingleCard
            title="Express Diagnosis & Prescription Generation"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4lUwWRhyOfnAzr3b6AugPU9vIh73rbf-dA&usqp=CAU"
            sub_title="This combination of rapid, accurate diagnosis and tailored prescription generation not only enhances the overall healthcare experience but also helps reduce medical errors and ensures that patients receive the most appropriate treatment, contributing to improved healthcare outcomes."
          />
          <MediaSingleCard
            title="Time Saving for Doctors"
            link="https://cdn3.vectorstock.com/i/1000x1000/92/82/doctor-professional-with-clock-time-vector-24869282.jpg"
            sub_title="It significantly enhances the efficiency of doctors' daily workflows, allowing them to provide care to more patients than ever before. By utilizing advanced AI technology, our platform can save up to 60% or more of a doctor's time in the diagnosis and medical prescription generation process. This results in a nearly 2x increase in the speed and efficiency of their work."
          />
        </div>
      </div>
    </>
  );
};

export default MediaCards;
