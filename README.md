# Bob’s Corn 🌽

A simple rate-limited corn-selling API with a client interface.

## Instructions

1. Clone the repository.
2. Create Databese:
   - `cd bobs-corn-server`
   - `chmod +x setup_db.sh`
   - `./setup_db.sh`
3. Navigate to each directory and install dependencies:
   - `cd bobs-corn-server && npm install`
   - `cd ../bobs-corn-client && npm install`
4. Set up the environment variables:
   - `cp bobs-corn-server/.env.example bobs-corn-server/.env`
   - `cp bobs-corn-client/.env.example bobs-corn-client/.env`
   Fill in the appropriate values in each .env file if needed (e.g password, port, url).
5. Start the backend:
   - `cd bobs-corn-server && npm run dev`
6. Start the frontend:
   - `cd ../bobs-corn-client && npm run dev`
7. Open your browser and go to `http://localhost:5173`.

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
- Clients see if they successfully purchased or if they have to wait.

## Optional Features Implemented

- IP-based client identification.
- Reusable and clean folder structure (Domain-Driven Design).
- Visual feedback on purchase attempts.