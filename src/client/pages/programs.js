import React, { useState } from "react";
import Disease from "../../assets/disease2.webp";

const Programs = () => {
  const [programs, setPrograms] = useState(["TB", "Malaria", "HIV"]); // List of available programs
  const [newProgram, setNewProgram] = useState(""); // State to handle the input field

  const handleInputChange = (e) => {
    setNewProgram(e.target.value); // Update input field state
  };

  const handleAddProgram = () => {
    if (newProgram.trim() !== "") {
      setPrograms([...programs, newProgram]); // Add new program to the list
      setNewProgram(""); // Clear the input field
    } else {
      alert("Please enter a valid program name.");
    }
  };

  return (
    <div
      className="programs-container"
      style={{
        fontFamily: "Roboto, sans-serif",
        padding: "20px",
        backgroundColor: "#f4f4f9",
      }}
    >
      <h2
        style={{
          color: "#333",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Health Programs
      </h2>

      {/* Input and Button for Adding New Program */}
      <div
        className="add-program"
        style={{
          marginBottom: "30px",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "20px",
          backgroundImage: `url(${Disease})`,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          value={newProgram}
          onChange={handleInputChange}
          placeholder="Enter a new program"
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "300px",
          }}
        />
        <button
          onClick={handleAddProgram}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          Add Program
        </button>
      </div>

      {/* List of Programs */}
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {programs.map((program, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#ffffff",
              padding: "12px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "15px",
              width: "300px",
              textAlign: "center",
            }}
          >
            {program}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
