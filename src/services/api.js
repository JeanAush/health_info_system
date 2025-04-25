import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Get all clients
export const getClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/clients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients", error);
    throw error;
  }
};

// Add new client
export const addClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL}/clients`, clientData);
    return response.data;
  } catch (error) {
    console.error("Error adding client", error);
    throw error;
  }
};

// Get a specific client's profile and programs
export const getClientProfile = async (clientId) => {
  try {
    const response = await axios.get(`${API_URL}/clients/${clientId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching client profile", error);
    throw error;
  }
};

// Get all programs
export const getPrograms = async () => {
  try {
    const response = await axios.get(`${API_URL}/programs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching programs", error);
    throw error;
  }
};

// Enroll a client in a program
export const enrollClient = async (clientId, programId) => {
  try {
    const response = await axios.post(`${API_URL}/enroll`, {
      clientId,
      programId,
    });
    return response.data;
  } catch (error) {
    console.error("Error enrolling client", error);
    throw error;
  }
};
