// File: Frontend/src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: true,
  // Add other auth-related state if needed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    // You can add other actions like logoutUser, etc.
    // logoutUser: (state) => {
    //   state.user = null;
    // },
  },
});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
export const authSliceReducer  =  authSlice.reducer;