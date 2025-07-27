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
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  Calendar,
  Users,
  FileText,
  CheckCircle,
  Loader2,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetJobById(id);

  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${id}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        dispatch(setSingleJob(res.data.job));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  if (!singleJob) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="glass border border-white/20 rounded-2xl p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Loading Job Details
              </h3>
              <p className="text-gray-400">
                Please wait while we fetch the job information...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
        </div>

        {/* Job Header */}
        <div className="glass border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-3xl font-bold gradient-text">
                  {singleJob?.title}
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Users className="h-3 w-3 mr-1" />
                  {singleJob?.position} Positions
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {singleJob?.salary} LPA
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <MapPin className="h-3 w-3 mr-1" />
                  {singleJob?.location}
                </Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  <Clock className="h-3 w-3 mr-1" />
                  {singleJob?.jobType}
                </Badge>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button
                onClick={applyJobHandler}
                disabled={isApplied}
                variant={isApplied ? "outline" : "gradient"}
                className={`flex items-center gap-2 px-8 py-3 ${
                  isApplied ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isApplied ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Already Applied
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4" />
                    Apply Now
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="glass border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-400" />
            Job Description
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {singleJob?.description}
            </p>
          </div>
        </div>

        {/* Job Details */}
        <div className="glass border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-green-400" />
            Job Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Role</span>
                </div>
                <span className="text-white font-medium">
                  {singleJob?.position}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">Location</span>
                </div>
                <span className="text-white font-medium">
                  {singleJob?.location}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-400">Salary</span>
                </div>
                <span className="text-white font-medium">
                  {singleJob?.salary} LPA
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-400">Experience</span>
                </div>
                <span className="text-white font-medium">
                  {singleJob?.experience} Year(s)
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-400">Total Applicants</span>
                </div>
                <span className="text-white font-medium">
                  {singleJob?.applications?.length || 0}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="text-gray-400">Post Date</span>
                </div>
                <span className="text-white font-medium">
                  {new Date(singleJob?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;