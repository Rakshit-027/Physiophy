"use client";

import React from "react";
import Image from "next/image";
import "./Founder.css";
import ProFileCard from "@/app/components/ProFileCard/ProFileCard";
import ShinyText from "@/app/components/Mini/ShinyText/ShinyText";
import ScrollReveal from "@/app/components/ScrollReveal/ScrollReveal";
import HomeCard from "@/app/components/HomeCard/HomeCard";

// Image imports with next/image
import FounderImage from "@/app/assets/7.jpg";
import pareshalImg from "@/app/assets/Celeb/With Paresh Rawal (1).jpg";
import aliirani from "@/app/assets/Celeb/With Dr. Ali Irani (1).jpg";
import TanuJain from "@/app/assets/Celeb/Dr. Tanu Jain (1).jpg";
import Velu from "@/app/assets/Celeb/With Dr. Velumani sir (1).jpg";

// Interface for photos array
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/Dr.%20Tanu%20Jain%20(1).jpg", alt: "Photo 1" },
  { id: 2, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Ali%20Irani%20(1).jpg", alt: "Photo 2" },
  { id: 3, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Velumani%20sir%20(1).jpg", alt: "Photo 3" },
  { id: 4, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Paresh%20Rawal%20(1).jpg", alt: "Photo 4" },
];

const Founder = () => {
  return (
    <div className="founder-container">
      <div className="content-wrapper">
        <div className="story-section">
          <h2 className="story-title">The Story Of Founder From Passion To Practice</h2>

          <div className="story-content">
            <div className="text-section">
              <ScrollReveal className="story-paragraph">
                Physiophy is not just a rehabilitation center—it is a space of
                transformation, resilience, and hope. Founded by Dr. Tanvi
                Katariya, a renowned physiotherapist with over five years of
                hands-on experience, Physiophy was built on the belief that
                healing goes beyond recovery.
              </ScrollReveal>

              <ScrollReveal className="story-paragraph">
                As a celebrity physiotherapist, Dr. Katariya has treated
                esteemed personalities, yet her true passion lies in making world-class
                physiotherapy accessible to all. With a deep commitment to
                patient-centric care, she has redefined physiotherapy as
                more than just treatment—it is a movement toward
                strength, innovation, and excellence.
              </ScrollReveal>

              <ScrollReveal className="story-paragraph">
                "Every patient is not just a case but a story, and at Physiophy,
                every story is given the attention, expertise, and dedication
                it deserves. This is a place where science meets compassion,
                where barriers are broken, and where every step forward is a
                victory."
              </ScrollReveal>
              <p className="quote-text">
                -At Physiophy, we don't just heal we transform lives
              </p>
            </div>

            <div className="profile-section">
              <ProFileCard />
            </div>
          </div>
        </div>
        <HomeCard />
        {/* Uncomment this section if needed, syntax is corrected */}
        {/* <div className="celeb">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-container">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Founder;