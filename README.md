# Loan Ingestion Project

This is a fullstack project with a React/Next.js frontend and a Node.js/Express/TypeScript/MongoDB backend.

## Project Structure

```text
LoanIngestion-main/
  backend/    # Express + TypeScript + MongoDB backend
  frontend/   # Next.js + React frontend
```

---

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas or local MongoDB instance

---

## Setup

### 1. Clone the repository

```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd LoanIngestion-main
```

### 2. Install dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

---

## Running the Project

### Backend

1. Configure your `.env` file in `backend/` (see `.env.example` or use your own MongoDB URI).
2. Start the backend server:

```sh
npm run dev
```

The backend will run on `http://localhost:5000` by default.

### Frontend

1. In a new terminal, go to the `frontend/` directory.
2. Start the frontend development server:

```sh
npm run dev
```

The frontend will run on `http://localhost:3000` by default.

---

## Scripts

### Backend

- `npm run dev` — Start backend in development mode (with hot reload)
- `npm start` — Start backend directly with ts-node
- `npm run build` — Compile TypeScript to JavaScript

### Frontend

- `npm run dev` — Start frontend in development mode
- `npm run build` — Build frontend for production
- `npm start` — Start frontend in production mode

---

## Deployment

- Build the backend and frontend before deploying.
- Set environment variables as needed for production.

---

## License

## Some picture of project UI 
![Screenshot 2025-07-01 232010](https://github.com/user-attachments/assets/7924c7c3-9e34-4c08-aa26-adeda08b62dc)
![Screenshot 2025-07-01 231614](https://github.com/user-attachments/assets/09069c37-d0a9-4526-847c-c633375f6d24)
