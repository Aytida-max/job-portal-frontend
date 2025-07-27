import React from "react";
import { Link } from "react-router-dom";
import { Heart, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Job</span>
                <span className="text-white">Portal</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting talented professionals with amazing opportunities worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                to="/Browse"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Browse Jobs
              </Link>
              <Link
                to="/Jobs"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                All Jobs
              </Link>
            </div>
          </div>

          {/* Legal links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link
                to="/PrivacyPolicy"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/TermsofService"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 mb-2">
              © {new Date().getFullYear()} Job Portal. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with <Heart className="inline h-3 w-3 text-red-400" /> by{" "}
              <a
                href="https://drive.google.com/file/d/1yTmdaY-nVC4ig44_ms6sdKuSmI6D4LPo/view"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aditya Chauhan
              </a>
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-gray-400 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-gray-400 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-gray-400 hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;