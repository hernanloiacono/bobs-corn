#!/usr/bin/env bash
set -e

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo "❌.env not found. Ensure it is in the server project root."
  exit 1
fi

# Set password
export PGPASSWORD=$DB_PASSWORD

# Create the database if it does not exist
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" \
  | grep -q 1 || psql -h $DB_HOST -p $DB_PORT -U $DB_USER -c "CREATE DATABASE $DB_NAME"

# Run the table creation script
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f init_db.sql

echo "✅ Database '$DB_NAME' has been initialized."