import React from "react";

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "var(--primary)",
    technologies: [
      {
        name: "React",
        level: "Advanced",
        description: "Component architecture, hooks, state management",
      },
      {
        name: "Next.js",
        level: "Advanced",
        description: "SSR, SSG, API routes, optimization",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        description: "Type safety, interfaces, generics",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Utility-first styling, responsive design",
      },
      {
        name: "JavaScript",
        level: "Expert",
        description: "ES6+, async/await, modern patterns",
      },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "var(--accent)",
    technologies: [
      {
        name: "Python",
        level: "Advanced",
        description: "FastAPI, Flask, data processing",
      },
      {
        name: "Node.js",
        level: "Intermediate",
        description: "Express, RESTful APIs, middleware",
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        description: "Database design, queries, optimization",
      },
      {
        name: "Drizzle ORM",
        level: "Advanced",
        description: "Type-safe database operations",
      },
      {
        name: "Redis",
        level: "Intermediate",
        description: "Caching, session management",
      },
    ],
  },
  {
    title: "AI/ML",
    icon: "🤖",
    color: "var(--primary-dark)",
    technologies: [
      {
        name: "PyTorch",
        level: "Learning",
        description: "Neural networks, deep learning",
      },
      {
        name: "Hugging Face",
        level: "Learning",
        description: "Transformers, model fine-tuning",
      },
      {
        name: "LangChain",
        level: "Learning",
        description: "LLM applications, prompt engineering",
      },
      {
        name: "Vector Databases",
        level: "Learning",
        description: "Embeddings, similarity search",
      },
      {
        name: "OpenAI API",
        level: "Intermediate",
        description: "GPT integration, embeddings",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🔧",
    color: "var(--accent-dark)",
    technologies: [
      {
        name: "Git",
        level: "Advanced",
        description: "Version control, branching, collaboration",
      },
      {
        name: "Docker",
        level: "Intermediate",
        description: "Containerization, deployment",
      },
      {
        name: "Vercel",
        level: "Advanced",
        description: "Frontend deployment, edge functions",
      },
      {
        name: "AWS",
        level: "Learning",
        description: "Cloud services, infrastructure",
      },
      {
        name: "Linux",
        level: "Intermediate",
        description: "Command line, server management",
      },
    ],
  },
];

const MyTech = () => {
  return (
    <section id="tech" className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white font-pixelify shadow-accent">
            MY TECH STACK
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white font-medium px-4">
            Technologies I work with to build amazing experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="liquid-glass p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 liquid-glass flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-pixelify shadow-accent">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="liquid-glass p-3 sm:p-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white font-pixelify">
                        {tech.name}
                      </h4>
                      <span
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold liquid-glass whitespace-nowrap"
                        style={{ color: category.color }}
                      >
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-white text-xs sm:text-sm">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16">
          <div className="liquid-glass p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-pixelify shadow-accent">
              ADDITIONAL SKILLS
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {[
                "API Design",
                "Database Optimization",
                "Performance Tuning",
                "Responsive Design",
                "UI/UX Principles",
                "Agile Development",
                "Code Review",
                "Testing",
                "Documentation",
                "Problem Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm liquid-glass text-white font-medium hover:text-gray-200 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="liquid-glass p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-pixelify shadow-accent">
              ALWAYS LEARNING
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              I&apos;m constantly exploring new technologies and pushing the
              boundaries of what&apos;s possible. Currently diving deep into
              AI/ML and building Large Language Models. Every project is an
              opportunity to learn something new and improve my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTech;
