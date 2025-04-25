const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Database connection error:", err);
  } else {
    console.log("✅ Database connected at:", res.rows[0].now);
  }
});

// Add client to the database
app.post("/api/clients", async (req, res) => {
  const { name, age, gender, contact } = req.body;
  try {
    const newClient = await pool.query(
      "INSERT INTO clients (name, age, gender, contact) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, gender, contact]
    );
    res.status(201).json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all clients
app.get("/api/clients", async (req, res) => {
  try {
    const clients = await pool.query("SELECT * FROM clients");
    res.json(clients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get client profile and their programs
app.get("/api/clients/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.query("SELECT * FROM clients WHERE id = $1", [
      id,
    ]);
    if (client.rows.length === 0)
      return res.status(404).json({ message: "Client not found" });

    const clientPrograms = await pool.query(
      "SELECT p.name FROM programs p JOIN enrollments e ON p.id = e.program_id WHERE e.client_id = $1",
      [id]
    );

    res.json({ ...client.rows[0], programs: clientPrograms.rows });
  } catch (err) {
    console.error(err.message);
  }
});

// Get all programs
app.get("/api/programs", async (req, res) => {
  try {
    const programs = await pool.query("SELECT * FROM programs");
    res.json(programs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Enroll a client in a program
app.post("/api/enroll", async (req, res) => {
  const { clientId, programId } = req.body;
  try {
    const enrollment = await pool.query(
      "INSERT INTO enrollments (client_id, program_id) VALUES ($1, $2) RETURNING *",
      [clientId, programId]
    );
    res.status(201).json(enrollment.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
