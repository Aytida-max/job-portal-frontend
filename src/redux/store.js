// // File: Frontend/src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Import the reducer from authSlice
// import jobSlice from "./jobSlice";
// import { companySlice } from './companySlice';
// import companyReducer from './companySlice';
// import applicationSlice from "./applicationSlice";


// export const store = configureStore({
//   reducer: {
//     auth: authReducer, // 'auth' will be the key for this slice in your Redux state
//     // If you add more slices later, import their reducers and add them here
//     // e.g., posts: postsReducer,
//     job: jobSlice,
//     company: companyReducer,
//     application: applicationSlice,

//   },
// });


// File: Frontend/src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';

// Import the default export (the reducer) from each slice file
import authReducer from './authSlice'; 
import jobReducer from "./jobSlice";
import companyReducer from './companySlice';
import applicationReducer from "./applicationSlice";

export const store = configureStore({
  // The reducer object tells Redux how to manage each piece of state
  reducer: {
    auth: authReducer,
    job: jobReducer,
    company: companyReducer,
    application: applicationReducer,
  },
});