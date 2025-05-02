"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import "./HomeCard.css";

// Define interface for images array
interface SlideImage {
  src: string;
  alt: string;
}

const HomeCard = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const animateSlider = async () => {
      if (!trackWidth || !trackRef.current) return;

      if (!isPaused) {
        await controls.start({
          x: [0, -trackWidth / 2],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        });
      } else {
        controls.stop();
      }
    };

    animateSlider();
  }, [controls, isPaused, trackWidth]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    controls.stop();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
  };

  const images: SlideImage[] = [
    { src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Ali%20Irani%20(1).jpg", alt: "Slide 1" },
    { src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Paresh%20Rawal%20(1).jpg", alt: "Slide 2" },
    { src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/Dr.%20Tanu%20Jain%20(1).jpg", alt: "Slide 3" },
    { src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Velumani%20sir%20(1).jpg", alt: "Slide 4" },
  ];

  return (
    <div className="home-card-slider-container">
      <motion.div
        ref={trackRef}
        className={`home-card-slider-track ${isPaused ? "home-card-paused" : ""}`}
        animate={controls}
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        drag={isMobile ? "x" : false}
        dragConstraints={{
          left: -(trackWidth / 2) || -500,
          right: 0,
        }}
        dragElastic={0.2}
        dragMomentum={false}
        style={{
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          msUserSelect: "none",
        }}
      >
        {[...images, ...images].map((image, index) => (
          <motion.div
            key={index}
            className="home-card-item"
            whileHover={isMobile ? {} : { scale: 1.05, zIndex: 10 }}
            initial={{ scale: 1 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300} // Adjust based on your design
              height={300} // Adjust based on your design
              className="home-card-image"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeCard;