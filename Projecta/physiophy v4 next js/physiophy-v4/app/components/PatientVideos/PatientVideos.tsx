"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "./PatientVideos.css";

interface VideoItem {
  id: number;
  src: string;
  poster: string;
}

const VideoPlayer = ({ src, poster }: VideoItem) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play().then(() => setIsPlaying(true));
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      if (video) {
        const value = (video.currentTime / video.duration) * 100;
        setProgress(value);
      }
    };

    video?.addEventListener("timeupdate", updateProgress);
    video?.addEventListener("loadeddata", () => setIsLoaded(true));

    return () => {
      video?.removeEventListener("timeupdate", updateProgress);
      video?.removeEventListener("loadeddata", () => setIsLoaded(true));
    };
  }, []);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="video-container">
      {!isLoaded && (
        <div className="video-poster">
          <Image
            src={poster}
            alt="Video poster"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
      )}
      <video
        ref={videoRef}
        src={isIntersecting ? src : ""}
        poster={poster}
        loop
        playsInline
        onClick={togglePlay}
        preload="none"
        loading="lazy"
        className={isLoaded ? "video-loaded" : "video-loading"}
      />
      <div className="video-controls">
        <div className="controls-wrapper">
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
          <button onClick={toggleMute} className="control-btn">
            {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
          </button>
        </div>
        <div className="progress-container" onClick={handleProgressClick}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      {!isPlaying && (
        <div className="play-overlay" onClick={togglePlay}>
          <Play size={50} />
        </div>
      )}
    </div>
  );
};

function PatientVideos() {
  const videos: VideoItem[] = [
    { 
      id: 1, 
      src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/Patientsix.mp4", 
      poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Siddharth%20(Spinal%20Cord%20Injury).jpg" 
    },
    { 
      id: 2, 
      src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/VID-20250207-WA0001.mp4", 
      poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Rakshit%20(GBS).jpg" 
    },
    { 
      id: 3, 
      src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/Patientseven.mp4", 
      poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Bhavika%20(Developmental%20Delay).jpg" 
    },
  ];

  return (
    <div className="patient-videos">
      <h1 className="title">Success Stories</h1>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            src={video.src}
            poster={video.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default PatientVideos;