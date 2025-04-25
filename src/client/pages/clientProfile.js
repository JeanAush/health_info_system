import React from "react";
import { useParams } from "react-router-dom";
import { useClients } from "../context/clientContext";

const ClientProfile = () => {
  const { id } = useParams();
  const { clients } = useClients();

  const client = clients.find((c) => c.id === parseInt(id));

  if (!client) return <p>Client not found.</p>;

  return (
    <div>
      <h2>{client.name}'s Profile</h2>
      <p>Age: {client.age}</p>
      <p>Gender: {client.gender}</p>
      <p>Contact: {client.contact}</p>

      <h3>Enrolled Programs:</h3>
      <ul>
        {client.programs && client.programs.length > 0 ? (
          client.programs.map((program, i) => <li key={i}>{program}</li>)
        ) : (
          <p>Not enrolled in any program</p>
        )}
      </ul>
    </div>
  );
};

export default ClientProfile;
