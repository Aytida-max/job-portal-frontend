import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Reduced py-10 to py-6 */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        {/* Reduced mb-3 to mb-2 */}
        <p className="text-sm text-slate-500 mb-2">
          © {new Date().getFullYear()} Royal Challengers Bangalore. All rights reserved.
        </p>
        {/* Reduced mb-6 to mb-3 */}
        <p className="text-sm text-slate-500 mb-3">
          Powered by{" "}
          <a
            href="https://drive.google.com/file/d/1yTmdaY-nVC4ig44_ms6sdKuSmI6D4LPo/view"
            className="font-semibold text-sky-600 hover:text-sky-700 transition-colors duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aditya Chauhan
          </a>
        </p>
        <nav className="flex justify-center items-center space-x-3 text-xs sm:text-sm">
          <Link
            to="/PrivacyPolicy"
            className="text-slate-600 hover:text-sky-600 hover:underline transition-colors duration-150"
          >
            Privacy Policy
          </Link>
          <span className="text-slate-400" aria-hidden="true">|</span>
          <Link
            to="/TermsofService"
            className="text-slate-600 hover:text-sky-600 hover:underline transition-colors duration-150"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;