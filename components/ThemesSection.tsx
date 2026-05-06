import ThemeCard from "./ThemeCard";
import { themes } from "../data/themes";

export default function ThemesSection({ glass = true }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-12 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">
          Themes & Problem Statements
        </h2>
        {/*<p className="mt-1 text-gray-400 text-xs md:text-sm">
          Choose your challenge and make a real impact
        </p>*/}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              href={`/problems#${theme.id}`}
              number={theme.number}
              title={theme.title}
              problems={theme.problems.map((problem) => ({
                id: problem.id,
                title: problem.shortTitle ?? problem.title,
              }))}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/problems"
            className="timer-accent-btn px-6 py-3 text-sm cursor-pointer"
          >
            VIEW PROBLEM STATEMENTS
          </a>
        </div>
      </div>
    </section>
  );
}
