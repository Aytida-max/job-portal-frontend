import React, { useState } from "react";
import { Button } from "../button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
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
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-black-600 font-medium">
            <span className="text-[#614232]">
              {" "}
              <PiBuildingOfficeBold />
            </span>{" "}
            
Your Next Career Starts Here
          </span>

          <h2 className="text-5xl font-bold">
            The Right Role is Out There <br />
            Find it Here <span className="text-[#6A38C2]">Dream Job</span>
          </h2>
          <p>
            Connect with leading companies and discover thousands of opportunities 
            in tech, design, and beyond.<br />
            Your perfect role is just a search away..
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full  items-center gap-4 mx-auto ">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none border-none w-full"
            />
            <Button onClick={searchjobHandler} className=" rounded-r-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
