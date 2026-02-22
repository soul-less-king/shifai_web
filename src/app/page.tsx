import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Region from "@/components/Region";
import Security from "@/components/Security";
import Documents from "@/components/Documents";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Region />
        <Security />
        <Documents />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
