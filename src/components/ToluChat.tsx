import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

const toluResponses = [
  "Interesting. But I've heard that before. Give me something specific,what's the one thing you can do better than 9,999 other applicants?",
  "Hmm. You're getting warmer. Last chance, if I give you a desk, what will you ship in your first week?",
  "Noted. I'll review your profile. If you're serious, secure your spot before the desks fill up.",
];

const ToluChat = () => {
  const [messages, setMessages] = useState<{ role: "tolu" | "user"; text: string }[]>([
    {
      role: "tolu",
      text: "I'm scanning your profile. It looks empty. Convince me in one sentence: Why should I give you a desk at WDC Labs instead of the 10,000 other students on the waitlist?",
    },
  ]);
  const [input, setInput] = useState("");
  const [turnsLeft, setTurnsLeft] = useState(3);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || turnsLeft <= 0 || isTyping) return;

    const userMsg = input.trim();
    setInput("");
    const newTurns = turnsLeft - 1;
    setTurnsLeft(newTurns);
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "tolu", text: toluResponses[3 - newTurns - 1] || toluResponses[2] },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 px-4 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Meet Your AI HR
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 tracking-tight">
            Meet Tolu. <span className="gradient-text">Your Nightmare.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Tolu is your AI HR Manager. You get 3 chances to impress her.
            Because real HR doesn't give unlimited retries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/5"
        >
          <div className="bg-chat px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent text-sm">
                T
              </div>
              <div>
                <p className="font-heading font-semibold text-primary-foreground">Tolu (AI HR)</p>
                <p className="text-xs text-accent">● Status: JUDGING YOU</p>
              </div>
            </div>
            <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${turnsLeft > 0 ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"}`}>
              {turnsLeft} TURN{turnsLeft !== 1 ? "S" : ""} LEFT
            </span>
          </div>

          <div className="bg-chat/95 p-5 min-h-[280px] max-h-[400px] overflow-y-auto space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={msg.role === "tolu" ? "" : "flex justify-end"}
                >
                  {msg.role === "tolu" && (
                    <p className="text-xs font-semibold text-primary-foreground/60 mb-1">Tolu</p>
                  )}
                  <div
                    className={`rounded-xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${
                      msg.role === "tolu"
                        ? "bg-chat-bubble text-primary-foreground"
                        : "bg-accent text-accent-foreground ml-auto"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex gap-1 px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary-foreground/40"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                  />
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-chat border-t border-primary-foreground/10 p-4 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={turnsLeft > 0 ? "Type your defense here..." : "No turns remaining."}
              disabled={turnsLeft <= 0 || isTyping}
              className="flex-1 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 outline-none text-sm"
            />
            <button
              type="submit"
              disabled={turnsLeft <= 0 || isTyping || !input.trim()}
              className="text-primary-foreground/50 hover:text-accent transition-colors disabled:opacity-30"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ToluChat;
