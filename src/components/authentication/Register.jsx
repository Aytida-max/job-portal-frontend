import React, { useEffect, useState } from "react";
import Navbar from "../ui/components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { UserPlus, User, Building2, Sparkles, Loader2, Upload, UserCheck, Mail, Lock, Phone, CreditCard, FileText } from "lucide-react";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    pancard: "",
    adharcard: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("pancard", input.pancard);
    formData.append("adharcard", input.adharcard);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Create Account
            </h1>
            <p className="text-gray-400">
              Join our community and start your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="glass border border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <UserCheck className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  type="text"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="********"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="+1234567890"
                  required
                />
              </div>

              {/* PAN Card */}
              <div>
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  PAN Card Number
                </Label>
                <Input
                  type="text"
                  value={input.pancard}
                  name="pancard"
                  onChange={changeEventHandler}
                  placeholder="ABCDEF1234G"
                  required
                />
              </div>

              {/* Aadhar Card */}
              <div>
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Aadhar Card Number
                </Label>
                <Input
                  type="text"
                  value={input.adharcard}
                  name="adharcard"
                  onChange={changeEventHandler}
                  placeholder="123456789012"
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="md:col-span-2">
                <Label className="text-white font-medium mb-3 block">I am a:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative">
                    <input
                      type="radio"
                      name="role"
                      value="Student"
                      checked={input.role === "Student"}
                      onChange={changeEventHandler}
                      className="sr-only"
                      required
                    />
                    <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      input.role === "Student" 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}>
                      <div className="flex items-center gap-3">
                        <User className={`h-5 w-5 ${input.role === "Student" ? 'text-blue-400' : 'text-gray-400'}`} />
                        <span className={`font-medium ${input.role === "Student" ? 'text-blue-400' : 'text-gray-300'}`}>
                          Student
                        </span>
                      </div>
                    </div>
                  </label>

                  <label className="relative">
                    <input
                      type="radio"
                      name="role"
                      value="Recruiter"
                      checked={input.role === "Recruiter"}
                      onChange={changeEventHandler}
                      className="sr-only"
                      required
                    />
                    <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      input.role === "Recruiter" 
                        ? 'border-purple-500 bg-purple-500/20' 
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Building2 className={`h-5 w-5 ${input.role === "Recruiter" ? 'text-purple-400' : 'text-gray-400'}`} />
                        <span className={`font-medium ${input.role === "Recruiter" ? 'text-purple-400' : 'text-gray-300'}`}>
                          Recruiter
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="md:col-span-2">
                <Label className="text-white font-medium mb-2 block flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Profile Photo
                </Label>
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={ChangeFilehandler}
                    className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg font-semibold"
                  variant="gradient"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-5 w-5" />
                      Create Account
                    </>
                  )}
                </Button>
              </div>

              {/* Login Link */}
              <div className="md:col-span-2 text-center">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;