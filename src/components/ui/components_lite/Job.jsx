import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Avatar, AvatarImage } from "../avatar";
import { Badge } from "../badge";
import { Bookmark, MapPin, DollarSign, Clock, Building2, ArrowRight, Calendar } from "lucide-react";

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
  const companyLogo = job.company?.logo || "https://www.kindpng.com/picc/m/504-5047507_rcb-logo-royal-challengers-bangalore-png-royal-challengers.png";
  const location = job.location || "N/A";
  const title = job.title || "No Title";
  const description = job.description || "No description provided.";
  const position = job.position || "N/A";
  const salary = job.salary ? `${job.salary}LPA` : "Not Disclosed";
  const postedAt = job.createdAt ? timeSince(job.createdAt) : "Recently";

  return (
    <div className="glass border border-white/10 p-6 rounded-xl cursor-pointer hover-lift group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header with time and bookmark */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{postedAt}</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        {/* Company Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Avatar className="h-8 w-8">
              <AvatarImage src={companyLogo} alt={companyName} />
            </Avatar>
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
              {companyName}
            </h3>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Job Title and Description */}
        <div className="mb-4">
          <h2 className="font-bold text-xl mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description.length > 120 ? `${description.substring(0, 120)}...` : description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge 
            className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300" 
            variant="outline"
          >
            <Building2 className="h-3 w-3 mr-1" />
            {position}
          </Badge>
          <Badge 
            className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-colors duration-300" 
            variant="outline"
          >
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </Badge>
          <Badge 
            className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300" 
            variant="outline"
          >
            <DollarSign className="h-3 w-3 mr-1" />
            {salary}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/description/${job._id}`);
            }}
            variant="outline"
            className="flex-1 group-hover:border-blue-400 group-hover:text-blue-400 transition-all duration-300"
          >
            <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            View Details
          </Button>
          <Button 
            variant="gradient"
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Save Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;