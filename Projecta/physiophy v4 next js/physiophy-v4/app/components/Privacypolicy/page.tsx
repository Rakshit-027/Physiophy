'use client'; // Mark as Client Component if using interactivity

import { useEffect } from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="max-w-full px-8 py-8 mt-12 bg-[#dddbff] rounded-xl shadow-lg font-['Poppins'] transition-all duration-300 md:mx-5 md:px-5 sm:mx-5 sm:mt-24 sm:px-4">
      <h1 className="text-center text-[#1a3552] text-4xl font-bold mb-8 uppercase tracking-wider md:text-3xl sm:text-2xl">
        Privacy Policy
      </h1>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          1. Introduction
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          At Phyiophy Physiotherapy Clinic, your privacy is our top priority. We are dedicated to safeguarding your personal information with the highest standards of care and transparency. This policy outlines how we collect, use, and protect your data to ensure your trust and confidence in our services.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          2. Information We Collect
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          When you engage with our services, we may collect essential details such as your full name, email address, phone number, and relevant medical history. This information helps us tailor our physiotherapy treatments to your specific needs and ensures seamless communication for appointments and follow-ups.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          3. How We Use Your Information
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          We utilize your data to deliver personalized care, including designing treatment plans, scheduling appointments, and sending reminders. Additionally, we may analyze anonymized data to enhance our services, improve patient outcomes, and ensure our clinic operates efficiently—all while keeping your identity protected.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          4. Data Security
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          Your personal information is safeguarded with advanced encryption, secure servers, and strict access controls. We regularly update our security protocols to prevent unauthorized access, data breaches, or leaks, ensuring your sensitive details remain confidential and secure.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          5. Sharing Your Information
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          We do not sell, trade, or share your personal data with third parties unless legally obligated (e.g., by court order) or if you provide explicit consent—such as for a referral to a specialist. In such cases, we ensure any recipient adheres to equivalent privacy standards.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          6. Your Rights
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          You're in control of your data. You can request access to your information, update inaccuracies, or ask for its deletion at any time. Contact us directly, and we'll process your request promptly in accordance with applicable data protection laws.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          7. Changes to This Policy
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          We may periodically refine this policy to reflect legal updates or service improvements. Any changes will be posted here, and your continued use of our services signifies your acceptance. We'll notify you of significant updates via email or during your next visit.
        </p>
      </div>

      <Link 
        href="/contact"
        className="no-underline bg-[rgba(221,219,255,0.4)]"
      >
        <button className="block mx-auto mt-5 px-5 py-2 bg-[#2b6cb0] text-white border-none rounded text-base cursor-pointer transition-colors duration-300 hover:bg-[#2c5282]">
          Contact Us for Questions
        </button>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;