import React, { useState } from "react";
import { Badge } from "../badge";
import { Button } from "../button";
import { useParams } from "react-router-dom";
import useGetJobById from "@/hooks/useGetJobById";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";

const Description = () => {
  // Get Job ID from URL
  const { id } = useParams();
  const dispatch = useDispatch();
  // Fetch job details using the new hook
  useGetJobById(id);

  // Get the job details from the Redux store
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth); 


  // const isInitiallyApplied = singleJob?.application?.some(
  //   (application)=>application.applicant === user?._id ) || false;

  // const [isApplied,setIsApplied]= useState(isInitiallyApplied);
  
   // You can add logic for this later
    const applyJobHandler = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/apply/${id}`,
          
          {withCredentials: true}
        );
        if(res.data.success){
          // setIsApplied(true);
          // const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]};
          dispatch(setSingleJob(res.data.job));
          console.log(res.data);
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error.message);
        // toast.error(error.response.data.message);
        toast.error(error.response?.data?.message || "An error occurred.");
      }
    }
  // To prevent errors while data is loading
  if (!singleJob) {
    return (
        <div className="max-w-7xl mx-auto my-10 px-8">
            <p>Loading job details...</p>
        </div>
    );
  }
  

  const isApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex flex-wrap gap-2 items-center mt-4">
              <Badge className={"text-blue-600 font-bold"} variant={"ghost"}>
                {singleJob?.position} Positions
              </Badge>
              <Badge className={"text-[#FA4F09] font-bold"} variant={"ghost"}>
                {singleJob?.salary} LPA
              </Badge>
              <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>
                {singleJob?.location}
              </Badge>
              <Badge className={"text-black font-bold"} variant={"ghost"}>
                {singleJob?.jobType}
              </Badge>
            </div>
          </div>
          <div>
            <Button
              onClick={ applyJobHandler}
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#6B3AC2] hover:bg-[#552d9b]"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
        <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
          Job Description
        </h1>

        <div className="my-4">
          <p className="text-gray-700 whitespace-pre-wrap">
            {singleJob?.description}
          </p>
        </div>  

        
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.position}
            </span>
          </h1>

          


          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.location}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.salary} LPA
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.experience} Year(s)
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.applications?.length || 0}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Job Type:
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.jobType}
            </span>
          </h1>
           <h1 className="font-bold my-1 ">
            Post Date:
            <span className=" pl-4 font-normal text-gray-800">
              {singleJob?.createdAt?.split("T")[0]}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Description;