/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const process = require('process');
const username = process.env.POSTGRES_USER || "vladfedyay";
const password = process.env.POSTGRES_PASSWORD || "pass";
const database = process.env.POSTGRES_DATABASE || "mydb";
const databaseHost = process.env.POSTGRES_HOST || 'localhost';
const databasePort = parseInt(process.env.POSTGRES_PORT, 10) || 5432;

module.exports = {
  "type": "postgres",
  "host": databaseHost,
  "port": databasePort,
  username,
  password,
  database,
  "synchronize": false,
  "dropSchema": false,
  "logging": true,
  "entities": [path.join(__dirname, "/src/entities/**/*.entity.ts"), path.join(__dirname, "/dist/src/entities/**/*.entity.js")],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts", "dist/**/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "migrations",
    "subscribersDir": "src/subscriber"
  }
}