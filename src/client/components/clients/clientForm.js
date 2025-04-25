import React, { useState } from "react";

const ClientForm = ({ onSubmit }) => {
  const [client, setClient] = useState({
    name: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(client);
    setClient({ name: "", gender: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div style={inputGroupStyles}>
        <label htmlFor="name" style={labelStyles}>
          Client Name
        </label>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleInputChange}
          placeholder="Enter Client Name"
          style={inputStyles}
          required
        />
      </div>

      <div style={inputGroupStyles}>
        <label htmlFor="gender" style={labelStyles}>
          Gender
        </label>
        <select
          name="gender"
          value={client.gender}
          onChange={handleInputChange}
          style={selectStyles}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <button type="submit" style={buttonStyles}>
        Register Client
      </button>
    </form>
  );
};

// Styling for the form elements
const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "#f9f9f9",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
};

const inputGroupStyles = {
  display: "flex",
  flexDirection: "column",
};

const labelStyles = {
  marginBottom: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#333",
};

const inputStyles = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ddd",
  outline: "none",
  width: "100%",
  marginBottom: "15px",
};

const selectStyles = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ddd",
  outline: "none",
  width: "100%",
};

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "12px 20px",
  fontSize: "1.2rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",
};

export default ClientForm;
