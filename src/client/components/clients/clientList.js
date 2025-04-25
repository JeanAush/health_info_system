import React, { useState, useEffect } from "react";

const ClientList = ({ searchQuery }) => {
  const [clients, setClients] = useState([
    { id: 1, name: "Jane Doe", program: "HIV" },
    { id: 2, name: "John Smith", program: "Malaria" },
    { id: 3, name: "Alice Johnson", program: "TB" },
  ]);

  const [filteredClients, setFilteredClients] = useState(clients);

  useEffect(() => {
    if (searchQuery) {
      setFilteredClients(
        clients.filter((client) =>
          client.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredClients(clients);
    }
  }, [searchQuery, clients]);

  return (
    <div>
      <h2>Client List</h2>
      <ul>
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <li key={client.id}>
              {client.name} - {client.program}
            </li>
          ))
        ) : (
          <li>No clients found</li>
        )}
      </ul>
    </div>
  );
};

export default ClientList;
