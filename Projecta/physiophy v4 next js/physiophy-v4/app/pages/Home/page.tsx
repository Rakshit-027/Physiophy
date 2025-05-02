"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// In Next.js 13+ App Router, use metadata instead of Head
// import Head from "next/head"; // Commented out
import "./page.css";
import ArrowLeft from "@/app/components/Mini/ArrowLeft/ArrowLeft";
import ArrowRightt from "@/app/components/Mini/ArrowRightt/ArrowRightt";
import Founder from "@/app/components/Founder/Founder";
import ServicesInfo from "@/app/components/ServicesInfo/ServicesInfo";
import Docinfo from "@/app/components/Docinfo/Docinfo";

// Define interface for review data
interface Review {
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
}

const reviewsData: Review[] = [
  {
    name: "Dr. Rajesh Gadekar",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLvWkxIeNTzZa8dzLkxYfFjdZKC4fp8eREkfnT3yWfKa8gVQFM=w60-h60-p-rp-mo-br100",
    text: "After my heart bypass, I lost significant strength & mobility in my left arm. Thanks to Dr. Tanvi for her exceptional physiotherapy.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Nageen Farokhmanesh",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLvWkxIeNTzZa8dzLkxYfFjdZKC4fp8eREkfnT3yWfKa8gVQFM=w60-h60-p-rp-mo-br100",
    text: "Thanks to Dr. Tanvi for her wonderful treatment & care. Her friendly nature & personal attention made my therapy sessions easier.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Dr. Mayank Bhansali",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLvWkxIeNTzZa8dzLkxYfFjdZKC4fp8eREkfnT3yWfKa8gVQFM=w60-h60-p-rp-mo-br100",
    text: "As a dentist, I struggled with chronic pain affecting my work. After a few sessions with Dr. Tanvi my pain vanished & I recovered quickly.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Shriya Mehta",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLvWkxIeNTzZa8dzLkxYfFjdZKC4fp8eREkfnT3yWfKa8gVQFM=w60-h60-p-rp-mo-br100",
    text: "Dr. Tanvi is an exceptional physiotherapist! Her expertise, personalized approach, and care have made a huge difference in my recovery. The studio is clean, well-equipped, and welcoming. I highly recommend her to anyone seeking effective and professional physiotherapy!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Gauri Malviya",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJpFZb97DOGIPL8Ig_Rkfd25-iJI_0jQLTdM3w09U5_-44cLfg=w60-h60-p-rp-mo-br100",
    text: "I had an amazing experience at this neurophysiotherapy centre! The service is truly excellent - the therapists are knowledgeable, professional, and tailored their treatment to my specific needs. What really stood out, though, was the friendly and welcoming staff. Five stars isn't enough - I'd give it ten stars if I could!",
    rating: 4,
    date: "1 month ago"
  },
  {
    name: "Nishad Katkoria",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjU45MKsyHUNfinmboa_YkkcS5Em2qNBa3_v4RCXtqFyi6ewyk_i=w60-h60-p-rp-mo-br100",
    text: "I went to Dr Tanvi for my back pain issue which had become chronic over the years and was amazed by the quality of service and treatment provided in the clinic. Happy to say that after years of treatment and medication, my pain is now gone! Highly recommend to visit for any physio related issue.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Gunvant Asare",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXt2NRikrIojahJMwpCCbV82IQIN2JMo8v8U4RMzJsQ4onGN7gObg=w60-h60-p-rp-mo-br100",
    text: "I recently had physiotherapy treatment at Physiophy, Dhantoli, Nagpur, met Dr Tanvi Katariya and I can't say enough good things about my experience. The team was professional, knowledgeable, and incredibly supportive throughout my recovery.",
    rating: 4,
    date: "5 months ago"
  },
  {
    name: "Faizan Qureshi",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXPVBMlpLgFrrzvE40ObnggL_KONPUfchQ7ut4Py0iGKaHUHng=w60-h60-p-rp-mo-br100",
    text: "Exceptional care from knowledgeable staff. Clean, modern facilities. My recovery exceeded expectations. Highly recommend Physiophy clinic for effective treatment and great service.",
    rating: 5,
    date: "7 months ago"
  },
  {
    name: "Shailendra Purale",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVCyGhbOtfCcXG3_FNLEb2EUxTya95Hb-SMgRdHz8q5MCr4EN0=w60-h60-p-rp-mo-br100",
    text: "My experience was very good at this clinic. Proper guidance & treatment was given to me. I feel very good and relaxed. Thank you for giving me the best treatment to Doctor & their staff.",
    rating: 4,
    date: "7 months ago"
  },
  {
    name: "Sneha Chandghode",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVBdFtWx27giy_HtwGMRJwOE_W1nRqh-S8IA7qPIAXsIQlEWGZz=w60-h60-p-rp-mo-ba2-br100",
    text: "It’s one of the best physiotherapy centres. Including the service and staff, everything was so good. Must visit once.",
    rating: 5,
    date: "7 months ago"
  },
  {
    name: "Vaibhav Zawar",
    image: "https://via.placeholder.com/150",
    text: "Great experience! Best doc providing excellent service.",
    rating: 4,
    date: "5 months ago"
  },
  {
    name: "Priti Choudhary",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKYN7HOB9uoP8S0G8faeCRdfJdMxEy0GNL4dmWaI7wmydGiwg=w60-h60-p-rp-mo-br100",
    text: "I can't thank you enough for the special care you have provided. Thank you so much for the great care ❤",
    rating: 5,
    date: "7 months ago"
  },
  {
    name: "Champadevi Gundecha",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJqBMQfgXM1TbNoC5pNmZjCI3L0pK2evGvH7GWmZZY73hWd=w60-h60-p-rp-mo-br100",
    text: "Best clinic and supreme trained doctors. I was relieved in no time.",
    rating: 4,
    date: "7 months ago"
  },
  {
    name: "Adinath Bhagat",
    image: "https://via.placeholder.com/150",
    text: "Good treatment done in this hospital. I am satisfied with the services.",
    rating: 5,
    date: "7 months ago"
  },
  {
    name: "Manda Waghmare",
    image: "https://via.placeholder.com/150",
    text: "Good clinic and doctors are highly qualified.",
    rating: 4,
    date: "6 months ago"
  },
  {
    name: "Manisha Hivse",
    image: "https://via.placeholder.com/150",
    text: "Majha mulga 4 varsha cha aahe ani toh chalu navta shakt na ubha. Me Physiophy clinic mdhe aali, tyachi treatment shuru keli. Aata toh ubha rahu shakt aani pakdun chalnya cha prayatna karto. Me khup khush aahe improvement ni.",
    rating: 5,
    date: "1 month ago"
  }
  // ... (rest of reviewsData unchanged)
];

