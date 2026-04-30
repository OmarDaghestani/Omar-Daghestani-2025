import { useState, useEffect } from "react";
import { scrollToSection, handleNavLinkClick } from "@/lib/scroll-utils";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let previousIsScrolled = false;

    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 10;
      if (nextIsScrolled === previousIsScrolled) return;
      previousIsScrolled = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isScrolled,
    scrollToSection,
    handleNavLinkClick,
  };
};
