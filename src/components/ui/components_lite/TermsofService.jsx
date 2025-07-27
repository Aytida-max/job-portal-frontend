// File: TermsofService.jsx
import React from 'react';
import { FileText, Shield, Users, Lock, Scale, AlertTriangle, Calendar, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';

const TermsofService = () => {
  const navigate = useNavigate();
  const companyName = "Royal Challengers Bangalore Job Portal";
  const websiteURL = "www.RCB.com";
  const effectiveDate = "June 1, 2025";
  const contactEmail = "support@rcb.com";
  const governingLawJurisdiction = "Delhi, India";

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
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">
              Terms of Service
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
              Welcome to {companyName}! These Terms of Service ("Terms") govern your access to and use of the {companyName}
              website (located at {websiteURL}), including any content, functionality, and services offered on or through
              {websiteURL} (collectively, the "Service"), operated by [Your Legal Company Name, if different from {companyName}] ("Company", "we", "us", or "our").
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read these Terms carefully before you start to use the Service. <strong>By accessing or using the Service, you accept
              and agree to be bound and abide by these Terms and our Privacy Policy.</strong> If you do not want to agree to these Terms or the Privacy Policy, you must not
              access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              1. Description of Service
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                {companyName} provides an online platform that connects job seekers ("Job Seekers") with employers, recruiters,
                and staffing agencies ("Employers") looking to fill job vacancies. The Service allows Job Seekers to create profiles,
                upload resumes, search for, and apply to job postings. Employers can create company profiles, post job openings,
                search for candidates, and manage applications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-green-400" />
              2. User Accounts
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-400" />
                  A. Eligibility and Registration
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To access certain features of the Service, you may be required to register for an account. You must be at least
                  18 years old to use the Service. By registering, you represent and warrant that all information you
                  provide is accurate, current, and complete, and you agree to maintain and promptly update your account information.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-400" />
                  B. Account Security
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for safeguarding your account password and for any activities or actions under your account.
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                  We will not be liable for any loss or damage arising from your failure to comply with this security obligation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-400" />
              3. User Obligations and Conduct
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Submit false, misleading, or inaccurate information in your profile, resume, job postings, or applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Post content that is defamatory, obscene, abusive, harassing, discriminatory, fraudulent, or otherwise objectionable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Violate any applicable national, state, local, or international law or regulation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Infringe upon or violate our intellectual property rights or the intellectual property rights of others.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Transmit any worms, viruses, or any code of a destructive nature.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Use the Service for any commercial solicitation purposes not explicitly approved by us.</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-purple-400" />
              4. Content
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  A. User-Generated Content
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You retain all ownership rights to the content you submit, post, or display on or through the Service (e.g., resumes,
                  job descriptions, company profiles) ("User Content"). By submitting User Content, you grant {companyName} a worldwide,
                  non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative
                  works of, display, and perform the User Content in connection with the Service and {companyName}'s business.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  B. Our Content
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Service and its original content (excluding User Content), features, and functionality are and will remain the
                  exclusive property of {companyName} and its licensors. Our trademarks and trade dress may not be used in connection
                  with any product or service without the prior written consent of {companyName}.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-yellow-400" />
              5. Intellectual Property Rights
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                The Service and all its materials, including, but not limited to, software, HTML code, scripts, text, artwork,
                photographs, images, video, and audio (collectively, "Materials") are protected by copyright laws and other
                U.S. and international laws and treaties and are owned by {companyName} or its licensors.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              6. Disclaimers
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. {companyName} MAKES NO REPRESENTATIONS OR WARRANTIES
                OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS
                INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS
                OBTAINED FROM US IS AT YOUR SOLE RISK.
              </p>
              <p className="text-gray-300 leading-relaxed">
                NEITHER {companyName} NOR ANY PERSON ASSOCIATED WITH {companyName} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT
                TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-400" />
              7. Limitation of Liability
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                IN NO EVENT WILL {companyName}, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS,
                OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE,
                OR INABILITY TO USE, THE SERVICE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SERVICE OR SUCH OTHER WEBSITES,
                INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-blue-400" />
              8. Indemnification
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers,
                and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors,
                and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of
                the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-400" />
              9. Termination
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability,
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach
                of the Terms. If you wish to terminate your account, you may simply discontinue using the Service or contact us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-purple-400" />
              10. Governing Law and Dispute Resolution
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of {governingLawJurisdiction}, without regard
                to its conflict of law provisions. Any legal suit, action, or proceeding arising out of, or related to, these Terms
                or the Service shall be instituted exclusively in the federal or state courts located in {governingLawJurisdiction}.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-green-400" />
              11. Changes to Terms of Service
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material,
                we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our
                Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6 text-blue-400" />
              12. Contact Us
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at:
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
              <p className="text-gray-400 mt-4 text-sm">
                <em>This document was last updated on {effectiveDate}.</em>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsofService;