import { useState,useEffect } from "react";
import ClientForm from "../components/clients/clientForm";
import ClientList from "../components/clients/clientList";
import Patient from "../../assets/patient.webp"; 
import { getClients, addClient } from "../../services/api";

const Clients = () => {
  const [clients, setClients] = useState([]);

  // Fetch clients from the backend
  useEffect(() => {
    const fetchClients = async () => {
      const fetchedClients = await getClients();
      setClients(fetchedClients);
    };
    fetchClients();
  }, []);

  const handleRegister = async (clientData) => {
    const newClient = await addClient(clientData);
    if (newClient) {
      setClients((prevClients) => [...prevClients, newClient]);
    }
  };

  return (
    <div
      className="clients-container"
      style={{
        fontFamily: "Roboto, sans-serif",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Client Management
      </h1>

      {/* Client Registration Section */}
      <section
        className="client-registration"
        style={{
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "40px",
          backgroundImage: `url(${Patient})`, // Background image added here
          backgroundSize: "cover", // Makes sure the image covers the entire section
          backgroundPosition: "center", // Centers the background image
          color: "#fff", // Adjust text color for visibility on the image
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "20px",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Optional text shadow for better readability
          }}
        >
          Register a Client
        </h2>
        <ClientForm onSubmit={handleRegister} />
      </section>

      {/* Client List Section */}
      <section className="client-list">
        <h2 style={{ color: "#333", fontSize: "1.8rem", marginBottom: "20px" }}>
          Client List
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0", margin: "0" }}>
          {clients.map((client) => (
            <li
              key={client.id}
              style={{
                backgroundColor: "#ffffff",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background-color 0.3s ease-in-out",
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
                  transition: "background-color 0.3s ease-in-out",
                }}
                onClick={() => alert("Edit Client functionality")}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Clients;
