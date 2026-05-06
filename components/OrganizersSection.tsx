import OrganizerCard from "./OrganizerCard";

const facultyOrganizers = [
  {
    name: "Dr. Trilok Nath Pandey",
    email: "triloknath.pandey@vit.ac.in",
    role: "Event Coordinator",
  },
  {
    name: "Dr. Mansoor Hussain D",
    email: "mansoorhussain.d@vit.ac.in",
    role: "Event Coordinator",
  },
  {
    name: "Dr. Natarajan B",
    email: "natarajan.b@vit.ac.in",
    role: "Event Coordinator",
  },
  {
    name: "Dr. Vijayalakshmi V",
    email: "vijayalakshmi.v@vit.ac.in",
    role: "Event Coordinator",
  },
  {
    name: "Dr. Revathi M",
    email: "m.revathi@vit.ac.in",
    role: "Event Coordinator",
  },
];

export default function OrganizersSection({ glass = false }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Organizers</h2>

        {/* Faculty Organizers */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyOrganizers.map((organizer) => (
            <OrganizerCard
              key={organizer.email}
              name={organizer.name}
              email={organizer.email}
              role={organizer.role}
              avatarCharIndex={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
