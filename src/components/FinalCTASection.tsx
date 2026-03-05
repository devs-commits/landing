import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-10 tracking-tight leading-tight">
          The Students Who Start Now
          <br />
          <span className="gradient-text">Will Dominate 2026.</span>
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-3 mb-12">
          <p>AI is reducing entry-level roles.<br />Global competition is rising.<br />Employers want proof, not potential.</p>
          <p className="font-bold text-foreground text-xl md:text-2xl font-heading mt-6">The gap is widening.</p>
          <p>You either move early.<br />Or you wait.</p>
        </div>
        <Button variant="cta" size="xl" onClick={onCTAClick} className="group">
          Join The Waitlist
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">See your position instantly.</p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
