import { TimelineItemData } from "@/components/TimelineItem";


export const timelineData: TimelineItemData[] = [
    {
      id: 1,
      title: "Business to Code Transition",
      date: "2022 - Early 2023",
      images: ["/images/brutus-the-buckeye.png", "/images/ohio-state-logo.png"],
      description: "Started as a Business major with Economics specialization at Ohio State, but discovered the vibrant 'vibe coding' culture online. This community made programming feel accessible and exciting, sparking my curiosity to explore coding beyond my major requirements.",
      link: "https://github.com/AIDAN9703",
      linkText: "View Learning Journey",
      position: 'left'
    },
    {
      id: 2,
      title: "Formal CS Education",
      date: "2023 - 2024",
      images: ["/images/python-logo.png", "/images/rest-api-logo.png"],
      description: "Took Intro to Python, Data Structures, and two additional entry-level CS courses as general education requirements. Since I couldn't switch to Computer Science major, these classes became my gateway to structured learning while working on small passion projects in my free time.",
      link: "https://github.com/AIDAN9703",
      linkText: "View Course Projects",
      position: 'right'
    },
    {
      id: 3,
      title: "First Professional Project",
      date: "Summer 2024",
      images: ["/images/logo.png", "/images/yacht2.jpg"],
      description: "Landed a freelance project with a yacht charter company in Miami, Florida. Built a complete website, database, and booking management backend. This was my first real-world full-stack experience where I learned Next.js, TypeScript, Drizzle ORM, PostgreSQL, service layer architecture, proper app structuring, React best practices, authentication systems, payment integration, and database design.",
      link: "https://www.kosyachts.com",
      linkText: "View Project",
      position: 'left'
    },
    {
      id: 4,
      title: "Sports Analytics API",
      date: "Fall 2024",
      images: ["/images/hockey-rink.png"],
      description: "Built a RESTful API with FastAPI for NFL player performance predictions. Created a comprehensive data warehouse and learned advanced Python techniques, API design patterns, request/response handling, data processing pipelines, machine learning integration, statistical analysis, and automated data collection systems.",
      link: "https://github.com/AIDAN9703/dyksports",
      linkText: "Explore API",
      position: 'right'
    },
    {
      id: 5,
      title: "LLM Development",
      date: "Current",
      images: ["/images/hockey-net.jpg", "/images/hockey-rink.png"],
      description: "Currently diving deep into building Large Language Models with Python. Learning PyTorch, Transformers library, Hugging Face, LangChain, vector databases, prompt engineering, fine-tuning techniques, and deploying AI models at scale.",
      link: "https://github.com/yourusername",
      linkText: "Coming Soon",
      position: 'left'
    }
  ];