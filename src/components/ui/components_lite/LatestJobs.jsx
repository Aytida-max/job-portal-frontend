import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { TrendingUp, Sparkles } from "lucide-react";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.job?.allJobs || []); // Safely access allJobs

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-5xl font-bold">
            <span className="gradient-text">Latest & Top</span>
            <span className="text-white"> Job Openings</span>
          </h2>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the most recent opportunities from top companies worldwide
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allJobs.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
                <Sparkles className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-gray-400 text-lg">No Jobs Available</span>
              <p className="text-gray-500">Check back later for new opportunities</p>
            </div>
          </div>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
                <JobCards key={job._id} job={job}></JobCards>
              ) : (
                <div key={Math.random()} className="glass border border-white/10 p-6 rounded-lg text-center">
                  <span className="text-gray-400">Invalid Job Data</span>
                </div>
              )
            )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;