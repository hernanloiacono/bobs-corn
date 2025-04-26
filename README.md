# Bob’s Corn 🌽

A simple rate-limited corn-selling API with a client interface.

## Instructions

1. Clone the repository.
2. Navigate to each directory and install dependencies:
   - `cd bobs-corn-server && npm install`
   - `cd ../bobs-corn-client && npm install`
3. Start the backend:
   - `cd bobs-corn-server && npm run dev`
4. Start the frontend:
   - `cd ../bobs-corn-client && npm run dev`
5. Open your browser and go to `http://localhost:5173`.

## Technologies Used

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- ts-node-dev

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS

## Application Flow

- Clients can "buy" corn via a button in the UI.
- Backend enforces a rate limit: 1 corn per client per minute.
- Clients see how many corns they've successfully purchased.

## Optional Features Implemented

- IP-based client identification.
- Reusable and clean folder structure (Domain-Driven Design).
- Visual feedback on purchase attempts.