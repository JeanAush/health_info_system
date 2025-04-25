import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

export const useClients = () => useContext(ClientContext);

// ClientProvider component that wraps the app with the context provider
export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  // Function to add a new client
  const addClient = (newClient) => {
    const id = Date.now(); // Generate a unique id for the client
    setClients([...clients, { ...newClient, id, programs:newClient.programs || [] }]); // Add the new client to the state
  };

  return (
    <ClientContext.Provider value={{ clients, addClient }}>
      {children} {/* Render children */}
    </ClientContext.Provider>
  );
};
