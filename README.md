<!--![Replit logo](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/220px-New_Replit_Logo.svg.png)-->

# MediSearch: AI-Based Medical Assistant with Blockchain Integration

![MediSearch Logo](https://i.imgur.com/tQLXK20.png)

MediSearch is an innovative healthcare solution developed by "Cure Code Crew." This web application leverages the power of AI and blockchain technology to provide medical assistance in underserved regions, particularly rural areas with limited access to healthcare facilities. It aims to bridge the healthcare gap by enabling remote symptom assessment, disease prediction, prescription generation, and maintaining transparent healthcare records using blockchain.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Collaborators](#project-collaborators)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contribution Guidelines](#contribution-guidelines)
- [Project Collaborators](#project-collaborators)

## Introduction

MediSearch is designed to assist three primary types of users:

1. *Doctors*: Healthcare professionals who diagnose and prescribe treatment.
2. *Rural Healthcare Operators*: Local volunteers who gather patient information in rural areas.
3. *Pharmacy*: Users who receive prescriptions and provide medications to patients.

The workflow involves Rural Healthcare Operators collecting patient data, which is then processed by a Large Language Model (LLAMA2-7B) and a Blockchain Smart Contract. The AI model predicts probable diseases based on the patient's symptoms and history. The doctor can then select the correct disease from the list of predictions, customize the prescription, and finalize the prescription. All information regarding the disease and prescribed medicines is stored on the blockchain for transparency.

## Features

- *Remote Healthcare Assessment*: Enables rural healthcare operators to collect patient data in areas with limited healthcare access.
- *Disease Prediction*: Utilizes AI to predict probable diseases based on patient symptoms and history.
- *Customizable Prescriptions*: Doctors can customize prescriptions based on their expertise.
- *Blockchain Integration*: Maintains a transparent record of disease diagnoses and prescribed medications.
- *User Authentication*: Ensures only authorized individuals can access and edit patient data.
- *Easy-to-Use Interface*: A user-friendly web application built with ReactJS and Material UI.

## Tech Stack

MediSearch is built with the following technologies:

- *Frontend*:
  - ReactJS
  - Redux
  - Material UI
  - CoreUI

- *Backend*:
  - Python (API tunnel)
  - Large Language Model (LLAMA2-7B)

- *Blockchain*:
  - Solidity
  - EtherJS
  - MetaMask

## Powered By

![MediSearch Demo](https://assets.devfolio.co/company/24e5677d6dee43868247d75fa77e4628/assets/favicon.png)

## Getting Started

To get started with MediSearch, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies for the frontend and backend.
3. Set up the blockchain infrastructure and connect MetaMask.
4. Configure the Large Language Model (LLAMA2-7B) for AI-based diagnosis.
5. Run the application locally or deploy it to a web server.

Detailed instructions can be found in the project's [Getting Started Guide](/docs/getting-started.md).

## Usage

1. Register or log in as a doctor, rural healthcare operator, or pharmacy user.
2. Rural healthcare operators collect patient information and submit it.
3. The AI model predicts probable diseases.
4. Doctors select the correct disease and customize the prescription.
5. Generate the final prescription, which is recorded on the blockchain.

For a more detailed guide on using MediSearch, please refer to the [User Manual](/docs/user-manual.md).

## How It Works

![MediSearch Workflow](/path/to/your/workflow.png)

1. *Data Collection*: Rural healthcare operators collect patient data.
2. *AI-Based Diagnosis*: AI model processes symptoms and history to predict diseases.
3. *Doctor's Review*: Doctors review and select the correct disease.
4. *Prescription Customization*: Doctors customize prescriptions as needed.
5. *Blockchain Record*: Disease and medication information is recorded on the blockchain for transparency.

## Video Demonstration and screenshots

Watch MediSearch in action in our video demonstration: [MediSearch Demo](https://www.youtube.com/watch?v=G9tcq9y0dK8)

- Screenshots
![HomePage](https://i.imgur.com/6SEXLXB.jpg)
![InputPage](https://i.imgur.com/HOHIY6I.jpg)
![PatientDetails](https://i.imgur.com/t7Lq0rq.png)
![DiseasePredictionResult](https://i.imgur.com/A1dpID2.png)
![DoctorsFeed](https://i.imgur.com/b4byHXO.jpg)
![PrescriptionEdit](https://i.imgur.com/bBn27R9.jpg)
![PolygonBlockchainPortal](https://i.imgur.com/cbKKW4L.jpg)

## Contribution Guidelines

Contributions to MediSearch are Welcome! If you encounter any issues or have ideas for improvements, feel free to submit a pull request or open an issue in the repository.

## Project Collaborators

- Sushrut Lachure ([@Sushrut22](https://github.com/Sushrut22))
- Varshil Kavathiya ([@varshil27](https://github.com/varshil27))
- Vishal Singh Tanwar ([@V22X4](https://github.com/V22X4))
