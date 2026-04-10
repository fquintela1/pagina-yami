import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import BoldStrip from "@/components/BoldStrip";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import PatternDivider from "@/components/PatternDivider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <BoldStrip />
      <Services />
      <Testimonials />
      <PatternDivider />
      <Contact />
      <Footer />
    </>
  );
}
