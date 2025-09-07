import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import { Label } from "../label";
import { Button } from "../button";
import { Input } from "../input";
import { useDispatch, useSelector } from "react-redux";
import API from "@/api/axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
import { 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Image, 
  FileUp, 
  Sparkles,
  Edit3,
  CheckCircle,
  X
} from "lucide-react";

const EditProfileModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  // State for text form inputs
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    bio: "",
    skills: "",
  });

  // Separate state for file objects
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  // Effect to initialize form when user data is available or modal opens
  useEffect(() => {
    if (user) {
      setInput({
        fullname: user.fullname || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        bio: user.profile?.bio || "",
        skills: user.profile?.skills?.join(", ") || "",
      });
      setProfilePhotoFile(null);
      setResumeFile(null);
    }
  }, [user, open]);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleProfilePhotoFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Invalid file type. Please upload an image for profile photo.");
        e.target.value = null;
        setProfilePhotoFile(null);
        return;
      }
      setProfilePhotoFile(file);
    } else {
      setProfilePhotoFile(null);
    }
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Invalid file type. Please upload a PDF for the resume.");
        e.target.value = null;
        setResumeFile(null);
        return;
      }
      setResumeFile(file);
    } else {
      setResumeFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (profilePhotoFile) {
      formData.append("profilePhoto", profilePhotoFile);
    }
    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    const initialSkillsString = user?.profile?.skills?.join(", ") || "";
    const noTextChange =
      user?.fullname === input.fullname &&
      user?.email === input.email &&
      user?.phoneNumber === input.phoneNumber &&
      user?.profile?.bio === input.bio &&
      initialSkillsString === input.skills;

    if (noTextChange && !profilePhotoFile && !resumeFile) {
      toast.info("No changes detected.");
      setLoading(false);
      setOpen(false);
      return;
    }

    try {
      // const res = await API.post(
      //   `${USER_API_ENDPOINT}/profile/update`,
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //     withCredentials: true,
      //   }
      // );
      const res = await API.post("/api/users/profile/update", formData);

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      } else {
        toast.error(res.data.message || "Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Update Profile Error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred during update."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass border border-white/20 max-w-2xl bg-black/40 backdrop-blur-xl">
        <DialogHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Edit3 className="h-6 w-6 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Edit Profile
            </DialogTitle>
          </div>
          <p className="text-gray-400 text-sm">
            Update your profile information and make it stand out
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <User className="h-5 w-5 text-blue-400" />
                Personal Information
              </h3>
              
              {/* Full Name */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  type="text"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Professional Information
              </h3>
              
              {/* Bio */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Bio
                </Label>
                <textarea
                  value={input.bio}
                  name="bio"
                  onChange={changeEventHandler}
                  placeholder="Tell us about yourself, your experience, and what you're looking for..."
                  className="w-full h-24 resize-none glass border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/50 focus:ring-2 transition-all duration-300"
                  rows="4"
                />
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Skills
                </Label>
                <Input
                  value={input.skills}
                  name="skills"
                  onChange={changeEventHandler}
                  placeholder="e.g., React, Node.js, Python, UI/UX Design (comma-separated)"
                  className="w-full"
                />
                <p className="text-xs text-gray-400">
                  Separate multiple skills with commas
                </p>
              </div>
            </div>

            {/* File Uploads Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileUp className="h-5 w-5 text-purple-400" />
                Documents & Media
              </h3>
              
              {/* Profile Photo */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  Profile Photo
                </Label>
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePhotoFileChange}
                    className="w-full cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30 transition-all duration-300"
                  />
                  {profilePhotoFile && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400">
                  Upload a professional photo (JPG, PNG, GIF)
                </p>
              </div>

              {/* Resume */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resume (PDF)
                </Label>
                <div className="relative">
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={handleResumeFileChange}
                    className="w-full cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-500/20 file:text-green-400 hover:file:bg-green-500/30 transition-all duration-300"
                  />
                  {resumeFile && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400">
                  Upload your latest resume in PDF format
                </p>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <DialogFooter className="flex gap-3 pt-6 border-t border-white/10">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
              disabled={loading}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            
            {loading ? (
              <Button disabled className="flex-1">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </Button>
            ) : (
              <Button type="submit" variant="gradient" className="flex-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;