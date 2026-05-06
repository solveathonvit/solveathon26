"use client";

import { useState } from "react";

export default function GallerySection({ glass = false }: { glass?: boolean }) {
  const [activeTab, setActiveTab] = useState<"24" | "23">("24");
  const [showAll, setShowAll] = useState(false);

  const galleries = {
    24: [
      "/solveathon24img/301.jpg",
      "/solveathon24img/302.jpg",
      "/solveathon24img/303.jpg",
      "/solveathon24img/304.jpg",
      "/solveathon24img/305.jpg",
      "/solveathon24img/306.jpg",
      "/solveathon24img/307.jpg",
    ],
    23: [
      "/solveathon23img/231.jpg",
      "/solveathon23img/234.jpg",
      "/solveathon23img/235.jpg",
      "/solveathon23img/236.jpg",
      "/solveathon23img/237.jpg",
      "/solveathon23img/_MG_6154.JPG",
      "/solveathon23img/_MG_6158.JPG",
    ],
  };

  const displayedImages = showAll
    ? galleries[activeTab]
    : galleries[activeTab].slice(0, 3);

  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section id="gallery" className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Gallery</h2>
        <p className="timer-mono mt-2 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em]">
          Moments from previous editions
        </p>

        {/* Tabs */}
        <div className="mt-8 flex gap-4 border-b border-white/10">
          {[
            { year: "24", label: "24" },
            { year: "23", label: "23" },
          ].map((item) => (
            <button
              key={item.year}
              onClick={() => {
                setActiveTab(item.year as "24" | "23");
                setShowAll(false);
              }}
              className={`px-3 sm:px-6 py-2 sm:py-3 font-bold tracking-widest transition whitespace-nowrap sm:whitespace-normal text-xs sm:text-sm ${
                activeTab === item.year
                  ? "text-[#c8f059] border-b-2 border-[#c8f059]"
                  : "text-white/55 hover:text-white/75"
              }`}
            >
              SOLVE-A-THON &apos;{item.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-video overflow-hidden border border-white/15 hover:border-[#c8f059]/55 transition"
            >
              <img
                src={image}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && galleries[activeTab].length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="timer-accent-btn px-8 py-3 text-sm cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
