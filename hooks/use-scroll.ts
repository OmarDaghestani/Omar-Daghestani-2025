import { useState, useEffect } from "react";
import { scrollToSection, handleNavLinkClick } from "@/lib/scroll-utils";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isScrolled,
    scrollToSection,
    handleNavLinkClick,
  };
};
