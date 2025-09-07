import axios from 'axios';

// Get the backend URL from environment variables, with a fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://job-portal-backend-rewx.onrender.com";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // This is the magic line that sends cookies!
});

export default API;