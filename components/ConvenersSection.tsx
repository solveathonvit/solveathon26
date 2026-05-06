import ConvenersCard from "./ConvenersCard";

const conveners = [
  {
    name: "Dr. Janardhan Reddy K",
    role: "Convener, Director – Hostel",
  },
  {
    name: "Dr. Felix A",
    role: "Co-Convener, Deputy Director – Men's Hostel",
  },
  {
    name: "Dr. Velmathi G",
    role: "Co-Convener, Deputy Director – Ladies' Hostel",
  },
];

export default function ConvenersSection({ glass = true }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section id="organizers" className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">
          Convener &amp; Co-Convener
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {conveners.map((person) => (
            <ConvenersCard
              key={person.name}   // ✅ changed key
              name={person.name}
              role={person.role}
              avatarCharIndex={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
