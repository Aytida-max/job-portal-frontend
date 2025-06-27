import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog"; // Assuming these are shadcn/ui components
import { Label } from "../label";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data"; // Your API endpoint utility
import { setUser } from "@/redux/authSlice"; // Your Redux action
import { Loader2 } from "lucide-react";

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
    skills: "", // Skills will be handled as a comma-separated string
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
        skills: user.profile?.skills?.join(", ") || "", // Join skills array into a string
      });
      // Reset file inputs when modal opens or user changes; cannot pre-fill file inputs
      setProfilePhotoFile(null);
      setResumeFile(null);
    }
  }, [user, open]); // Re-initialize if modal opens or user data changes

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleProfilePhotoFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Invalid file type. Please upload an image for profile photo.");
        e.target.value = null; // Clear the file input
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
        e.target.value = null; // Clear the file input
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
    formData.append("skills", input.skills); // Backend expects comma-separated string

    // Append files if they have been selected
    if (profilePhotoFile) {
      formData.append("profilePhoto", profilePhotoFile); // Field name for backend
    }
    if (resumeFile) {
      formData.append("resume", resumeFile); // Field name for backend
    }

    // Check if any data has actually changed or if files are added (optional)
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
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`, // Your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        console.log("DEBUG: Raw res.data.user object:", res.data.user); // Keep this
        console.log("DEBUG: res.data.user.fullname:", res.data.user?.fullname);
        console.log("DEBUG: res.data.user.email:", res.data.user?.email);
        console.log("DEBUG: res.data.user.profile object:", res.data.user?.profile);
        console.log("DEBUG: res.data.user.profile.bio:", res.data.user?.profile?.bio);
        console.log("DEBUG: res.data.user.profile.skills:", res.data.user?.profile?.skills);
        console.log("DEBUG: res.data.user.profile.profilePhoto:", res.data.user?.profile?.profilePhoto);
        console.log("DEBUG: res.data.user.profile.resume:", res.data.user?.profile?.resume);

        dispatch(setUser(res.data.user)); // Update Redux store with the new user data
        toast.success(res.data.message);
        setOpen(false); // Close modal on success
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
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]"> {/* Increased width a bit */}
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2"> {/* Added scroll for content */}
              {/* Full Name */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right">
                  Name
                </Label>
                <input
                  type="text"
                  id="fullname"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  className="col-span-3 border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Email */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  className="col-span-3 border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Phone Number */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone
                </Label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  className="col-span-3 border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Bio */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <textarea // Changed to textarea for better bio editing
                  id="bio"
                  value={input.bio}
                  name="bio"
                  onChange={changeEventHandler}
                  className="col-span-3 border border-gray-300 rounded-md p-2 h-24"
                  rows="3"
                />
              </div>
              {/* Skills */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  id="skills"
                  name="skills"
                  placeholder="e.g., react, node, css (comma-separated)"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Profile Photo file upload */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="profilePhotoFile" className="text-right">
                  Profile Photo
                </Label>
                <input
                  type="file"
                  id="profilePhotoFile"
                  name="profilePhotoFile"
                  accept="image/*"
                  onChange={handleProfilePhotoFileChange}
                  className="col-span-3 border border-gray-300 rounded-md p-2 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {/* Resume file upload */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resumeFile" className="text-right">
                  Resume (PDF)
                </Label>
                <input
                  type="file"
                  id="resumeFile"
                  name="resumeFile"
                  accept="application/pdf"
                  onChange={handleResumeFileChange}
                  className="col-span-3 border border-gray-300 rounded-md p-2 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button disabled className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4">
                  Save Changes
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfileModal;