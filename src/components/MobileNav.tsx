"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "timeline", name: "TIMELINE" },
  { id: "work", name: "MY WORK" },
  { id: "tech", name: "MY TECH" },
  { id: "contact", name: "CONTACT" },
];

export default function MobileNav() {
  const [active, setActive] = useState("timeline");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= pos) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 sidebar-glass border-b border-[var(--accent-light)]">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold font-pixelify text-[var(--text-primary)] shadow-accent">
            Aidan Alexander
          </h1>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 liquid-glass flex flex-col items-center justify-center space-y-1.5 pixel-border"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[var(--primary)] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--primary)] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--primary)] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="p-4 border-t border-[var(--accent-light)]">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left py-3 px-4 liquid-glass transition-all duration-300 font-bold font-pixelify ${
                      active === section.id
                        ? "text-[var(--primary-dark)] border-l-4 border-[var(--primary)]"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="lg:hidden h-16" />
    </>
  );
}
