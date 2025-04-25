import React from "react";
import { Link } from "react-router-dom";
import Hospital2 from "../../assets/hospital2.webp"
import ClientList from "../components/clients/clientList";
import Dashboard from "../pages/dashboard";

const LandingPage = () => {
  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${Hospital2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textShadow: "1px 1px 4px black",
        }}
      ></div>
      <header>
        <h1>Health Information System</h1>
        <p>Manage clients and health programs with ease.</p>
      </header>

        <Dashboard />

      </div>
  );
};

export default LandingPage;
