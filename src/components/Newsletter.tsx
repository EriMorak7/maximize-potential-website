"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Mock API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="space-y-4">
        <h4 className="text-xl font-bold font-serif text-accent uppercase tracking-[0.2em]">Weekly Insights</h4>
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
          Join 500+ professionals receiving strategic financial and consulting insights every Monday morning.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white font-sans text-sm focus:ring-2 focus:ring-accent outline-none placeholder:text-gray-500 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="flex-none bg-accent text-primary px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group-hover:shadow-lg group-hover:-translate-y-[1px]"
          >
            {status === "loading" ? (
              <span className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
            ) : status === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <>
                Subscribe <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-8 left-0 text-accent text-[12px] font-bold"
            >
              🎉 Success! Welcome to the strategy list.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
