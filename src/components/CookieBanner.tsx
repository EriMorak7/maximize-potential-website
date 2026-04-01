"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto bg-primary border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-10 opacity-5 pointer-events-none">
                <Cookie className="w-32 h-32 rotate-12" />
            </div>
            
            <div className="flex-1 space-y-2">
              <h4 className="text-xl font-bold text-accent font-serif">We Value Your Privacy</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies in accordance with our Privacy Policy and NDPR standards.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm whitespace-nowrap"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-8 py-3 bg-accent text-primary font-bold rounded-lg shadow-lg hover:bg-accent/90 transition-all text-sm whitespace-nowrap"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
