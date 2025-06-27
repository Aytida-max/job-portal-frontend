// File: PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  const companyName = "Royal Challengers Bangalore Job Portal"; // Replace with your actual job portal name
  const effectiveDate = "June 1, 2025"; // Replace with the actual effective date
  const contactEmail = "privacy@rcb.com"; // Replace with your contact email

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-2">Effective Date: {effectiveDate}</p>
      </header>

      <section className="mb-8 prose prose-slate lg:prose-lg max-w-none">
        <p>
          Welcome to {companyName} (hereinafter referred to as "{companyName}", "we", "us", or "our").
          We are committed to protecting the privacy of our users ("user", "you", or "your"), including job seekers,
          employers, and visitors to our website and services (collectively, the "Services"). This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our Services.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
          please do not access or use our Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">1. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect via the Services includes:</p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">A. Personal Data You Provide to Us</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Job Seekers:</strong> When you create an account, build a profile, upload a resume/CV, or apply for jobs,
            we may collect personal information such as your name, email address, phone number, postal address, employment history,
            education, skills, qualifications, references, and any other information you choose to provide.
          </li>
          <li>
            <strong>Employers:</strong> When you create an account, post job openings, or manage applications, we may collect
            personal information such as your company name, business address, contact person's name, email address, phone number,
            job descriptions, and billing information (if applicable for premium services).
          </li>
          <li>
            <strong>Communications:</strong> If you contact us directly, we may receive additional information about you such as
            your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other
            information you may choose to provide.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">B. Data We Collect Automatically</h3>
        <p>
          When you access our Services, we may automatically collect certain information about your device and usage of our Services, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Log and Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages viewed, links clicked,
            time spent on pages, and other similar information.
          </li>
          <li>
            <strong>Cookies and Similar Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our
            Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions of our Services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide, operate, and maintain our Services;</li>
          <li>Improve, personalize, and expand our Services;</li>
          <li>Understand and analyze how you use our Services;</li>
          <li>Develop new products, services, features, and functionality;</li>
          <li>Process your transactions (e.g., job applications, job postings);</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes (where permitted by law);</li>
          <li>Send you emails and other communications;</li>
          <li>Find and prevent fraud and security vulnerabilities;</li>
          <li>Comply with legal obligations and enforce our terms and conditions.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">3. How We Share Your Information</h2>
        <p>We may share the information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process,
            to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any applicable law, rule, or regulation.
          </li>
          <li>
            <strong>With Employers/Job Seekers:</strong> Information you provide as a Job Seeker (e.g., your profile, resume, application materials)
            may be shared with Employers when you apply for a job or make your profile searchable. Information provided by Employers (e.g., job postings)
            will be visible to Job Seekers and other users.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors,
            or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., payment processing,
            data analysis, email delivery, hosting services, customer service, and marketing assistance).
          </li>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger,
            sale of company assets, financing, or acquisition of all or a portion of our business to another company.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
          Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy
          (you may want to create a separate Cookie Policy or include details here).
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">5. Data Security</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware that
          despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be
          guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">6. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
          We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are
          required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">7. Your Rights and Choices</h2>
        <p>Depending on your location and applicable law, you may have certain rights regarding the personal information we hold about you. These may include the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access, correct, update, or request deletion of your personal information.</li>
          <li>Object to processing of your personal information, ask us to restrict processing of your personal information, or request portability of your personal information.</li>
          <li>Opt-out of marketing communications we send you at any time.</li>
          <li>Withdraw your consent at any time if we have collected and processed your personal information with your consent.</li>
        </ul>
        <p>To exercise these rights, please contact us at {contactEmail}.</p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">8. Children's Privacy</h2>
        <p>
          Our Services are not intended for use by children under the age of 16 [Note: Adjust age as per legal requirements, e.g., 13 in the US under COPPA, or 18 for some services].
          We do not knowingly collect personal information from children under this age. If we become aware that we have collected personal information
          from a child under the specified age without verification of parental consent, we take steps to remove that information from our servers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
          and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <address className="not-italic">
          {companyName} <br />
          [Your Company Address - Optional, or just email] <br />
          Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;