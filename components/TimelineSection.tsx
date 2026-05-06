"use client";

const timeline = [
  { date: "18 March '26", title: "Registration Starts" },
  { date: "02 April '26", title: "Registration Ends" },
  { date: "03 April '26", title: "Hackathon Starts" },
  { date: "04 April '26", title: "Hackathon Ends" },
];

export default function TimelineSection({ glass = false }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";

  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Subtle background accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#c8f059]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-300/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="timer-headline text-3xl md:text-4xl font-bold tracking-tight">
          Timeline
        </h2>
        <p className="timer-mono mt-2 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em]">Key milestones for Solve‑A‑Thon '26</p>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Sharp vertical line */}
          <div className="absolute left-2 top-0 h-full w-px bg-[#c8f059]/40" />

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={`${item.date}-${item.title}`} className="relative pl-10">
                {/* Diamond marker */}
                <div className="absolute left-2 top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#c8f059]" />

                {/* Sharp card */}
                <div className="border border-white/15 bg-[#07080a]/85 px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-sm font-semibold tracking-wide text-[#c8f059]">
                      {item.date}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
