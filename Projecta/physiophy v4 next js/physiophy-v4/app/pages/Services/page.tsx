"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import {
  Stethoscope,
  Brain,
  Bone,
  Activity,
  Users,
  Heart,
  Armchair,
  Apple,
} from "lucide-react";
import "./Services.css";

// Define interface for service data
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  category: string;
}

const services: Service[] = [
  {
    icon: <Stethoscope className="rehab-service-icon" />,
    title: "Pediatric Rehabilitation",
    description: "Helping little ones move, grow, and thrive with expert pediatric rehabilitation.",
    category: "Pediatric Care",
  },
  {
    icon: <Brain className="rehab-service-icon" />,
    title: "Neuro Rehabilitation",
    description: "Restoring mobility, independence, and confidence through advanced neurological rehabilitation.",
    category: "Neurological Care",
  },
  {
    icon: <Bone className="rehab-service-icon" />,
    title: "Ortho Rehabilitation",
    description: "Precision-driven recovery for joint, muscle, and bone health, ensuring pain-free movement.",
    category: "Orthopedic Care",
  },
  {
    icon: <Users className="rehab-service-icon" />,
    title: "Geriatric Rehabilitation",
    description: "Gentle, effective rehabilitation to enhance mobility and quality of life in older adults.",
    category: "Senior Care",
  },
  {
    icon: <Heart className="rehab-service-icon" />,
    title: "ANC & PNC Rehabilitation",
    description: "Specialized physiotherapy for a smoother pregnancy, safer delivery, and faster postpartum recovery.",
    category: "Maternity Care",
  },
  {
    icon: <Apple className="rehab-service-icon" />,
    title: "Nutrition & Diet Counseling",
    description: "Personalized nutrition plans to fuel healing, recovery, and long-term wellness.",
    category: "Wellness",
  },
];

// Define props for ServiceCard component
interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  category: string;
}

const ServiceCard = ({ icon, title, description, category }: ServiceCardProps) => {
  return (
    <div className="rehab-service-card rehab-fade-in">
      <div className="rehab-service-icon-wrapper rehab-pulse">{icon}</div>
      <div className="rehab-service-category">
        <span>{category}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".rehab-service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rehab-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleBookAppointment = () => {
    if (!isLoggedIn) {
      setShowPopup(true);
    } else {
      console.log("Proceed to booking");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="rehab-services-page">
      <div className="rehab-main-content">
        <div className="rehab-intro-section rehab-fade-in">
          <h2>Our Specialized Services</h2>
          <p>
            From pediatric care to geriatric rehabilitation, we provide comprehensive therapeutic solutions
            tailored to each patient's unique needs and goals.
          </p>
        </div>

        <div className="rehab-services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Sign In Required</h2>
            <p>You need to sign in to book an appointment.</p>
            <div className="button-group">
              <Link href="/signIn" className="login-btn">
                Sign In
              </Link>
              <button onClick={closePopup} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;