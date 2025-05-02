// app/about/page.tsx (Server Component)
import AboutClient from './AboutClient';

export const metadata = {
  title: "Why Choose us | Nagpur's Trusted Physiotherapy Experts",
  description: "Meet our team of certified physiotherapists in Nagpur specializing in pain relief and rehabilitation.",
  openGraph: {
    images: ["/app/assets/about-img.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}