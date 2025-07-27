import React, { useState } from "react";
import { Badge } from "../badge";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  ArrowRight, 
  Bookmark, 
  Calendar,
  Star,
  Users,
  TrendingUp,
  Sparkles,
  Zap
} from "lucide-react";

// Helper function to calculate time since posting
const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m ago";
  return Math.floor(seconds) + "s ago";
};

// Helper function to get random company rating
const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

// Helper function to get random applicants
const getRandomApplicants = () => Math.floor(Math.random() * 50) + 5;

const JobCards = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // A safety check in case no job data is provided
  if (!job) {
    return null;
  }
  
  const navigate = useNavigate();
  
  // Create variables from the job prop to make the code clean and safe
  const companyName = job.company?.name || "N/A";
  const location = job.location || "N/A";
  const title = job.title || "No Title";
  const description = job.description || "No description provided.";
  const salary = job.salary ? `${job.salary} LPA` : "Not Disclosed";
  const jobType = job.jobType || "N/A";
  const postedAt = job.createdAt ? timeSince(job.createdAt) : "Recently";
  const companyRating = getRandomRating();
  const applicants = getRandomApplicants();
  const isUrgent = Math.random() > 0.7; // 30% chance of being urgent
  const isRemote = location.toLowerCase().includes('remote');

  return (
    <div 
      onClick={() => navigate(`/description/${job._id}`)}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer h-full"
    >
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Main card container - Fixed height for consistency */}
      <div className="relative glass border border-white/10 p-6 rounded-2xl hover-lift transition-all duration-500 overflow-hidden h-full flex flex-col">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Inner content with backdrop blur - Flex container */}
        <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/5 flex flex-col h-full">
          {/* Header section with company info and actions */}
          <div className="flex items-start justify-between mb-4 flex-shrink-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Company logo with animated gradient */}
              <div className="relative flex-shrink-0">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                }`}>
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                  {companyName}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{location}</span>
                  {isRemote && (
                    <Badge variant="success" className="text-xs px-2 py-0.5 flex-shrink-0">
                      Remote
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
              {/* Bookmark button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBookmarked(!isBookmarked);
                }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-white/10 text-gray-400 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Bookmark className={`h-4 w-4 transition-all duration-300 ${
                  isBookmarked ? 'fill-current' : ''
                }`} />
              </button>
              
              {/* Arrow button */}
              <div className="p-2 rounded-lg bg-white/10 border border-white/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Job title with urgency indicator */}
          <div className="mb-3 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-bold text-xl text-white group-hover:text-blue-200 transition-colors duration-300 truncate flex-1">
                {title}
              </h2>
              {isUrgent && (
                <div className="flex items-center gap-1 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full flex-shrink-0">
                  <Zap className="h-3 w-3 text-red-400" />
                  <span className="text-xs text-red-400 font-medium">Urgent</span>
                </div>
              )}
            </div>
            
            {/* Company rating and applicants */}
            <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-medium">{companyRating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{applicants} applicants</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{postedAt}</span>
              </div>
            </div>
      </div>

          {/* Description with gradient text effect - Fixed height */}
          <div className="mb-6 flex-1 min-h-0">
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 h-16">
              {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>
      </div>

          {/* Advanced badges with icons and animations - Fixed height */}
          <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0 h-8">
            <Badge 
              className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-105 h-6" 
              variant="outline"
            >
              <MapPin className="h-3 w-3 mr-1" />
              <span className="truncate max-w-20">{location}</span>
        </Badge>
            <Badge 
              className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-all duration-300 group-hover:scale-105 h-6" 
              variant="outline"
            >
              <DollarSign className="h-3 w-3 mr-1" />
              <span className="truncate max-w-20">{salary}</span>
        </Badge>
            <Badge 
              className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-105 h-6" 
              variant="outline"
            >
              <Clock className="h-3 w-3 mr-1" />
              <span className="truncate max-w-20">{jobType}</span>
        </Badge>
          </div>

          {/* Bottom section with trending indicator - Fixed at bottom */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-shrink-0 mt-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 flex-shrink-0">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-medium">Trending</span>
            </div>
            
            {/* Quick apply button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/description/${job._id}`);
              }}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 glow flex-shrink-0"
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Quick Apply</span>
              <span className="sm:hidden">Apply</span>
            </button>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;