// File: Jobs.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Filtercard from './FilterCard';
import Job from './Job'; // This component will display a single job card.
import { useDispatch, useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs'; // 1. Import the hook to fetch jobs
import { resetFilters, setSearchedQuery } from '@/redux/jobSlice';

const Jobs = () => {
  // 2. Call the hook to fetch jobs and get loading/error states.
  const { loading, error } = useGetAllJobs();

  // 3. Get the jobs from the Redux store.
  const { allJobs } = useSelector(store => store.job);


  const dispatch = useDispatch();


  useEffect(() => {
    // This 'return' function is the cleanup logic.
    // It runs ONLY when the component is about to unmount (e.g., you navigate to another page).
    return () => {
      dispatch(setSearchedQuery(""));
      dispatch(resetFilters({
        location: "",
        jobType: "",
        experience: "",
        salary: ""
      }));
    };
  }, [dispatch]); // The effect depends on the dispatch function

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <Filtercard />
          </div>

          <div className="flex-1">
            {/* 4. Add loading and error UI feedback */}
            {loading ? (
              <p className="text-gray-500 text-lg">Loading jobs...</p>
            ) : error ? (
              <p className="text-red-500 text-lg">Error: {error}</p>
            ) : allJobs && allJobs.length <= 0 ? (
              <span className="text-gray-500 text-lg">Jobs not Found.</span>
            ) : (
              <div className="h-[calc(100vh-10rem)] overflow-y-auto pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* 5. Map over the REAL allJobs array from Redux */}
                  {allJobs?.map((job) => (
                    // 6. Pass the unique key and the job data to the child component
                    <Job key={job._id} job={job} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
