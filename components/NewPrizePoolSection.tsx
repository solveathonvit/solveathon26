const prizes = [
  {
    title: "1st Place",
    amount: "₹10,000",
    description: "For the winning team",
  },
  {
    title: "2nd Place",
    amount: "₹7,000",
    description: "Runner-up recognition",
  },
  {
    title: "3rd Place",
    amount: "₹5,000",
    description: "Third place achievement",
  },
];

export default function NewPrizePoolSection({ glass = false }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Prize Pool</h2>
        {/*<p className="mt-1 text-gray-400 text-sm">
          ₹22,000 in total prizes to be won
        </p>*/}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#c8f059]/12 to-sky-300/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative bg-[#07080a]/90 border border-white/15 p-5 sm:p-6 lg:p-8 hover:border-[#c8f059]/55 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white/85 tracking-widest">
                  #{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {prize.title}
                </h3>
                <p className="text-3xl sm:text-4xl font-bold text-[#c8f059] mb-2 sm:mb-3">
                  {prize.amount}
                </p>
                {/*<p className="text-sm text-gray-400">
                  {prize.description}
                </p>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
