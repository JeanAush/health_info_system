import React, { useState } from "react";
import { useClients } from "../../context/clientContext";

const AddClientForm = () => {
  const { addClient } = useClients();
  const [client, setClient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(client);
    setClient({ name: "", age: "", gender: "", contact: "" }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={client.name}
        onChange={handleChange}
        placeholder="Client Name"
        required
      />
      <input
        type="number"
        name="age"
        value={client.age}
        onChange={handleChange}
        placeholder="Client Age"
        required
      />
      <input
        type="text"
        name="gender"
        value={client.gender}
        onChange={handleChange}
        placeholder="Gender"
        required
      />
      <input
        type="text"
        name="contact"
        value={client.contact}
        onChange={handleChange}
        placeholder="Contact Information"
        required
      />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default AddClientForm;
