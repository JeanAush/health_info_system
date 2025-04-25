import { useState } from "react";
import ClientForm from "../components/clients/clientForm";
import ClientList from "../components/clients/clientList";

const Clients = () => {
   const[clients, setClients] = useState([]);

   const handleRegister = (newClient) =>{
    const id =Date.now();
    setClients([...clients, {...newClient, id}]);
   };

   return (
     <div>
       <h1>Client Management</h1>
       <h2>Register a Client</h2>
       <ClientForm onSubmit={handleRegister} />
       <ul>
         {clients.map((client) => (
           <li key={client.id}>
             {client.name} - {client.gender}
           </li>
         ))}
       </ul>
       <h2>Client List</h2>
       <ClientList clients={clients} />
     </div>
   );
};

export default Clients;