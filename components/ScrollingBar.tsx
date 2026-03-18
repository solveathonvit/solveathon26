"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollingBar() {
  const blocks = [
    "Registrations Now Open for Solve-A-Thon’26",
    "03-04 April 2026",
    "Secure Your Team’s Spot"
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [setCount, setSetCount] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const updateMeasurements = () => {
      const firstSet = track.querySelector(".content-set") as HTMLElement | null;
      if (!firstSet) return;

      const contentWidth = firstSet.offsetWidth;
      const containerWidth = container.offsetWidth;
      if (!contentWidth || !containerWidth) return;

      // Ensure the strip is long enough to cover the viewport while animating.
      const neededSets = Math.max(2, Math.ceil(containerWidth / contentWidth) + 1);
      setSetCount(neededSets);
      track.style.setProperty("--scroll-distance", `-${contentWidth}px`);
    };

    const resizeObserver = new ResizeObserver(updateMeasurements);
    resizeObserver.observe(container);
    resizeObserver.observe(track);

    const rafId = requestAnimationFrame(updateMeasurements);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-emerald-400 py-1.5 overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max items-center animate-scroll"
      >
        {Array.from({ length: setCount }).map((_, setIdx) => (
          <div
            key={`set-${setIdx}`}
            className="flex items-center gap-10 pr-10 content-set"
            aria-hidden={setIdx > 0}
          >
            {blocks.map((block, idx) => (
              <div key={`${setIdx}-${idx}`} className="flex items-center gap-10">
                <span className="text-black font-bold text-xs md:text-sm tracking-widest whitespace-nowrap">
                  {block}
                </span>
                <span className="text-black/80">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-distance, -50%));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}