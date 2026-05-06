type ConvenersCardProps = {
    name: string;
    role?: string;
    avatarCharIndex?: number;
  };
  
export default function ConvenersCard({
  name,
  role,
  avatarCharIndex = 0,
}: ConvenersCardProps) {
  const avatarGradients = [
    "linear-gradient(135deg, #c8f059, #7df2c8)",
    "linear-gradient(135deg, #7df2c8, #c8f059)",
    "linear-gradient(135deg, #7aa2ff, #c8f059)",
    "linear-gradient(135deg, #ffbe7a, #ffd9a3)",
  ];
  const avatarGradient =
    avatarGradients[(name.charCodeAt(0) + name.length) % avatarGradients.length];

  return (
    <div className="group relative md:h-full timer-typography">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-linear-to-br from-[#c8f059]/12 to-sky-300/10 opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="relative bg-[#07080a]/90 border border-white/15 p-6 md:p-8 text-center backdrop-blur-sm hover:border-[#c8f059]/55 transition-all duration-300 md:h-full">
        {/* Avatar */}
        <div
          className="w-16 md:w-20 h-16 md:h-20 rounded-full mx-auto mb-4 flex items-center justify-center shrink-0"
          style={{ backgroundImage: avatarGradient }}
        >
          <div className="text-xl md:text-2xl font-bold text-black">
            {name.charAt(avatarCharIndex)}
            </div>
          </div>
  
          {/* Name */}
          <h3 className="text-base md:text-lg font-bold text-white/92 tracking-wider">
            {name}
          </h3>
  
          {/* Role */}
          {role && (
            <p className="text-[10px] md:text-xs text-[#7df2c8] uppercase tracking-widest mt-2 font-semibold">
              {role}
            </p>
          )}
        </div>
      </div>
    );
  }
  
