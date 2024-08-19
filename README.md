# Vizualizer

**Vizualizer** is a web application that visualizes sorting algorithms. The frontend is built using **React** and **Tailwind CSS**, while the backend is developed using **Go (Golang)**. The backend handles the sorting logic, and the frontend provides a step-by-step visualization of the sorting process.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- **Sorting Visualization**: Supports algorithms such as Quick Sort and Bubble Sort.
- **Adjustable Speed**: Control the speed of sorting visualization.
- **Step-by-Step Animation**: View the sorting process one step at a time.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Go (Golang)
- **Deployment**: Node.js for frontend, Go for backend

## Getting Started

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **Go** (v1.16 or higher): [Download Go](https://golang.org/dl/)

### Backend Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/aadarsharma/vizualizer.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd Vizualizer/backend
   ```

3. Initialize Go modules:

   ```bash
   go mod tidy
   ```

4. Run the Go server:

   ```bash
   go run cmd/server/main.go
   ```

The backend server will start on `http://localhost:8080`.

### Endpoints

- `POST /sort`: Receives an array and the sorting algorithm (`quick_sort` or `bubble_sort`) and returns the step-by-step sorting process.

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd Vizualizer/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`.

### Environment Variables

If you need to set environment variables (e.g., for API endpoints), create a `.env` file in the **frontend** directory with the following structure:

```
REACT_APP_API_URL=http://localhost:8080
```

## Running the Project

1. **Backend**: Ensure that the Go backend server is running on `http://localhost:8080`.
2. **Frontend**: Ensure that the React development server is running on `http://localhost:3000`.

You can now interact with the application by opening `http://localhost:3000` in your browser.
