// File: Jobs.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Filtercard from './FilterCard';
import Job from './Job'; // This component will display a single job card.
import { useDispatch, useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs'; // 1. Import the hook to fetch jobs
import { resetFilters, setSearchedQuery } from '@/redux/jobSlice';
import { Briefcase, Search, Filter, Loader2, AlertCircle, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold">
              <span className="gradient-text">Explore</span>
              <span className="text-white"> Jobs</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing opportunities from top companies worldwide
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Filters</h2>
              </div>
              <Filtercard />
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="flex-1">
            {/* Loading State */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                  <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
                </div>
                <p className="text-gray-300 text-lg">Loading amazing opportunities...</p>
              </div>
            ) : error ? (
              // Error State
              <div className="flex flex-col items-center justify-center py-16">
                <div className="p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4">
                  <AlertCircle className="h-8 w-8 text-red-400" />
                </div>
                <p className="text-red-400 text-lg mb-2">Oops! Something went wrong</p>
                <p className="text-gray-400 text-center max-w-md">{error}</p>
              </div>
            ) : allJobs && allJobs.length <= 0 ? (
              // No Jobs Found State
              <div className="flex flex-col items-center justify-center py-16">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                  <Search className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-gray-300 text-lg mb-2">No jobs found</p>
                <p className="text-gray-400 text-center max-w-md">
                  Try adjusting your filters or check back later for new opportunities
                </p>
              </div>
            ) : (
              // Jobs Grid
              <div className="space-y-6">
                {/* Results Count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">
                      {allJobs?.length} {allJobs?.length === 1 ? 'job' : 'jobs'} found
                    </span>
                  </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {allJobs?.map((job) => (
                    <Job key={job._id} job={job} />
                  ))}
                </div>

                {/* Load More Button (if needed) */}
                {allJobs && allJobs.length > 0 && (
                  <div className="text-center pt-8">
                    <button className="glass border border-white/20 px-8 py-3 rounded-lg text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                      Load More Jobs
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
