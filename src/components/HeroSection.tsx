import { motion } from "framer-motion";
import { Button } from "./../components/ui/button";
import { AlertTriangle, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => (
  <section className="min-h-screen flex items-center justify-center pt-20 pb-5 px-4 hero-bg text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[200px]" />
    </div>

    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

    <div className="container mx-auto text-center relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-medium mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Batch 1 — Limited to 1,000 Desks
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[0.95] mb-8 tracking-tight"
      >
        You Don't Need
        <br />
        Another Course.
        <br />
        <span className="gradient-text">You Need Experience.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-base md:text-lg lg:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed space-y-1"
      >
        <p>By 2026, entry-level jobs will demand 2 years of experience.</p>
        <p className="font-semibold text-primary-foreground/90">WDC Labs gives you that experience in 90 days.</p>
        <p className="text-primary-foreground/50">Through simulated work. Not theory.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-2 text-warning font-semibold mb-10"
      >
        <AlertTriangle className="w-5 h-5" />
        <span>Only 1,000 Desks Per Batch.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center"
      >
        <Button variant="cta" size="xl" onClick={onCTAClick} className="animate-pulse-glow">
          Secure My Spot
        </Button>
        <p className="text-sm text-primary-foreground/40 mt-4">No credit card required.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8"
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/30 mx-auto animate-bounce" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
