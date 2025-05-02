// app/media/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { supabase } from "@/app/components/SupabaseClient/SupabaseClient"; // Updated import
import "./ClinicPhotos.css";
import Navbar from "../components/Navbar/page";

interface Photo {
  id: string;
  photo_url: string;
  title?: string;
  description?: string;
  created_at: string;
}

const ClinicPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("uploads") // Replace with correct table name if different
          .select("*")
          .not("photo_url", "is", null)
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPhotos(data || []);
      } catch (err: Error) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading photos: {error}</p>
      </div>
    );
  }

  return (
    <div className="clinic-photos">
      <Navbar/>
      <header className="gallery-header">
        {/* <Camera size={32} /> */}
        <h1>Our Clinic Gallery</h1>
      </header>

      {photos.length === 0 ? (
        <div className="no-photos">
          <p>No photos available at the moment.</p>
        </div>
      ) : (
        <ul className="gallery">
          {photos.map((photo) => (
            <li key={photo.id} className="image-container">
              <Image
                className="gallery-image"
                src={photo.photo_url}
                alt={photo.title || "Gallery image"}
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                priority={false}
              />
              {(photo.title || photo.description) && (
                <figcaption className="overlay">
                  {photo.title && <h3>{photo.title}</h3>}
                  {photo.description && <p>{photo.description}</p>}
                </figcaption>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClinicPhotos;