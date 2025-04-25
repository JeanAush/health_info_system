// src/client/components/ClientList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useClients } from "../../context/clientContext";

const ClientList = () => {
  const { clients } = useClients();

  if (!clients.length) return <p>No clients registered yet.</p>;

  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          <strong>{client.name}</strong> – {client.gender}, {client.age} yrs
          <Link to={`/clients/${client.id}`}> View Profile</Link>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
