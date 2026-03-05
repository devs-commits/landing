import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./../components/HeroSection";
import HardTruthSection from "../components/HardTruthSection";
import DifferentiatorSection from "../components/DifferentiatorSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ToluChat from "../components/ToluChat";
import ObjectionsSection from "../components/ObjectionsSection";
import ScarcitySection from "../components/ScarcitySection";
import SponsorSection from "../components/SponsorSection";
import Footer from "../components/Footer";
const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection onCTAClick={() => setWaitlistOpen(true)} />
        <DifferentiatorSection />
        <HardTruthSection />
        <HowItWorksSection />
        <ToluChat />
        <ObjectionsSection />
        <ScarcitySection />
        <SponsorSection />
        <Footer />
    </div>
  );
};

export default Index;
