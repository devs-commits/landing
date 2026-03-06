import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const objections = [
  {
    q: "\"I've Tried Courses Before.\"",
    a: "Courses teach information. WDC Labs forces execution.\n\nYou don't progress by watching. You progress by submitting work.",
  },
  {
    q: "\"What If I Can't Keep Up?\"",
    a: "Then you'll finally experience what a real workplace feels like.\n\nThat discomfort is growth.\n\nAnd you won't be alone. You'll have structured supervisors guiding you.",
  },
  {
    q: "\"₦15,000 Is A Lot.\"",
    a: "Let's be honest. ₦15k disappears every month anyway.\n\nBut a documented portfolio that increases your earning potential? That compounds.\n\nThis is not an expense. It's positioning.",
  },
  {
    q: "\"What If It Doesn't Help Me Get A Job?\"",
    a: "We can't control hiring managers. But we can control your preparedness.\n\nWhen you can:\n• Show real projects\n• Explain your decisions\n• Demonstrate structured experience\n\nYou stop sounding like every other applicant. That changes interviews.",
  },
];

const ObjectionsSection = () => (
  <section className="py-8 md:py-12px-4 relative">
    <div className="container mx-auto max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-8 tracking-tight"
      >
        You Might Be Thinking…
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {objections.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <AccordionItem value={`item-${i}`} className="glass-card rounded-xl px-5 border">
              <AccordionTrigger className="text-left font-heading font-bold text-base md:text-lg hover:text-accent transition-colors">
                {o.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed pb-5">
                {o.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ObjectionsSection;
