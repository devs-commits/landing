import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./../components/HeroSection";


const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onCTAClick={() => setWaitlistOpen(true)} />
    </div>
  );
};

export default Index;
