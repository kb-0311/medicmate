# MedicMate: Generative AI powered Web Application for Clinical Diagnosis Assistance for Doctors

![MedicMate Logo](https://i.imgur.com/p0S57hP.png)

**MedicMate** is a Generative AI-powered web application designed to assist doctors with clinical diagnosis. This innovative solution integrates advanced AI models, real-time collaboration features, and seamless EHR integration to enhance the healthcare experience and improve diagnostic accuracy.


It aims to revolutionize healthcare delivery by integrating AI models into clinical practice, providing accurate diagnoses, and enhancing the efficiency of healthcare professionals. By fostering collaboration and leveraging data-driven insights, MedicMate is set to improve healthcare outcomes, especially in underserved rural areas. 

The project's innovative approach, combining AI technology with human expertise, ensures the reliability and accuracy of diagnostic recommendations, ultimately leading to better patient care.

## Features

### GenAI-powered Diagnosis
- Utilizes fine-tuned LLAMA 2-7B model.
- Analyzes patient symptoms to predict potential diseases.
- Provides disease predictions, treatment recommendations, and generates personalized prescriptions.

### Real-Time Collaboration
- Facilitates real-time peer-to-peer chat among healthcare professionals.
- Enables doctors to consult, suggest additional tests, and finalize treatment plans collectively.

### Integration with Electronic Health Records (EHR)
- Seamlessly integrates with existing EHR systems.
- Allows access to and updates patient medical histories, test results, and treatment plans within a unified platform.

### User-Friendly Interface
- Designed for ease of use by healthcare professionals.
- Simplifies patient information input and collaboration with medical staff.

## Technology Stack

### Frontend
- **React.js**
- **Redux**
- **Material-UI**
- **CSS**

### Backend
- **Node.js**
- **Express.js**
- **Redis**
- **MongoDB**

### AI Model and Containerization
- **LLAMA 2-7B**
- **Flask**
- **Hugging Face**
- **Docker**

## Running the Project

### Prerequisites
- Node.js
- Docker

### Steps to Run

1. **Clone the Repository**
    ```bash
    git clone https://github.com/kb-0311/medicmate.git
    ```

2. **Install Frontend Dependencies**
    ```bash
    cd medicmate/frontend
    npm install
    ```

3. **Install Backend Dependencies**
    ```bash
    cd ../backend
    npm install
    ```

4. **Setup Environment Variables**
    - Create a `.env` file in the `backend` directory to store your credentials.

5. **Start Docker Daemon**
    - Ensure Docker Desktop or Docker Daemon is running.

6. **Run Backend Server**
    ```bash
    cd backend
    docker compose up --build
    ```

7. **Run Frontend Server**
    ```bash
    cd ../frontend
    npm start
    ```

8. **Configuration for AI Model Endpoints**
    - Modify the `config.js` file in the frontend directory to update the AI model's tunnelled endpoints as needed.

If everything is set up correctly, MedicMate should run successfully on your local device.

## Contributors

- **Sushrut Lachure** ([Sushrut22](https://github.com/Sushrut22))
- **Kanishka Bansode** ([kb-0311](https://github.com/kb-0311))
- **Yash Harne** ([yashharne](https://github.com/yashharne))
- **Varshil Kavathiya** ([varshil27](https://github.com/varshil27))
- **Atharv Patil** ([atharv-patil](https://github.com/atharv-patil))
