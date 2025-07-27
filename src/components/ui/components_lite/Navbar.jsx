// In src/components/ui/components_lite/Navbar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Keep useNavigate
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button"; // Keep if you plan to use it, otherwise remove
import { 
  User2, 
  LogOut, 
  Building2, 
  Briefcase, 
  Home, 
  Search, 
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const {user} = useSelector((store) => store.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`,{}, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <nav className="glass border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="gradient-text">Job</span>
              <span className="text-white">Portal</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex font-medium items-center gap-8">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link 
                    to={"/admin/companies"} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    <Building2 className="h-4 w-4" />
                    <span>Companies</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to={"/admin/jobs"} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Jobs</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    to={"/"} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to={"/Browse"} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    <Search className="h-4 w-4" />
                    <span>Browse</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to={"/Jobs"} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Jobs</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Auth Buttons / User Menu */}
        <div className="flex items-center gap-4">
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to={"/login"}>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white glow hover:scale-105 transition-all duration-300">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:scale-110 transition-transform duration-300 ring-2 ring-white/20 hover:ring-white/40">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || 'https://github.com/shadcn.png'}
                    alt={user?.fullname || "User Avatar"}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 mr-4 sm:mr-6 lg:mr-8 glass border-white/10">
                <div className="flex items-center gap-4 mb-4 p-2">
                  <Avatar className="cursor-pointer h-12 w-12 ring-2 ring-blue-500/30">
                    <AvatarImage
                      src={user?.profile?.profilePhoto || 'https://github.com/shadcn.png'}
                      alt={user?.fullname || "User Avatar"}
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white">{user?.fullname || "User Name"}</h3>
                    <p className="text-sm text-gray-400">
                      {user?.profile?.bio || "No bio available."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  {user && user.role === "Student" && (
                    <Link
                      to={"/Profile"}
                      className="flex w-full items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                    >
                      <User2 className="h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </Link>
                  )}
                  <div
                    onClick={logoutHandler}
                    className="flex w-full items-center gap-3 cursor-pointer hover:bg-red-500/20 p-3 rounded-lg transition-all duration-300 text-gray-300 hover:text-red-400"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Logout</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {user && user.role === "Recruiter" ? (
              <>
                <Link 
                  to={"/admin/companies"} 
                  className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building2 className="h-4 w-4" />
                  <span>Companies</span>
                </Link>
                <Link 
                  to={"/admin/jobs"} 
                  className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Jobs</span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to={"/"} 
                  className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link 
                  to={"/Browse"} 
                  className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search className="h-4 w-4" />
                  <span>Browse</span>
                </Link>
                <Link 
                  to={"/Jobs"} 
                  className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Jobs</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;