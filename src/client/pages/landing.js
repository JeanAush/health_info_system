import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const LandingPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <header
        style={{
          backgroundColor: "#0d3b66",
          color: "white",
          padding: "40px",
          marginBottom: "30px",
        }}
      >
        <h1>Health Information System</h1>
        <p>Manage clients and health programs with ease.</p>
      </header>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#005f73" }}>
            Welcome to the System
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#333" }}>
            This is a platform for managing health programs (e.g., TB, Malaria,
            HIV) and client information.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#005f73", marginBottom: "20px" }}>
            Quick Links
          </h3>
          <div>
            <Link
              to="/clients"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "5px",
                margin: "10px",
                textDecoration: "none",
              }}
            >
              Manage Clients
            </Link>
            <Link
              to="/programs"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "5px",
                margin: "10px",
                textDecoration: "none",
              }}
            >
              View Programs
            </Link>
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "40px",
          }}
        >
          <h3 style={{ color: "#005f73", marginBottom: "20px" }}>Dashboard</h3>
          <Dashboard />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
