const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Replace with your database username
  host: "localhost",
  database: "health_system", // Replace with your DB name
  password: "Esther.13", // Replace with your database password
  port: 5432,
});

module.exports = pool;
