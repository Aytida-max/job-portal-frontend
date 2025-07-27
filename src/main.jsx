// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your App.jsx
import './index.css'; // Your global styles (if you have them)
import { Toaster } from 'sonner';

// 1. Import Provider from react-redux
import { Provider } from 'react-redux';
// 2. Import your Redux store
import { store } from './redux/store'; // Make sure this path is correct

// Set dark mode by default
document.documentElement.classList.add('dark');

console.log("Current Vite Mode:", import.meta.env.MODE);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap your App component (and Toaster if it needs Redux access) with Provider */}
    <Provider store={store}>
      <App />
      <Toaster 
        position="top-right"
        theme="dark"
        richColors
        closeButton
      />
    </Provider>
  </React.StrictMode>
);