/**
 * Utility functions for smooth scrolling behavior
 */

export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    // Temporarily enable smooth scrolling
    document.documentElement.setAttribute("data-smooth-scroll", "true");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Disable smooth scrolling after animation completes
    setTimeout(() => {
      document.documentElement.removeAttribute("data-smooth-scroll");
    }, 1000);
  }
};

export const handleNavLinkClick = (
  e: React.MouseEvent,
  sectionId: string,
  onMenuClose?: () => void
) => {
  e.preventDefault();

  // Close mobile menu if callback provided
  if (onMenuClose) {
    onMenuClose();
  }

  scrollToSection(sectionId);
};
