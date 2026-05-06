"use client";

const eventDetails = [
  {
    icon: "fas fa-calendar-days",
    iconColor: "text-yellow-400",
    title: "Event Dates",
    info: "03 - 04 April 2026",
    description: "Two days of intense hackathon",
  },
  {
    icon: "fas fa-location-dot",
    iconColor: "text-[#c8f059]",
    title: "Venue",
    info: "AB-3 Amphitheatre",
    description: "Will be updated soon",
  },
  {
    icon: "fas fa-clock",
    iconColor: "text-white/80",
    title: "Duration",
    info: "24 Hours",
    description: "Non-stop hackathon",
  },
];

export default function EventDetailsSection({ glass = false }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-30">
        
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Event Details</h2>
        <p className="timer-mono mt-2 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em]">
          Everything you need to know about Solve-A-Thon&apos;26
        </p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventDetails.map((detail, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 lg:p-8 border bg-[#07080a]/90 border-white/15 hover:border-[#c8f059]/55 transition-all duration-150 ease-in-out cursor-pointer group"

            >
              <div className={`text-3xl sm:text-4xl mb-4 sm:mb-5 ${detail.iconColor} transition-colors duration-150`}>
                <i className={detail.icon} />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-white/90 transition-colors duration-150">
                {detail.title}
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-[#c8f059] mb-2 whitespace-nowrap transition-colors duration-150">
                {detail.info}
              </p>
              {/*<p className="text-sm text-gray-400 group-hover:text-black transition-colors duration-150">
                {detail.description}
              </p>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
