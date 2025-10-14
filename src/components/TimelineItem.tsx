import Image from "next/image";

export interface TimelineItemData {
  id: number;
  title: string;
  date: string;
  images: string[];
  description: string;
  link?: string;
  linkText?: string;
  position: "left" | "right";
}

export default function TimelineItem({ item }: { item: TimelineItemData }) {
  return (
    <div
      className={`flex ${
        item.position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`w-full md:w-[48%] relative ${
          item.position === "left" ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <div className="relative p-4 sm:p-6 md:p-8 overflow-hidden sidebar-glass">
          {/* Top Left Image */}
          {item.images[0] && (
            <div className="absolute top-0 left-0 z-0">
              <Image
                src={item.images[0]}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 object-cover opacity-40 rotate-12 transition-transform duration-300 hover:rotate-6"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          )}

          {/* Bottom Right Image */}
          {item.images[1] && (
            <div className="absolute bottom-4 right-4 z-0">
              <Image
                src={item.images[1]}
                alt=""
                width={400}
                height={104}
                className="w-full h-26 object-cover opacity-30 -rotate-12 transition-transform duration-300 hover:-rotate-6"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          )}

          {/* Content with higher z-index to appear above images */}
          <div className="relative z-10">
            <p className="text-xs sm:text-sm text-white font-bold mb-2 sm:mb-3 rink-line uppercase tracking-wide font-pixelify">
              {item.date}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-pixelify shadow-accent">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed mb-4 sm:mb-6">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-gray-200 font-bold transition-colors duration-300 font-pixelify"
              >
                {item.linkText || "Learn More"} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
