// File: TermsofService.jsx
import React from 'react';

const TermsofService = () => {
  const companyName = "Royal Challengers Bangalore Job Portal"; // Replace with your actual job portal name
  const websiteURL = "www.RCB.com"; // Replace with your actual website URL
  const effectiveDate = "June 1, 2025"; // Replace with the actual effective date
  const contactEmail = "support@rcb.com"; // Replace with your contact email
  const governingLawJurisdiction = "Delhi, India"; // Replace with your jurisdiction

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Terms of Service</h1>
        <p className="text-sm text-gray-500 mt-2">Effective Date: {effectiveDate}</p>
      </header>

      <section className="mb-8 prose prose-slate lg:prose-lg max-w-none">
        <p>
          Welcome to {companyName}! These Terms of Service ("Terms") govern your access to and use of the {companyName}
          website (located at {websiteURL}), including any content, functionality, and services offered on or through
          {websiteURL} (collectively, the "Service"), operated by [Your Legal Company Name, if different from {companyName}] ("Company", "we", "us", or "our").
        </p>
        <p>
          Please read these Terms carefully before you start to use the Service. **By accessing or using the Service, you accept
          and agree to be bound and abide by these Terms and our Privacy Policy, found at [Link to Your Privacy Policy],
          incorporated herein by reference.** If you do not want to agree to these Terms or the Privacy Policy, you must not
          access or use the Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">1. Description of Service</h2>
        <p>
          {companyName} provides an online platform that connects job seekers ("Job Seekers") with employers, recruiters,
          and staffing agencies ("Employers") looking to fill job vacancies. The Service allows Job Seekers to create profiles,
          upload resumes, search for, and apply to job postings. Employers can create company profiles, post job openings,
          search for candidates, and manage applications.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">2. User Accounts</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">A. Eligibility and Registration</h3>
        <p>
          To access certain features of the Service, you may be required to register for an account. You must be at least
          [16/18 - specify age] years old to use the Service. By registering, you represent and warrant that all information you
          provide is accurate, current, and complete, and you agree to maintain and promptly update your account information.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">B. Account Security</h3>
        <p>
          You are responsible for safeguarding your account password and for any activities or actions under your account.
          You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          We will not be liable for any loss or damage arising from your failure to comply with this security obligation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">3. User Obligations and Conduct</h2>
        <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Submit false, misleading, or inaccurate information in your profile, resume, job postings, or applications.</li>
          <li>Post content that is defamatory, obscene, abusive, harassing, discriminatory, fraudulent, or otherwise objectionable.</li>
          <li>Violate any applicable national, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).</li>
          <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
          <li>Transmit any worms, viruses, or any code of a destructive nature.</li>
          <li>Use the Service for any commercial solicitation purposes not explicitly approved by us.</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm the Company or users of the Service or expose them to liability.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">A. For Job Seekers</h3>
        <p>You are solely responsible for the accuracy of your resume, profile, and application materials. {companyName} does not guarantee employment.</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">B. For Employers</h3>
        <p>
          You are responsible for the content of your job postings and ensuring they comply with all applicable laws, including
          non-discrimination and fair employment practices. You agree not to post jobs that are misleading, require upfront payment
          from applicants, or are for illegal activities. {companyName} does not guarantee that you will find suitable candidates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">4. Content</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">A. User-Generated Content</h3>
        <p>
          You retain all ownership rights to the content you submit, post, or display on or through the Service (e.g., resumes,
          job descriptions, company profiles) ("User Content"). By submitting User Content, you grant {companyName} a worldwide,
          non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative
          works of, display, and perform the User Content in connection with the Service and {companyName}'s (and its successors'
          and affiliates') business. You represent and warrant that you have all rights necessary to grant such licenses.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">B. Our Content</h3>
        <p>
          The Service and its original content (excluding User Content), features, and functionality are and will remain the
          exclusive property of {companyName} and its licensors. Our trademarks and trade dress may not be used in connection
          with any product or service without the prior written consent of {companyName}.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">5. Intellectual Property Rights</h2>
        <p>
          The Service and all its materials, including, but not limited to, software, HTML code, scripts, text, artwork,
          photographs, images, video, and audio (collectively, "Materials") are protected by copyright laws and other
          U.S. and international laws and treaties and are owned by {companyName} or its licensors.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">6. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. {companyName} MAKES NO REPRESENTATIONS OR WARRANTIES
          OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS
          INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS
          OBTAINED FROM US IS AT YOUR SOLE RISK.
        </p>
        <p>
          NEITHER {companyName} NOR ANY PERSON ASSOCIATED WITH {companyName} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT
          TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING
          THE FOREGOING, NEITHER {companyName} NOR ANYONE ASSOCIATED WITH {companyName} REPRESENTS OR WARRANTS THAT THE SERVICES,
          THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
          UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE
          OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES
          WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
        </p>
        <p>
          {companyName} HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE,
          INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">7. Limitation of Liability</h2>
        <p>
          IN NO EVENT WILL {companyName}, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS,
          OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE,
          OR INABILITY TO USE, THE SERVICE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SERVICE OR SUCH OTHER WEBSITES,
          INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,
          PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
          ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE),
          BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">8. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers,
          and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors,
          and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
          (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of
          the Service, including, but not limited to, your User Content, any use of the Service's content, services, and
          products other than as expressly authorized in these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">9. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability,
          under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach
          of the Terms. If you wish to terminate your account, you may simply discontinue using the Service or contact us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of {governingLawJurisdiction}, without regard
          to its conflict of law provisions. Any legal suit, action, or proceeding arising out of, or related to, these Terms
          or the Service shall be instituted exclusively in the federal or state courts located in {governingLawJurisdiction}.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">11. Changes to Terms of Service</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material,
          we will make reasonable efforts to provide at least [e.g., 30 days'] notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole discretion. By continuing to access or use our
          Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">12. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <address className="not-italic">
          {companyName} <br />
          [Your Company Address - Optional] <br />
          Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
        </address>

        <p className="mt-6">
          <em>This document was last updated on {effectiveDate}.</em>
        </p>
      </section>
    </div>
  );
};

export default TermsofService;