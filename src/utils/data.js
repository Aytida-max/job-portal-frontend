// export const USER_API_ENDPOINT = "http://localhost:5011/api/users"
// export const JOB_API_ENDPOINT  = "http://localhost:5011/api/job"
// export const APPLICATION_API_ENDPOINT = "http://localhost:5011/api/application"
// export const COMPANY_API_ENDPOINT = "http://localhost:5011/api/company"


// src/utils/data.js

// 1. Read the base URL from the Vercel environment variable.
// 2. If it's not found (i.e., when you run locally), it "falls back" to localhost.
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5011" || "https://job-portal-backend-rewx.onrender.com";

// 3. Construct the full endpoint URLs using the base URL.
export const USER_API_ENDPOINT = `${API_BASE_URL}/api/users`;
export const JOB_API_ENDPOINT = `${API_BASE_URL}/api/job`;
export const APPLICATION_API_ENDPOINT = `${API_BASE_URL}/api/application`;
export const COMPANY_API_ENDPOINT = `${API_BASE_URL}/api/company`;