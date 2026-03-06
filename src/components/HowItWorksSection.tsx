import { motion } from "framer-motion";
import { Building2, ClipboardCheck, Award } from "lucide-react";

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "Enter The Virtual Office",
    desc: "Choose your track: Digital Marketing, Data Analytics, or Cybersecurity.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Execute Real Tasks",
    desc: "Work under deadlines. Submit projects. Receive strict feedback.",
  },
  {
    icon: Award,
    step: "03",
    title: "Build Verifiable Proof",
    desc: "Leave with a documented portfolio, structured task history, and recommendation letter.",
  },
];

const HowItWorksSection = () => (
  <section className="py-8 md:py-12 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-10 tracking-tight"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 relative">
              <s.icon className="w-8 h-8 text-accent" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-heading font-bold flex items-center justify-center">
                {s.step}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-heading font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
