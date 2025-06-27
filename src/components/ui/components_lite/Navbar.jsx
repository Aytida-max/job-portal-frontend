// In src/components/ui/components_lite/Navbar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Keep useNavigate
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button"; // Keep if you plan to use it, otherwise remove
import { User2, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  // Simulate a logged-in user:
//   const user = {
//     role: "Student", // Or "Recruiter" to test that view
//     fullname: "Demo User",
//     profile: {
//       profilePhoto: "https://github.com/shadcn.png", // Default Shadcn avatar
//       bio: "This is a test bio.",
//     },
//   };
   const {user} = useSelector((store) => store.auth); // To switch back to logged-out view

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
    <div className="bg-white border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#6B3AC2]"> Job </span>
            <span className="text-[#21130d]">Portal</span>
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to={"/admin/companies"} className="hover:text-[#6B3AC2] transition-colors">Companies</Link>
                </li>
                <li>
                  <Link to={"/admin/jobs"} className="hover:text-[#6B3AC2] transition-colors">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/"} className="hover:text-[#6B3AC2] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to={"/Browse"} className="hover:text-[#6B3AC2] transition-colors">Browse</Link>
                </li>
                <li>
                  <Link to={"/Jobs"} className="hover:text-[#6B3AC2] transition-colors">Jobs</Link>
                </li>
                
              </>
            )}
          </ul>
          {!user ? (
            <div className=" flex items-center gap-2">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || 'https://github.com/shadcn.png'}
                    alt={user?.fullname || "User Avatar"}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 mr-4 sm:mr-6 lg:mr-8">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="cursor-pointer h-12 w-12">
                    <AvatarImage
                      src={user?.profile?.profilePhoto || 'https://github.com/shadcn.png'}
                      alt={user?.fullname || "User Avatar"}
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname || "User Name"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio || "No bio available."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-gray-600">
                  <>
                  {user && user.role === "Student" && ( // This will show if user.role is "Student"
                    <Link
                      to={"/Profile"} // This link will work if you have a /Profile route
                      className="flex w-full items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    >
                      <User2 className="h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </Link>
                  )}
                  </>
                  {/* To always show a 'View Profile' for testing, regardless of role: */}
                  {/*
                  <Link
                    to={"/Profile"}
                    className="flex w-full items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                  >
                    <User2 className="h-4 w-4" />
                    <span className="text-sm">View Profile (Test)</span>
                  </Link>
                  */}

                  <div
                    onClick={logoutHandler}
                    className="flex w-full items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Logout</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;