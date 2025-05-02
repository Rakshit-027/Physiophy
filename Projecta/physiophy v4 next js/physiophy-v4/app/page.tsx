import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Homee from "./pages/Home/page";
import PatientVideos from "./components/PatientVideos/PatientVideos";
import About from "./pages/About/page";
import InfiniteCardSlider from "./components/InfiniteCardSlider/InfiniteCardSlider";
import Services from "./pages/Services/page";
import Contact from "./pages/Contact/page";
import FAQ from "./pages/FAQ/page";
import Footer from "./components/Footer/Footer";
import Bookappoitment from "./pages/Bookappoitment/page";
import Whatsapp from "./components/Mini/Whatsapp/Whatsaap";
import './globals.css'

export default function Home() {
  return (
    <>
    
    
    
      <div>
      <section id="home">
        <Homee />
      </section>
      <section id="patient-videos">
        <PatientVideos />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="infinite-slider">
        <InfiniteCardSlider />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="bookappoitment">
        <Bookappoitment/>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
      </div>
      
    </>
  );
}