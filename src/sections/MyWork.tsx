import React from "react";

const projects = [
  {
    title: "Yacht Charter Platform",
    description:
      "Full-stack web application for Miami yacht charter company. Built with Next.js, TypeScript, PostgreSQL, and Drizzle ORM. Features booking management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    link: "#",
    image: "/images/yacht2.jpg",
  },
  {
    title: "NFL Analytics API",
    description:
      "RESTful API built with FastAPI for NFL player performance predictions. Includes comprehensive data warehouse, machine learning models, and automated data collection systems.",
    tech: ["Python", "FastAPI", "Machine Learning", "PostgreSQL"],
    link: "#",
    image: "/images/python-logo.png",
  },
  {
    title: "LLM Development Platform",
    description:
      "Currently building Large Language Model applications using PyTorch, Hugging Face, and LangChain. Exploring vector databases, prompt engineering, and model fine-tuning techniques.",
    tech: ["PyTorch", "Hugging Face", "LangChain", "Vector DBs"],
    link: "#",
    image: "/images/database-symbol.png",
  },
];

const MyWork = () => {
  return (
    <section id="work" className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[var(--text-primary)] font-pixelify shadow-accent">
            MY WORK
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--primary-light)] font-medium px-4">
            Projects I've built and contributed to
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="liquid-glass p-4 sm:p-6 md:p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 sm:h-32 object-cover pixel-border mb-3 sm:mb-4"
                  style={{ imageRendering: "pixelated" }}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 font-pixelify shadow-accent">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base text-[var(--primary)] font-bold mb-2 sm:mb-3 font-pixelify">
                  TECH STACK:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold liquid-glass border border-[var(--accent-light)] text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="inline-block text-sm sm:text-base text-[var(--accent)] hover:text-[var(--primary-dark)] font-bold transition-colors duration-300 font-pixelify"
              >
                VIEW PROJECT →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
