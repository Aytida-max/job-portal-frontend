import axios from 'axios';

// Get the backend URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  // This is the corrected line
  baseURL: `${API_BASE_URL}/api`, 
  withCredentials: true,
});

export default API;