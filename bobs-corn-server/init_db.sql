-- Drop the clients table if it already exists
DROP TABLE IF EXISTS clients;

-- Create the clients table with an ip column
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  ip TEXT UNIQUE NOT NULL,
  last_purchase TIMESTAMP
);

-- Recreate indexes
CREATE INDEX IF NOT EXISTS idx_clients_ip ON clients(ip);
CREATE INDEX IF NOT EXISTS idx_clients_id ON clients(id);