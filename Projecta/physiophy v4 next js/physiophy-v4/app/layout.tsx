import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import Whatsaap from "./components/Mini/Whatsapp/Whatsaap";

// SEO Metadata
export const metadata: Metadata = {
  title: "Physiophy Physiotherapy Clinic | Best Rehab & Pain Relief in Nagpur",
  description:
    "Physiophy is Nagpur’s leading physiotherapy clinic offering expert rehab, pain relief, sports injury, and wellness treatments by qualified professionals.",
  keywords: [
    "Physiophy",
    "Physiophy Clinic",
    "Physiotherapy Nagpur",
    "Pain Relief",
    "Rehab Center Nagpur",
    "Sports Injury Treatment",
    "Dr. Tanvi Physiophy",
    "Wellness Therapy",
    "Best Physio in Nagpur",
    "Physical Therapy Clinic"
  ],
  authors: [{ name: "Physiophy Physiotherapy Clinic" }],
  creator: "Physiophy",
  publisher: "Physiophy",
  metadataBase: new URL("https://www.physiophy.com"),
  openGraph: {
    title: "Physiophy Physiotherapy Clinic | Best Rehab in Nagpur",
    description:
      "Top-rated physiotherapy clinic in Nagpur for pain relief, injury recovery, and postural correction. Trusted by hundreds of patients.",
    url: "https://www.physiophy.com",
    siteName: "Physiophy",
    images: [
      {
        url: "https://www.physiophy.com/assets/hero.webp",
        width: 1200,
        height: 630,
        alt: "Physiophy Clinic Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiophy Physiotherapy Clinic, Nagpur",
    description:
      "Expert physiotherapy and rehabilitation in Nagpur. Restore mobility, relieve pain, and recover faster at Physiophy.",
    images: ["https://www.physiophy.com/assets/hero.webp"],
    creator: "@physiophy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        {/* WhatsApp Floating Button */}
        <div className="fixed right-4 bottom-4 z-2000 hover:scale-110 transition-transform duration-200">
          <Whatsaap />
        </div>
      </body>
    </html>
  );
}
