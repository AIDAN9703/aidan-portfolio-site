"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  { id: "timeline", name: "TIMELINE" },
  { id: "work", name: "MY WORK" },
  { id: "tech", name: "MY TECH" },
  { id: "contact", name: "CONTACT" },
];

export default function SideBarNav() {
  const [active, setActive] = useState("timeline");

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
  };

  return (
    <div className="flex flex-col h-full sidebar-glass">
      {/* Header Section */}
      <div className="p-6">
        <div className="text-center">
          {/* Headshot */}
          <div className="mb-4 mt-2">
            <Image
              src="/images/headshot.jpeg"
              alt="Aidan"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto pixel-border object-cover object-top"
            />
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold font-pixelify text-[var(--text-primary)] shadow-accent flex">
            Aidan Alexander
          </h1>
          <p className="text-base text-[var(--primary)] font-bold flex">
            Software Developer
          </p>
          <p className="text-base text-[var(--primary)] font-bold flex">
            Pittsburgh, PA
          </p>

          {/* Bio Section */}
          <div className="my-6 p-4 border-t border-b border-[var(--accent-light)]">
            <p className="text-sm text-[var(--primary-light)] leading-relaxed font-medium">
              Life-long hockey player with an entrepreneurial spirit. Started in
              business school but found my true passion in tech. Now building
              the future, one line of code at a time.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 p-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--card-bg)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-all duration-300 group pixel-border"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--text-primary)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--card-bg)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-all duration-300 group pixel-border"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--text-primary)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:your.email@example.com"
              className="w-10 h-10 bg-[var(--card-bg)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-all duration-300 group pixel-border"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--text-primary)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 14.182L1.636 7.091V5.457L12 12.545l10.364-7.088v1.634L12 14.182z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Section - moved up and simplified */}
      <nav className="px-6" role="navigation" aria-label="Main navigation">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollTo(section.id)}
                className="relative overflow-hidden py-3 px-2 transition-all duration-300 group w-full text-left liquid-glass"
                aria-current={active === section.id ? "page" : undefined}
              >
                {/* Underline slide animation */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-[var(--primary)] transition-transform duration-300 ease-out ${
                    active === section.id
                      ? "translate-x-0 w-full"
                      : "translate-x-[-100%] w-full group-hover:translate-x-0"
                  }`}
                />

                {/* Text */}
                <span
                  className={`relative z-10 text-lg font-bold shadow-accent transition-colors duration-300 ${
                    active === section.id
                      ? "text-[var(--primary-dark)]"
                      : "text-[var(--text-primary)] group-hover:text-[var(--primary-dark)]"
                  }`}
                >
                  {section.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
