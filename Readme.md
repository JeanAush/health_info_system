# Health Information System

## Overview

The Health Information System is a web application built with React for managing clients and health programs such as Tuberculosis (TB), Malaria, and HIV. It enables healthcare providers to enroll clients into health programs, manage their data, and track the progress of treatments. The system is designed to streamline health data management and improve healthcare services.

## Features

- **Client Management**: Enroll and manage clients in different health programs (TB, Malaria, HIV).
- **Health Programs**: Track client enrollment and progress in health programs.
- **Data Management**: Organize client health data in a centralized database for easy access and updates.
- **User-Friendly Interface**: Simple and intuitive UI built with React for quick and easy data management.
- **Backend API**: The backend is powered by Node.js with PostgreSQL for database management.

## Technologies Used

- **Frontend**: React, CSS (for styling)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Deployment**: Docker (for containerization), Docker Compose (for multi-container setups)
- **Web Server**: Nginx (for frontend deployment)

## Setup

### Prerequisites

1. Ensure that you have **Docker** and **Docker Compose** installed on your machine.
2. The project is split into a backend and frontend service, both of which need to be built and run via Docker.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/health_info_system.git
    cd health_info_system
    ```

2. Ensure that the `package.json` and `package-lock.json` files are in place for the backend and frontend.

3. Build and start the Docker containers using the following command:
    ```bash
    docker-compose up --build
    ```

4. After the containers are built and started, the application should be running. You can access the frontend in your browser by going to `http://localhost:3000`.

## Technology used
### Frontend:React
### Backend: Node.js & Express
### Database: PostgreSQL
### Docker
Docker is a platform that allows you to automate the deployment and scaling of applications using containerization.
### Nginx 
Nginx is used as a reverse proxy and web server in this project, mainly for serving the React frontend.

