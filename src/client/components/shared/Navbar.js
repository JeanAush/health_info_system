import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Call the parent function to update the search state
  };

  return (
    <nav style={{ backgroundColor: "#0d3b66", padding: "15px 20px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ marginRight: "30px" }}>
          <Link
            to="/"
            style={{
              color: "Grey",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginRight: "30px" }}>
          <Link
            to="/clients"
            style={{
              color: "Grey",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            Manage Clients
          </Link>
        </li>
        <li>
          <Link
            to="/programs"
            style={{
              color: "Grey",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            View Programs
          </Link>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search Clients"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: "8px 12px",
              marginLeft: "20px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              width: "200px",
            }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
