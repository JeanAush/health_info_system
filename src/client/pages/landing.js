import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/dashboard"; 

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Health Information System</h1>
        <p>Manage clients and health programs with ease.</p>
      </header>

      <div>
        <h2>Welcome to the System</h2>
        <p>
          This is a platform for managing health programs (e.g., TB, Malaria,
          HIV) and client information.
        </p>

        <div>
          <Link to="/clients">Manage Clients</Link>
          <Link to="/programs">View Programs</Link>
        </div>

        <div>
          <h3>Dashboard</h3>
          <Dashboard /> 
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
