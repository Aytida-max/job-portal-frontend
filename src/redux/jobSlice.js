import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  allAdminJobs: [], // This will hold
  singleJob: null, // This will hold the job details when a user clicks on a job
  searchJobByText: "",
  allAppliedJobs: [], // This will hold
  searchedQuery: "",
  selectedFilters: {
      location: "",
      jobType: "",
      experience: "",
      salary: "",
    },
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload; // Update state with fetched jobs
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload; // Update state with fetched job details
    },
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload; // Update state with fetched admin jobs
    },
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
    setFilters: (state, action) => {
        const { filterType, value } = action.payload;
        // The filterType should be lowercase to match the keys in selectedFilters
        state.selectedFilters[filterType] = value;
    },
    resetFilters: (state) => {
      state.selectedFilters = initialState.selectedFilters;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
  setFilters ,
  resetFilters,
} = jobSlice.actions;
export default jobSlice.reducer;