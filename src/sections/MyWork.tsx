import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Yacht Charter Platform",
    description:
      "Full-stack web application for a Miami yacht charter company with booking workflows, payments, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    link: "#",
    image: "/images/yacht2.jpg",
  },
  {
    title: "NFL Analytics API",
    description:
      "REST API for player-performance predictions with automated data pipelines and model-backed insights.",
    tech: ["Python", "FastAPI", "Machine Learning", "PostgreSQL"],
    link: "#",
    image: "/images/python-logo.png",
  },
  {
    title: "LLM Development Platform",
    description:
      "Ongoing work around LLM apps, vector retrieval, and practical prompt workflows for production use cases.",
    tech: ["PyTorch", "Hugging Face", "LangChain", "Vector DBs"],
    link: "#",
    image: "/images/database-symbol.png",
  },
];

const MyWork = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-pixelify shadow-accent">
            SELECTED WORK
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A few projects that represent how I build: clean systems, practical UX, and strong execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="liquid-glass p-5 md:p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={560}
                height={300}
                className="w-full h-40 object-cover rounded-lg pixel-border mb-4"
                style={{ imageRendering: "pixelated" }}
              />

              <h3 className="text-xl font-bold text-[var(--pop-tan)] font-pixelify mb-3">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[var(--glass-border)] bg-[rgba(0,0,0,0.25)] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-sm font-semibold text-[var(--pop-tan)] hover:text-white transition-colors"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
