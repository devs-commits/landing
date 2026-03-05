import { motion } from "framer-motion";
import { User, Target, Code, Compass } from "lucide-react";

const roles = [
  { name: "Tolu", title: "AI HR Manager", desc: "You report to Tolu", icon: User, color: "bg-accent/15 text-accent" },
  { name: "Emem", title: "Project Manager", desc: "You get pushed by Emem", icon: Target, color: "bg-warning/15 text-warning" },
  { name: "Sola", title: "Tech Lead", desc: "You get critiqued by Sola", icon: Code, color: "bg-ring/15 text-ring" },
  { name: "Kemi", title: "Career Coach", desc: "You get guided by Kemi", icon: Compass, color: "bg-destructive/15 text-destructive" },
];

const DifferentiatorSection = () => (
  <section className="py-24 md:py-32 px-4 hero-bg text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
      backgroundSize: '32px 32px'
    }} />
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 tracking-tight">
          This Is Not Passive Learning.
        </h2>
        <p className="text-lg text-primary-foreground/60 mb-12">Inside WDC Labs, you work with four AI supervisors:</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl p-5 bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${role.color}`}>
                  <role.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">{role.name}</p>
                  <p className="text-sm text-primary-foreground/50">{role.title}</p>
                </div>
              </div>
              <p className="text-primary-foreground/70">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg leading-relaxed text-primary-foreground/70 space-y-2"
        >
          <p>You execute tasks. You meet deadlines. You defend your work.</p>
          <p className="gradient-text font-bold text-xl font-heading">
            It feels real because it is structured to simulate real pressure.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default DifferentiatorSection;