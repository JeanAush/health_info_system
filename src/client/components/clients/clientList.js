import React from "react";

const ClientList = ({ clients }) => {
  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#333" }}>
        Client List
      </h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {clients.map((client) => (
          <li
            key={client.id}
            style={{
              backgroundColor: "#ffffff",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {client.name} - {client.gender}
            </span>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert("Edit Client")}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
