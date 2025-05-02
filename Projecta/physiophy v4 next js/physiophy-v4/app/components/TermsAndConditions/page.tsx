'use client'; // Required for client-side interactivity

import { useEffect } from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="max-w-full mx-auto pt-8 mt-20 bg-gradient-to-br from-[#f9f9f9] to-[#e8f0fe] rounded-xl shadow-lg font-['Poppins'] transition-all duration-300 md:mx-5 md:px-5 md:pt-6 sm:mx-3 sm:px-4 sm:mt-24 sm:pt-4">
      <h1 className="text-center text-[#1a3552] text-4xl font-bold mb-8 uppercase tracking-wider md:text-3xl sm:text-2xl">
        Terms and Conditions
      </h1>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          1. Introduction
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          Welcome to Phyiophy Physiotherapy Clinic in Nagpur! By choosing our services, you agree to abide by these Terms and Conditions, which govern your relationship with us. Our goal is to ensure a smooth, transparent experience while delivering top-quality physiotherapy care.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          2. Appointments & Cancellations
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          To ensure availability, patients are required to book appointments in advance through our online portal, phone, or in-person. We kindly request cancellations or rescheduling at least 24 hours prior to your appointment. Late cancellations may incur a fee to cover reserved time slots, except in emergencies.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          3. Payments
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          Full payment is due at the time of service to maintain seamless operations. We offer flexible options including cash, UPI (e.g., Google Pay, PhonePe), and online bank transfers. Please note that unpaid balances may restrict future bookings until settled.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          4. Liability
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          While we strive to provide safe and effective treatments, Phyiophy Physiotherapy Clinic is not liable for adverse effects if patients fail to adhere to prescribed exercises, guidelines, or post-treatment care instructions. Your active participation is key to successful outcomes.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          5. Privacy Policy
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          We prioritize your privacy. All patient data—such as medical records and personal details—is kept strictly confidential and will not be shared without your explicit consent, except where legally mandated (e.g., court orders). See our Privacy Policy for full details.
        </p>
      </div>

      <div className="mb-8 p-5 bg-white/80 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md mx-4">
        <h2 className="text-[#2c5282] text-2xl font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#63b3ed] after:-bottom-1 after:left-0 sm:text-xl">
          6. Changes to Terms
        </h2>
        <p className="text-[#4a5568] text-base leading-relaxed text-justify sm:text-sm">
          We may update these Terms and Conditions periodically to reflect changes in our practices or legal requirements. Updates will be posted here, and your continued use of our services constitutes acceptance. We'll notify you of major changes via email or during your next visit.
        </p>
      </div>

      <Link 
        href="/pages/Contact"
        className="no-underline bg-[rgba(221,219,255,0.4)] block w-fit mx-auto"
      >
        <button className="px-5 py-3 bg-[#2b6cb0] text-white border-none rounded text-base cursor-pointer transition-colors duration-300 hover:bg-[#2c5282]">
          Contact Us for Clarifications
        </button>
      </Link>
    </div>
  );
};

export default TermsAndConditions;