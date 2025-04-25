import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data placeholders
  const totalClients = 125;
  const activePrograms = 3;
  const recentEnrollments = [
    { name: "Jane Doe", program: "HIV", date: "2025-04-23" },
    { name: "John Smith", program: "Malaria", date: "2025-04-24" },
  ];

  return (
    <div className="container">
      <h1>Welcome to the Health Information System</h1>

      {/* Summary Cards */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h4>Total Clients</h4>
          <p>{totalClients}</p>
        </div>
        <div className="dashboard-card">
          <h4>Active Programs</h4>
          <p>{activePrograms}</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/clients">View Clients</Link>
          </li>
          <li>
            <Link to="/programs">View Programs</Link>
          </li>
          <li>
            <Link to="/clients">Add New Client</Link>
          </li>
        </ul>
      </div>

      {/* Recent Enrollments */}
      <div className="card">
        <h2>Recent Enrollments</h2>
        <ul>
          {recentEnrollments.map((item, index) => (
            <li key={index}>
              {item.name} enrolled in {item.program} on {item.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
