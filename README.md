# System Setup

This document provides instructions on how to set up and run the system.

## Running the System

To properly run the system, you need to start both the backend and the frontend as described below.

---

## Run Backend

Follow these steps to set up and start the backend:

1. Navigate to the backend directory:
   ```sh
   cd backend/calculatortobe/
2. Open a terminal and run the following command to install the dependencies:
   ```sh
   mvn clean install
3. To start the backend, run the following command:
   ```sh
   mvn spring-boot:run
This will run the backend on port 8081

## Run Frontend
Follow these steps to set up and start the frontend:

1. Navigate to the frontend directory:
   ```sh
   cd frontend/
2. Open a terminal and run the following command to install the dependencies:
   ```sh
   npm install
3. Navigate to the src directory:
   ```sh
   cd src/
4. To start the fronted, run the following command:
   ```sh
   py -m http.server 8000
This will run the backend on port 8000