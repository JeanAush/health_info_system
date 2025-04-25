import React, { useState, useEffect } from "react";
import Disease from "../../assets/disease2.webp";
import { getPrograms, enrollClient } from "../../services/api";

const Programs = () => {
  const [programs, setPrograms] = useState([]); // Initially empty, populated by the backend data
  const [newProgram, setNewProgram] = useState(""); // State to handle the input field

  // Fetch programs from the backend
  useEffect(() => {
    const fetchPrograms = async () => {
      const fetchedPrograms = await getPrograms();
      setPrograms(fetchedPrograms);
    };
    fetchPrograms();
  }, []);

  // Handle enrolling a client in a program
  const handleEnroll = async (clientId, programId) => {
    const enrollment = await enrollClient(clientId, programId);
    if (enrollment) {
      console.log("Successfully enrolled", enrollment);
    } else {
      console.error("Enrollment failed");
    }
  };

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

      {/* Program Input Section */}
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
            <span>{program}</span>
            <button
              onClick={() => handleEnroll(1, program)} // Assume client ID is 1 for now
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Enroll
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
