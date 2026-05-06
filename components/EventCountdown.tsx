"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function EventCountdown({ glass = true }: { glass?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      // Event date: April 12, 2026 at 16:00:00
      const eventDate = new Date("2026-04-12T16:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const baseClasses = "timer-typography relative px-4 md:px-6 lg:px-8 py-14 md:py-18 overflow-hidden";
  const glassClasses = " bg-[#07080a]/95 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/60 mb-2 hidden">
            Solve-A-Thon &apos;26
          </p>
          <h2 className="timer-headline text-2xl md:text-4xl font-extrabold mb-3">
            Event Countdown
          </h2>
          <p className="timer-mono text-white/55 text-xs md:text-sm uppercase tracking-[0.12em] hidden">
            VIT Chennai - Inter Hostel Hackathon
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#07080a] px-4 md:px-5 py-7 md:py-9 text-left hover:bg-white/4 transition-colors duration-200"
            >
              <div className="timer-mono text-4xl sm:text-5xl md:text-6xl font-light leading-none tracking-[-0.04em] text-white/95 mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs tracking-[0.18em] text-white/45 uppercase font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.12em] text-white/60">
            <span className="text-[#c8f059]">3 - 4 APRIL 2026</span> - AB-3 AMPHITHEATRE
          </p>
        </div>
      </div>
    </section>
  );
}
