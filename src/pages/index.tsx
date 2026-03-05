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
import WaitlistModal from "../components/WaitlistModal";
import SponsorModal from "../components/SponsorModal";
const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onCTAClick={() => setWaitlistOpen(true)} />
      <HardTruthSection />
      <DifferentiatorSection />
      <HowItWorksSection />
      <ToluChat />
      <ObjectionsSection />
      <SponsorSection onSponsorClick={() => setSponsorOpen(true)} />
      <ScarcitySection />
      {/* <FinalCTASection onCTAClick={() => setWaitlistOpen(true)} /> */}
      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <SponsorModal open={sponsorOpen} onOpenChange={setSponsorOpen} />
    </div>
  );
};

export default Index;
