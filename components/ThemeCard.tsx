import Link from "next/link";

type ThemeCardProps = {
  href: string;
  number: number;
  title: string;
  problems: { id: string; title: string }[];
};

export default function ThemeCard({
  href,
  number,
  title,
  problems,
}: ThemeCardProps) {
  return (
    <Link href={href} className="group relative block h-full overflow-hidden timer-typography">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-linear-to-br from-[#c8f059]/12 to-sky-300/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

      <div className="relative h-full bg-[#07080a]/90 border border-white/15 p-4 md:p-6 backdrop-blur-sm hover:border-[#c8f059]/55 transition-all duration-300">
        {/* Theme Number and Heading */}
        <div className="mb-3 md:mb-4">
          <div className="inline-block bg-[#c8f059] text-black px-2 py-0.5 text-[9px] md:text-[10px] font-bold tracking-widest mb-3 md:mb-4">
            THEME {number}
          </div>
          <h3 className="text-base md:text-lg font-bold text-white/92 tracking-wider">
            {title}
          </h3>
        </div>

        <ul className="space-y-2 text-sm text-white/72">
          {problems.map((problem) => (
            <li key={problem.id} className="flex items-start gap-2">
              <span className="text-[#c8f059] font-bold">•</span>
              <span className="leading-relaxed">
                <span className="text-[#c8f059] font-semibold">
                  {problem.id}
                </span>
                <span className="text-white/40"> — </span>
                <span>{problem.title}</span>
              </span>
            </li>
          ))}
        </ul>

      </div>
    </Link>
  );
}
