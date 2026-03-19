export default function AboutPreviousEditionSection({
  glass = true,
}: {
  glass?: boolean;
}) {
  const stats = [
    { label: "Days", value: "2" },
    { label: "Prize Pool", value: "60K" },
    { label: "Participants", value: "100+" },
  ];

  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">About Previous Edition</h2>
        <p className="mt-1 text-gray-400 text-sm">
          Highlights from Solve-A-Thon 2025
        </p>

        {/* Description */}
<div className="mt-8 text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
  <p>
    Solve-A-Thon&apos;25 was a 24-hour hackathon hosted by the Hostel Committee of VIT Chennai, uniting passionate innovators to solve real-world challenges across hostel life, sustainability, student well-being, and smart campus technology. The event encouraged empathy-driven thinking and practical, impact-focused solutions.
  </p>
  <p>
    Through rapid collaboration, mentorship, and hands-on prototyping, participants developed high-quality projects and strengthened the culture of innovation at VIT Chennai. With 100+ participants and a ₹60,000 prize pool, Solve-A-Thon&apos;25 set the stage for an even bigger 2026 edition.
  </p>
</div>


        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative bg-neutral-900/80 border border-cyan-400/40 p-5 sm:p-6 lg:p-8 text-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase font-bold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
