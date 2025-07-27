// File: PrivacyPolicy.jsx
import React from 'react';
import { Shield, FileText, Eye, Lock, Users, Calendar, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const companyName = "Royal Challengers Bangalore Job Portal";
  const effectiveDate = "June 1, 2025";
  const contactEmail = "privacy@rcb.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Header */}
        <div className="glass border border-white/20 rounded-2xl p-8 mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-400">
            Effective Date: {effectiveDate}
          </p>
        </div>

        {/* Content */}
        <div className="glass border border-white/20 rounded-2xl p-8 space-y-8">
          <section>
            <p className="text-gray-300 leading-relaxed mb-6">
              Welcome to {companyName} (hereinafter referred to as "{companyName}", "we", "us", or "our").
              We are committed to protecting the privacy of our users ("user", "you", or "your"), including job seekers,
              employers, and visitors to our website and services (collectively, the "Services"). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our Services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access or use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-400" />
              1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We may collect information about you in a variety of ways. The information we may collect via the Services includes:
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-400" />
                  A. Personal Data You Provide to Us
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Job Seekers:</strong> When you create an account, build a profile, upload a resume/CV, or apply for jobs,
                      we may collect personal information such as your name, email address, phone number, postal address, employment history,
                      education, skills, qualifications, references, and any other information you choose to provide.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Employers:</strong> When you create an account, post job openings, or manage applications, we may collect
                      personal information such as your company name, business address, contact person's name, email address, phone number,
                      job descriptions, and billing information (if applicable for premium services).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Communications:</strong> If you contact us directly, we may receive additional information about you such as
                      your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other
                      information you may choose to provide.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-purple-400" />
                  B. Data We Collect Automatically
                </h3>
                <p className="text-gray-300 mb-3">
                  When you access our Services, we may automatically collect certain information about your device and usage of our Services, including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong>Log and Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages viewed, links clicked,
                      time spent on pages, and other similar information.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong>Cookies and Similar Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our
                      Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                      However, if you do not accept cookies, you may not be able to use some portions of our Services.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-green-400" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Provide, operate, and maintain our Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Improve, personalize, and expand our Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Understand and analyze how you use our Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Develop new products, services, features, and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Process your transactions (e.g., job applications, job postings)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Communicate with you for customer service and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Find and prevent fraud and security vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Comply with legal obligations and enforce our terms and conditions</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-orange-400" />
              3. How We Share Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We may share the information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <div>
                    <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process,
                    to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others,
                    we may share your information as permitted or required by any applicable law, rule, or regulation.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <div>
                    <strong>With Employers/Job Seekers:</strong> Information you provide as a Job Seeker (e.g., your profile, resume, application materials)
                    may be shared with Employers when you apply for a job or make your profile searchable. Information provided by Employers (e.g., job postings)
                    will be visible to Job Seekers and other users.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <div>
                    <strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors,
                    or agents who perform services for us or on our behalf and require access to such information to do that work.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <div>
                    <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-400" />
              4. Data Security
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information.
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware that
                despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be
                guaranteed against any interception or other type of misuse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-yellow-400" />
              5. Data Retention
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6 text-blue-400" />
              6. Contact Us
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <a 
                  href={`mailto:${contactEmail}`} 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;