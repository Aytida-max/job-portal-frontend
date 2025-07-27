import React, { useEffect, useState } from "react";
import Navbar from "../ui/components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Navigate, useNavigate } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { LogIn, User, Building2, Sparkles, Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "", 
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="glass border border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <Label className="text-white font-medium mb-2 block">Email</Label>
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
                <Label className="text-white font-medium mb-2 block">Password</Label>
                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="********"
                  required
                />
              </div>

              {/* Role Selection */}
              <div>
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

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-lg font-semibold"
                variant="gradient"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium">
                    Create one here
                  </Link>
                </p>
                <Link to="/register">
                  <Button variant="outline" className="w-full">
                    Create New Account
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;