import OrganizerCard from "./OrganizerCard";

const coordinators = [
  {
    name: "Sparsh Karna",
    phone: "+91-9868782772",
    role: "Student Coordinator",
  },
  {
    name: "Chandan",
    phone: "+91-9792695075",
    role: "Student Coordinator",
  },
  {
    name: "Praveen",
    phone: "+91-9363734906",
    role: "Student Coordinator",
  },
  {
    name: "Avni Agrawal",
    phone: "+91-7376197523",
    role: "Student Coordinator",
  },
  {
    name: "Harshitha K",
    phone: "+91-9344537811",
    role: "Student Coordinator",
  },
  {
    name: "Aura Jain",
    phone: "+91-9250980092",
    role: "Student Coordinator",
  },
];


export default function StudentCoordinatorsSection({
  glass = false,
}: {
  glass?: boolean;
}) {
  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Student Coordinators</h2>
        {/*<p className="mt-1 text-gray-400 text-sm">
          Your point of contact for all queries
        </p>*/}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator) => (
            <OrganizerCard
              key={coordinator.phone}
              name={coordinator.name}
              phone={coordinator.phone}
              role={coordinator.role}
              avatarCharIndex={0}
              smallEmailText
            />
          ))}
        </div>
      </div>
    </section>
  );
}
