"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-[#c9a05f] text-[#1a2332] p-3 rounded-full shadow-2xl transition-all duration-300 hover:bg-[#b8860b] hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#c9a05f]/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};
