import { useState, useCallback } from "react";
import { motion } from "motion/react";

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      if (onNavigate) onNavigate();
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <button onClick={() => scrollToSection("hero")} className="nav-link">
          Home
        </button>
      </li>
      <li className="nav-li">
        <button onClick={() => scrollToSection("about")} className="nav-link">
          About
        </button>
      </li>
      <li className="nav-li">
        <button onClick={() => scrollToSection("work")} className="nav-link">
          Work
        </button>
      </li>
      <li className="nav-li">
        <button onClick={() => scrollToSection("contact")} className="nav-link">
          Contact
        </button>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavigation = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            <img
              src="/assets/logo.png"
              alt="logo"
              className="size-12 rounded-full p-1"
            />
            Sanket
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10, height: 0 }}
          animate={{ opacity: 1, x: 0, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={handleMobileNavigation} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
