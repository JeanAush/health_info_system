import React from "react";

const Programs = () => {
  const programs = ["TB", "Malaria", "HIV"]; // List of available programs

  return (
    <div>
      <h2>Health Programs</h2>
      <ul>
        {programs.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
