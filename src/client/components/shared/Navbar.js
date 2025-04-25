import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#0d3b66",
        padding: "10px 20px",
        marginBottom: "30px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/clients"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Manage Clients
          </Link>
        </li>
        <li>
          <Link
            to="/programs"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            View Programs
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
