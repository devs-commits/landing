import { motion } from "framer-motion";
import { Button } from "./../components/ui/button";
import { Heart } from "lucide-react";

interface SponsorSectionProps {
  onSponsorClick: () => void;
}

const SponsorSection = ({ onSponsorClick }: SponsorSectionProps) => (
  <section className="py-24 md:py-32 px-4 bg-secondary relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
          <Heart className="w-7 h-7 text-accent" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 tracking-tight">
          Can't Pay Right Now?
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-10">
          <p>Send a sponsor link to:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["A mentor", "A family member abroad", "A friend already in tech"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">{item}</span>
            ))}
          </div>
          <p className="mt-6">
            For <strong className="text-accent font-bold">$10</strong>, they can sponsor your first month.<br />
            For <strong className="text-accent font-bold">$30</strong>, your full 3-month journey.
          </p>
          <p className="font-semibold text-foreground text-lg">Don't ask for urgent 2k.<br />Ask for a career.</p>
        </div>
        <Button variant="cta-outline" size="lg" onClick={onSponsorClick}>
          Ask Someone To Sponsor Me
        </Button>
      </motion.div>
    </div>
  </section>
);

export default SponsorSection;