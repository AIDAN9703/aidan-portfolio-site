import { timelineData } from "@/constants/timeline-data";
import TimelineItem from "@/components/TimelineItem";

export default function Timeline() {
  return (
    <section id="timeline" className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 shadow-accent font-pixelify liquid-glass">
            MY JOURNEY
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] opacity-40 hidden md:block" />

          {timelineData.map((item) => (
            <div
              key={item.id}
              id={`timeline-${item.id}`}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <TimelineItem item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20 px-4">
          <p className="text-base sm:text-lg md:text-xl text-white font-bold font-pixelify shadow-accent">
            READY FOR THE NEXT CHAPTER →
          </p>
        </div>
      </div>
    </section>
  );
}
