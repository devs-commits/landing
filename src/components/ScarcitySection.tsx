import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const ScarcitySection = () => (
  <section className="py-8 md:py-12 px-4 hero-bg text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
      backgroundSize: '32px 32px'
    }} />
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
          <Lock className="w-7 h-7 text-accent" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 tracking-tight">
          Why Only 1,000 Desks?
        </h2>
        <div className="text-lg text-primary-foreground/70 leading-relaxed space-y-4">
          <p>Because this is a simulated office.</p>
          <p>Offices have limited capacity.</p>
          <p>When desks fill, registration closes until the next intake.</p>
          <p className="font-bold text-accent text-xl font-heading mt-6">No extensions.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ScarcitySection;
