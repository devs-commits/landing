import { motion } from "framer-motion";

const HardTruthSection = () => (
  <section className="py-8 md:py-12 px-4 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 tracking-tight">
          Let's Be Honest.
        </h2>
        <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6">
          <p>You've done the courses.<br />You've watched the tutorials.<br />You've updated your CV.</p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl border-l-4 border-accent pl-6 py-2"
          >
            But when HR asks,<br />"What have you <em>actually</em> built?"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-foreground font-extrabold text-3xl md:text-4xl font-heading"
          >
            You hesitate.
          </motion.p>
          <p className="text-accent font-semibold text-lg">That hesitation is costing you interviews.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HardTruthSection;
