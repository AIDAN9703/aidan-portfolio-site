import React from "react";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Accessible UI"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Drizzle ORM"],
  },
];

const MyTech = () => {
  return (
    <section id="tech" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-pixelify shadow-accent">
            SKILLS & TOOLING
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            I focus on modern full-stack development with fast iteration and production-minded architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {skillGroups.map((group) => (
            <article key={group.title} className="liquid-glass p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-[var(--pop-tan)] mb-4 font-pixelify">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm md:text-base text-[var(--text-secondary)]">
                    • {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTech;
