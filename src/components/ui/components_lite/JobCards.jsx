import React from "react";
import { Badge } from "../badge";
import { useNavigate } from "react-router-dom";

// 1. Accept the 'job' object as a prop
const JobCards = ({ job }) => {
  // A safety check in case no job data is provided
  if (!job) {
    return null;
  }
  const navigate = useNavigate();
  // 2. Create variables from the job prop to make the code clean and safe
  const companyName = job.company?.name || "N/A";
  const location = job.location || "N/A";
  const title = job.title || "No Title";
  const description = job.description || "No description provided.";
  const salary = job.salary ? `${job.salary} LPA` : "Not Disclosed";
  const jobType = job.jobType || "N/A";

  return (
    <div  onClick={()=>navigate(`/description/${job._id}`)}   className="p-5 rounded-md shadow-lg bg-white border border-gray-100 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ">
      <div>
        {/* 3. Replace placeholders with real data */}
        <h1 className="text-lg font-medium">{companyName}</h1>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">{title}</h2>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-4 ">
        {/* Using the real data in the badges */}
        <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>
          {location}
        </Badge>
        <Badge className={"text-[#FA4F09] font-bold"} variant={"ghost"}>
          {salary}
        </Badge>
        <Badge className={"text-black font-bold"} variant={"ghost"}>
          {jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;