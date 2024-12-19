# Simple Calculator App

This project is a basic web application with one main **goal**:

- **AWS EC2**: The entire aplication was deployed in an EC2 instance.
- **EC2 Server && NGINX proxy**: The server is also deployed in the EC2 instance having used NGINX as a proxy for the simple request.

The backend server was implemented to test server deployment on AWS EC2.

Two main **features**:

- **Normal Calculator**: A standard calculator built using React on the frontend.
- **BMI Calculator**: A Body Mass Index (BMI) calculator that communicates with a backend server to compute BMI values.


---

## Features

### **Normal Calculator**
- Built entirely with React.
- Performs basic arithmetic operations: 
  - Addition
  - Subtraction
  - Multiplication
  - Division

### **BMI Calculator**
- Allows users to input height (in cm) and weight (in kg).
- Sends a POST request to the backend to calculate BMI.
- Displays the calculated BMI on the interface.

---

## Backend Server

- **Framework**: Express.js
- **Route**: `/calculate-bmi`
- **Method**: POST
- **Request**: JSON containing:
  - `height` (in cm)
  - `weight` (in kg)
- **Response**: JSON with the calculated BMI, rounded to 2 decimal places.

---

## Live Demo

The app is hosted on an AWS EC2 instance. Access it here:

[http://18.175.131.160/](http://18.175.131.160/)

---

## How It Works

### **Normal Calculator**
1. Navigate to the calculator section.
2. Input numbers and select operations.
3. The result is displayed immediately—no server interaction is required.

### **BMI Calculator**
1. Navigate to the BMI calculator section.
2. Enter height and weight in the respective input fields.
3. Click the "Calculate BMI" button.
4. The app sends data to the server for processing.
5. The server returns the BMI, which is displayed on the page.

---

## Technologies Used

### **Frontend**
- React.js
- HTML, CSS, JavaScript

### **Backend**
- Node.js
- Express.js

### **Hosting**
- AWS EC2 instance
- Nginx as a reverse proxy

---

## Local Setup Instructions

### **Prerequisites**
- Node.js and npm installed
- Git installed

### **Frontend Setup**
1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd calculator-app/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npm start
    ```

### **Backend Setup**
1. Navigate to the backend directory:
    ```bash
    cd calculator-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```

The backend will run on [http://localhost:8080](http://localhost:8080).

---

## Access Locally
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:8080/calculate-bmi](http://localhost:8080/calculate-bmi)

---

## Future Improvements
- Add advanced calculator features, e.g., scientific functions.
- Improve the UI/UX design.
