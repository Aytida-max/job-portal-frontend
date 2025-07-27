import React, { useState } from "react";
import { Button } from "../button";
import { Search, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex flex-col gap-8 my-16 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="px-6 py-3 rounded-full glass border border-white/20 text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 text-blue-400" />
              Your Next Career Starts Here
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-white">The Right Role is Out There</span>
              <br />
              <span className="text-white">Find it Here</span>
              <br />
              <span className="gradient-text">Dream Job</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Connect with leading companies and discover thousands of opportunities 
              in tech, design, and beyond. Your perfect role is just a search away.
            </p>
          </div>

          {/* Search bar */}
          <div className="flex w-full max-w-2xl mx-auto">
            <div className="relative flex-1 glass border border-white/20 rounded-full overflow-hidden hover:border-white/40 transition-all duration-300">
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find Your Dream Job..."
                className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                onKeyPress={(e) => e.key === 'Enter' && searchjobHandler()}
              />
              <Button 
                onClick={searchjobHandler} 
                className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full p-3 glow hover:scale-105 transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-sm">10,000+ Jobs</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-sm">500+ Companies</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm">Fast Apply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
