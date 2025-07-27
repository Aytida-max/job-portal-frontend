import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import Job from "./Job";
import { Search, Briefcase, Loader2, AlertCircle } from "lucide-react";

const Browse = () => {
  useGetAllJobs();
  const { allJobs, loading, error } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="glass border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">
                  Search Results
                </h1>
                <p className="text-gray-400 mt-1">
                  Find your perfect job opportunity
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                <Briefcase className="h-4 w-4 text-blue-400" />
                <span className="text-white font-medium">
                  {allJobs.length} Jobs Found
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {loading ? (
            <div className="glass border border-white/20 rounded-2xl p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Searching for Jobs
                  </h3>
                  <p className="text-gray-400">
                    Please wait while we fetch the latest opportunities...
                  </p>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="glass border border-white/20 rounded-2xl p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <AlertCircle className="h-12 w-12 text-red-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Error Loading Jobs
                  </h3>
                  <p className="text-gray-400">
                    {error || "Something went wrong. Please try again later."}
                  </p>
                </div>
              </div>
            </div>
          ) : allJobs.length === 0 ? (
            <div className="glass border border-white/20 rounded-2xl p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <Search className="h-12 w-12 text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No Jobs Found
                  </h3>
                  <p className="text-gray-400">
                    Try adjusting your search criteria or browse all available jobs.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allJobs.map((job) => (
                <Job key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;