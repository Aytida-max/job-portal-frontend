import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button";
import { 
  Contact, 
  Mail, 
  Pen, 
  Download, 
  User, 
  Sparkles, 
  MapPin, 
  Calendar,
  Award,
  FileText,
  ExternalLink,
  Phone,
  Briefcase,
  Upload as UploadIcon
} from "lucide-react";
import { Badge } from "../badge";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJobs";

const isResume = true;
const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />

      {/* Profile Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="glass border border-white/20 rounded-3xl p-8 mb-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Profile Info */}
              <div className="flex items-center gap-6">
                {/* Avatar with gradient border */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                    <div className="bg-black rounded-full p-1">
                      <Avatar className="h-28 w-28 border-4 border-black">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt={user?.fullname}
                          className="object-cover"
                        />
                      </Avatar>
                    </div>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h1 className="text-3xl font-bold gradient-text mb-2">
                      {user?.fullname || "Your Name"}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                      {user?.profile?.bio || "No bio available. Add a compelling bio to showcase your expertise and experience."}
                    </p>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-400" />
                      <span>Active Profile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-400" />
                      <span>Member since 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edit Profile Button */}
              <Button
                onClick={() => setOpen(true)}
                variant="gradient"
                className="flex items-center gap-2 px-6 py-3"
              >
                <Pen className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="glass border border-white/20 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Contact className="h-5 w-5 text-blue-400" />
            Contact Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a 
                  href={`mailto:${user?.email}`}
                  className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                  {user?.email}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Phone className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a 
                  href={`tel:${user?.phoneNumber}`}
                  className="text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                >
                  {user?.phoneNumber || "Not provided"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass border border-white/20 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            Skills & Expertise
          </h2>
          
          <div className="space-y-4">
            {user?.profile?.skills && user.profile.skills.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {user.profile.skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="glass"
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Sparkles className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No skills added yet</p>
                <Button 
                  onClick={() => setOpen(true)}
                  variant="outline"
                  size="sm"
                >
                  <Pen className="h-4 w-4 mr-2" />
                  Add Skills
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="glass border border-white/20 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-400" />
            Resume & Documents
          </h2>
          
          <div className="space-y-4">
            {isResume && user?.profile?.resume ? (
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <FileText className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {user?.profile?.resumeOriginalName || "Resume.pdf"}
                    </p>
                    <p className="text-sm text-gray-400">PDF Document</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a
                    target="_blank"
                    href={user?.profile?.resume}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No resume uploaded yet</p>
                                 <Button 
                   onClick={() => setOpen(true)}
                   variant="outline"
                   size="sm"
                 >
                   <UploadIcon className="h-4 w-4 mr-2" />
                   Upload Resume
                 </Button>
              </div>
            )}
          </div>
        </div>

        {/* Applied Jobs Section */}
        <div className="glass border border-white/20 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-orange-400" />
            Applied Jobs
          </h2>
          
          <div className="space-y-4">
            <AppliedJob />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;