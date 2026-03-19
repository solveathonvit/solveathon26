"use client";

import { useState } from "react";
import ProblemCard from "./ProblemCard";
import ProblemModal from "./ProblemModal";
import { themes } from "../data/themes";

export default function ProblemsSection() {
  const [selectedProblem, setSelectedProblem] = useState<
    (typeof themes)[0]["problems"][0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProblem = (problem: (typeof themes)[0]["problems"][0]) => {
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProblem(null), 300);
  };

  return (
    <>
      <section className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 bg-neutral-900/70 border-t border-white/10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Problem Statements</h2>
          <p className="mt-1 text-gray-400 text-xs md:text-sm">
            Explore 11 unique problem statements and build innovative solutions
          </p>

          <div className="mt-8 md:mt-10 space-y-12">
            {themes.map((theme) => (
              <section
                key={theme.id}
                id={theme.id}
                className="scroll-mt-28"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center bg-emerald-400 text-black px-2.5 py-1 text-[10px] md:text-xs font-bold tracking-widest">
                    THEME {theme.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide">
                    {theme.title}
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {theme.problems.map((problem) => (
                    <ProblemCard
                      key={problem.id}
                      id={problem.id}
                      title={problem.title}
                      description={problem.description}
                      onClick={() => handleOpenProblem(problem)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProblemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        problem={selectedProblem}
      />
    </>
  );
}
