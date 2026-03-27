"use client";

import { useEffect, useState } from "react";
import { GridScan } from "../../components/GridScan";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdownEndTime, setCountdownEndTime] = useState<number | null>(null);

  const startCountdown = () => {
    const now = new Date().getTime();
    const endTime = now + 24 * 60 * 60 * 1000; // 24 hours from now
    setCountdownEndTime(endTime);
    setCountdownActive(true);
  };

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      if (!countdownActive || !countdownEndTime) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const now = new Date().getTime();
      const difference = countdownEndTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownActive(false);
      }
    };

    if (countdownActive) {
      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [countdownActive, countdownEndTime]);

  if (!mounted) {
    return null;
  }

  // START BUTTON SCREEN
  if (!countdownActive) {
    return (
      <div className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* GridScan Background */}
        <div className="absolute inset-0 z-0">
          <GridScan 
            className="fixed inset-0 w-full h-full"
            style={{
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.72,
              filter: "saturate(0.9) brightness(0.85) contrast(0.95)",
            }}
            linesColor="#0891b2"
            scanColor="#34d399"
            scanOpacity={0.18}
            gridScale={0.16}
            lineThickness={1.2}
            noiseIntensity={0.008}
            chromaticAberration={0.0015}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-8 py-12">
          <div className="relative w-full max-w-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none" />

            {/* Main container with sharp edges */}
            <div className="relative bg-neutral-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-widest mb-6">
                  SOLVE-A-THON&apos;26
                </h1>
                <p className="text-gray-400 text-xs md:text-sm tracking-wider mb-3">
                  VIT Chennai Inter Hostel Hackathon
                </p>
                <p className="text-gray-500 text-xs tracking-wide">
                  3 - 4 April 2026 | AB-3 Amphitheatre | 24 Hour Hackathon
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={startCountdown}
                  className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-bold text-base md:text-lg tracking-widest shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase flex items-center gap-3"
                >
                  <i className="fas fa-play" />
                  Start Countdown
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // COUNTDOWN SCREEN
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* GridScan Background */}
      <div className="absolute inset-0 z-0">
        <GridScan 
          className="fixed inset-0 w-full h-full"
          style={{
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.72,
            filter: "saturate(0.9) brightness(0.85) contrast(0.95)",
          }}
          linesColor="#0891b2"
          scanColor="#34d399"
          scanOpacity={0.18}
          gridScale={0.16}
          lineThickness={1.2}
          noiseIntensity={0.008}
          chromaticAberration={0.0015}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-8 py-12">
        {/* Glassmorphism Container */}
        <div className="relative w-full max-w-6xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none" />

          {/* Main card with sharp edges */}
          <div className="relative bg-neutral-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 tracking-widest mb-4">
                SOLVE-A-THON&apos;26
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 tracking-widest mb-3">
                EVENT COUNTDOWN
              </h2>
              <p className="text-gray-400 text-sm md:text-base tracking-wider">
                VIT Chennai Inter Hostel Hackathon
              </p>
            </div>

            {/* Countdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-10">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINUTES", value: timeLeft.minutes },
                { label: "SECONDS", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="relative bg-neutral-900/80 border-2 border-cyan-400/40 
                   p-8 max-sm:p-6 text-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-300 font-mono mb-3">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase font-bold">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Info */}
            <div className="text-center border-t border-white/10 pt-8">
              <p className="text-gray-400 text-sm md:text-base tracking-wider">
                <span className="text-emerald-400 font-semibold text-lg md:text-xl">24-HOUR CHALLENGE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
