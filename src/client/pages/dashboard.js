import React from "react";
import { Link } from "react-router-dom";
import Hospital from "../../assets/hospital.avif"; // Import your local image

const Dashboard = () => {
  // Sample data placeholders
  const totalClients = 125;
  const activePrograms = 3;
  const recentEnrollments = [
    { name: "Jane Doe", program: "HIV", date: "2025-04-23" },
    { name: "John Smith", program: "Malaria", date: "2025-04-24" },
  ];

  return (
    <div className="container" style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Header Section with Background Image */}
      <div
        style={{
          backgroundImage: `url(${Hospital})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            paddingTop: "80px",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Welcome to the Health Information System
        </h1>
      </div>

      {/* Summary Cards */}
      <div
        className="dashboard-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          className="dashboard-card"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <h4 style={{ color: "#333" }}>Total Clients</h4>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{totalClients}</p>
        </div>
        <div
          className="dashboard-card"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <h4 style={{ color: "#333" }}>Active Programs</h4>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {activePrograms}
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div
        className="card"
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Quick Links</h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              to="/clients"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                transition: "color 0.3s ease-in-out",
              }}
            >
              View Clients
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link
              to="/programs"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                transition: "color 0.3s ease-in-out",
              }}
            >
              View Programs
            </Link>
          </li>
          <li>
            <Link
              to="/clients"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Add New Client
            </Link>
          </li>
        </ul>
      </div>

      {/* Recent Enrollments */}
      <div
        className="card"
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "15px" }}>
          Recent Enrollments
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {recentEnrollments.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <strong>{item.name}</strong> enrolled in {item.program} on{" "}
              {item.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
