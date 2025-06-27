import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Avatar, AvatarImage } from "../avatar";
import { Badge } from "../badge";
import { Bookmark } from "lucide-react";

// A small helper function to calculate time since a date
const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

// 1. Accept the 'job' object as a prop
const Job = ({ job }) => {
  const navigate = useNavigate();

  // A safety check in case no job data is provided
  if (!job) {
    return null; 
  }

  // 2. Create variables from the job prop for clean and safe access
  const companyName = job.company?.name || "N/A";
  // Assuming a logo URL might be available on job.company.logo
  const companyLogo = job.company?.logo || "https://www.kindpng.com/picc/m/504-5047507_rcb-logo-royal-challengers-bangalore-png-royal-challengers.png";
  const location = job.location || "N/A";
  const title = job.title || "No Title";
  const description = job.description || "No description provided.";
  const position = job.position || "N/A";
  const salary = job.salary ? `${job.salary}LPA` : "Not Disclosed";
  const postedAt = job.createdAt ? timeSince(job.createdAt) : "Recently";

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {/* 3. Display dynamic "time ago" */}
          {postedAt}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            {/* 4. Display dynamic company logo */}
            <AvatarImage src={companyLogo} />
          </Avatar>
        </Button>
        <div>
          {/* 5. Display dynamic company name and location */}
          <h1 className="font-medium text-lg">{companyName}</h1>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      <div>
        {/* 6. Display dynamic job title and description */}
        <h1 className="font-bold text-lg my-2">{title}</h1>
        {/* Truncate long descriptions for a cleaner look */}
        <p className="text-sm text-gray-600">{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        {/* 7. Display dynamic badges */}
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {position}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {location}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => {
            // 8. Use the real job._id for navigation
            navigate(`/description/${job._id}`);
          }}
          className="font-bold rounded-sm"
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] hover:bg-[#5f079a]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;