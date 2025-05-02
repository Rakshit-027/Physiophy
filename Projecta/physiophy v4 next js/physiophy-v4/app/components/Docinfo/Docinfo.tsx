import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import Image from "next/image"; // Use next/image for optimized images
import styled from "styled-components";
import "./Docinfo.css";

// Define interface for doctor data
interface Doctor {
  id: number;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  slug: string;
}

const Docinfo = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "DR. VAGISH KATARIYA",
      role: "CONSULTANT PEDIATRIAN AND DIRECTOR,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(4).png",
      specialties: ["Dermatology", "Cosmetic Surgery", "Skin Care"],
      slug: "DrVagesh",
    },
    {
      id: 2,
      name: "DR. GEET KATARIYA",
      role: "CONSULTANT RADIOLOGIST,CHAIRMAN ,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(3).png",
      specialties: ["Dermatology", "Hair Treatment", "Laser Therapy"],
      slug: "DrGeet",
    },
    {
      id: 3,
      name: "DR. TANVI KATARIYA",
      role: "FOUNDER AND SENIOR NEURO CONSULTANT PHYSIOTHERAPIST ,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(1).png",
      specialties: ["Trichology", "Hair Transplant", "Dermatology"],
      slug: "DrTanvi",
    },
    {
      id: 4,
      name: "DR. URVASHI GAHUKAR",
      role: "BRANCH INCHARGE AND ORTHO CONSULTANT PHYSIOTHERAPIST,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(2).png",
      specialties: ["Trichology", "Hair Transplant", "Dermatology"],
      slug: "DrUrvashi",
    },
    {
      id: 5,
      name: "DR. MEGHA LANJEWAR",
      role: "CONSULTANT NEUROPHYSIOTHERAPIST,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/meghna-croped.png",
      specialties: [""],
      slug: "DrMegha",
    },
    {
      id: 6,
      name: "DR. SAGAR SAWLANI",
      role: "CONSULTANT PHYSIOTHERAPIST,PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/sagar-crop.png",
      specialties: [""],
      slug: "DrSagar",
    },
  ];

  return (
    <StyledWrapper>
      <div className="docinfo-container">
        <div className="docinfo-header">
          <span className="docinfo-subtitle-accent">Our Team</span>
          <h2 className="docinfo-title">MEET OUR EXPERTS</h2>
          <div className="docinfo-decorative-line">
            <span className="docinfo-line-left"></span>
            <span className="docinfo-diamond"></span>
            <span className="docinfo-line-right"></span>
          </div>
        </div>

        <div className="docinfo-cards-container">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="docinfo-card card">
              <div className="blob" />
              <div className="bg" />
              <div className="card-content">
                <div className="docinfo-image-wrapper">
                  <div className="docinfo-image-container">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={300} // Adjust based on your design
                      height={300} // Adjust based on your design
                      className="docinfo-image"
                    />
                    <div className="docinfo-image-overlay"></div>
                  </div>
                </div>
                <div className="docinfo-content">
                  <h4 className="docinfo-doctor-name">{doctor.name}</h4>
                  <p className="docinfo-doctor-role">{doctor.role}</p>
                  <Link href={`/Doctors/${doctor.slug}`} className="docinfo-view-more">
                    <span>VIEW MORE</span>
                    <svg className="docinfo-arrow" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 358px;
    height: 421px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 350px;
    height: 410px;
    z-index: 2;
    background: #dddafe;
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 15px solid #39FF14;
    background-color: rgba(255, 0, 0, 0.4);
    filter: blur(16px);
    animation: border-move 6s linear infinite;
  }

  @keyframes border-move {
    0% {
      top: 0%;
      left: 0%;
      transform: translate(0%, 0%);
    }
    25% {
      top: 0%;
      left: 100%;
      transform: translate(-100%, 0%);
    }
    50% {
      top: 100%;
      left: 100%;
      transform: translate(-100%, -100%);
    }
    75% {
      top: 100%;
      left: 0%;
      transform: translate(0%, -100%);
    }
    100% {
      top: 0%;
      left: 0%;
      transform: translate(0%, 0%);
    }
  }

  .card-content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .docinfo-image-wrapper {
    position: relative;
    margin-top: 25px;
  }

  .docinfo-content {
    margin-top: -39px;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .docinfo-doctor-name {
    color: #1a365d;
    margin: 0.75rem 0;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .docinfo-doctor-role {
    color: #4a5568;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export default Docinfo;