const sliderImages = [
  {
    url: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/slider/image-3-3-3-3.jpeg',
    slogan: "Expert Physical Therapy Care",
  },
  {
    url: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/slider/sc2.jpeg",
    slogan: "State-of-the-Art Facilities",
  },
  {
    url: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/slider/sc3.jpeg",
    slogan: "Advanced Rehabilitation Solutions",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  // Type intervalRef correctly
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Auto-scroll for reviews & slider
  useEffect(() => {
    if (!isAutoScrollPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrollPaused]);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  const prevReview = () => setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  const handleMouseEnter = () => setIsAutoScrollPaused(true);
  const handleMouseLeave = () => setIsAutoScrollPaused(false);
  const handleDotClick = (index: number) => setCurrentIndex(index);

  return (
    <div className="home-">
      {/* Replace Head with metadata in Next.js 13+ App Router */}
      {/* <Head>
        <title>Physiophy - Best Physiotherapy Clinic in Nagpur</title>
        <meta name="description" content="Experience top physiotherapy care at Physiophy in Nagpur. Expert treatments for pain relief, rehabilitation, and wellness." />
        <meta name="keywords" content="Physiotherapy, Pain Relief, Rehabilitation, Nagpur, Physiophy, Dr. Tanvi Katariya" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Physiophy - Your Bridge Between Disability and Ability" />
        <meta property="og:description" content="Personalized physiotherapy treatments to help you move better, feel stronger, and live pain-free." />
        <meta property="og:image" content="https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/Hero/WhatsApp%20Image%202025-02-24%20at%207.37.45%20PM%20(1).jpeg" />
        <meta property="og:url" content="https://www.physiophy.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.physiophy.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.physiophy.com/",
            "name": "Physiophy",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.physiophy.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://www.physiophy.com/about",
              "https://www.physiophy.com/services",
              "https://www.physiophy.com/testimonials",
              "https://www.physiophy.com/contact",
              "https://www.physiophy.com/appointment"
            ]
          }
        `}</script>
      </Head> */}
      {/* Move metadata to app/layout.tsx or use next/head with children if needed */}
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slide">
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                className="slide-image"
              />
              <div className="slide-content">
                <h2>{image.slogan}</h2>
                <div className="slider-buttons">
                  <Link href="#bookappoitment" className="slider-btn primary">
                    Book Appointment
                  </Link>
                  <Link href="#contact" className="slider-btn secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          <ChevronLeft size={24} />
        </button>
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide">
          <ChevronRight size={24} />
        </button>
      </div>
      <Founder />
      <Docinfo />
      <div className="physio-cont">
        <div className="physio-container">
          <ServicesInfo />
          <div className="recovery-stories-hero">
            <h1>Real People, Real Recoveries</h1>
          </div>
          <section className="physio-testimonials">
            <div
              className="physio-testimonials-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="physio-nav-btn left" onClick={prevReview} aria-label="Previous Testimonial">
                <ArrowLeft />
              </div>
              <div
                className="physio-testimonials-slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={(e: React.TouchEvent) => {
                  const touchStartX = e.touches[0].clientX;
                  const handleTouchMove = (moveEvent: TouchEvent) => {
                    const touchEndX = moveEvent.touches[0].clientX;
                    if (touchStartX - touchEndX > 50) nextReview();
                    if (touchEndX - touchStartX > 50) prevReview();
                    document.removeEventListener("touchmove", handleTouchMove);
                  };
                  document.addEventListener("touchmove", handleTouchMove);
                  document.addEventListener("touchend", () =>
                    document.removeEventListener("touchmove", handleTouchMove),
                    { once: true }
                  );
                }}
              >
                {reviewsData.map((review, index) => (
                  <div
                    key={index}
                    className={`physio-testimonial-card ${index === currentIndex ? "active" : ""}`}
                  >
                    <div className="physio-testimonial-header">
                      <img
                        src={review.image || `https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`}
                        alt={`${review.name}'s avatar`}
                        className="physio-testimonial-image"
                      />
                      <div className="physio-testimonial-info">
                        <h3 className="physio-testimonial-author">{review.name}</h3>
                        <p className="physio-testimonial-time">{review.date}</p>
                      </div>
                    </div>
                    <p className="physio-testimonial-text">{review.text}</p>
                    <div className="physio-testimonial-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="physio-star-icon" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="physio-nav-btn right" onClick={nextReview} aria-label="Next Testimonial">
                <ArrowRightt />
              </div>
              <div className="physio-testimonial-dots">
                {reviewsData.map((_, index) => (
                  <button
                    key={index}
                    className={`physio-dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
          <div className="pain-to-power-hero">
            <h1 className="head">From Pain to Power: Watch How Physiotherapy Changes Lives</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;