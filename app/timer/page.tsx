"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function UnitCard({
  value,
  label,
  delayClass,
  flash,
}: {
  value: string;
  label: string;
  delayClass: string;
  flash?: boolean;
}) {
  return (
    <div className={`unit-card fade-up ${delayClass}`}>
      <span key={`${label}-${value}`} className={`unit-num ${flash ? "flash" : ""}`}>
        {value}
      </span>
      <span className="unit-label">{label}</span>
    </div>
  );
}

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  :root {
    --bg: #07080a;
    --surface: rgba(255,255,255,0.03);
    --surface-hover: rgba(255,255,255,0.055);
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.13);
    --text-primary: rgba(255,255,255,0.92);
    --text-secondary: rgba(255,255,255,0.42);
    --text-muted: rgba(255,255,255,0.22);
    --accent: #c8f059;
    --accent-dim: rgba(200,240,89,0.12);
    --accent-glow: rgba(200,240,89,0.06);
  }

  .timer-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    position: relative;
    overflow: hidden;
    background: var(--bg);
    color: var(--text-primary);
    font-family: 'Syne', sans-serif;
  }

  .timer-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 20% 20%, rgba(200,240,89,0.03) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 80% 80%, rgba(100,180,255,0.025) 0%, transparent 70%);
    pointer-events: none;
  }

  .timer-page::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 800px;
  }

  .screen {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;
  }

  .eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s ease-in-out infinite;
  }

  .eyebrow-text {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-secondary);
  }

  .headline {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 0.95;
    color: var(--text-primary);
    margin-bottom: 2.5rem;
  }

  .headline span {
    display: block;
    color: var(--accent);
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .meta-label {
    font-size: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .meta-value {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .meta-sep {
    width: 1px;
    height: 14px;
    background: var(--border-strong);
  }

  .divider {
    width: 100%;
    height: 1px;
    background: var(--border);
    margin-bottom: 3.5rem;
  }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 0 2rem;
    height: 52px;
    background: var(--accent);
    color: #07080a;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    outline: none;
  }

  .start-btn:hover {
    background: #d6f46a;
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(200,240,89,0.18);
  }

  .start-btn:active {
    transform: translateY(0);
  }

  .btn-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-icon svg {
    width: 100%;
    height: 100%;
  }

  .hint {
    margin-top: 1rem;
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.06em;
    display: none;
  }

  .cd-header {
    margin-bottom: 4rem;
    width: 100%;
  }

  .cd-label {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .cd-title {
    font-size: clamp(2rem, 7vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .cd-sub {
    font-size: 16px;
    color: var(--text-secondary);
    letter-spacing: 0.04em;
    display: none;
  }

  .units-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    width: 100%;
    margin-bottom: 2.5rem;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .unit-card {
    background: var(--bg);
    padding: 2rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
    position: relative;
    overflow: hidden;
    transition: background 0.2s ease;
  }

  .unit-card:hover {
    background: var(--surface-hover);
  }

  .unit-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
    transition: background 0.3s ease;
  }

  .unit-card:hover::after {
    background: var(--accent);
  }

  .unit-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    font-weight: 300;
    color: var(--text-primary);
    line-height: 1;
    letter-spacing: -0.04em;
    transition: color 0.2s ease;
  }

  .unit-card:hover .unit-num {
    color: var(--accent);
  }

  .unit-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .cd-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .cd-footer-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: var(--accent-dim);
    border: 1px solid rgba(200,240,89,0.2);
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 1.5s ease-in-out infinite;
  }

  .cd-footer-right {
    font-size: 16px;
    color: var(--text-muted);
    letter-spacing: 0.06em;
  }

  .fade-up {
    opacity: 0;
    transform: translateY(16px);
    animation: fadeUp 0.5s ease forwards;
  }

  .delay-1 { animation-delay: 0.06s; }
  .delay-2 { animation-delay: 0.12s; }
  .delay-3 { animation-delay: 0.18s; }
  .delay-4 { animation-delay: 0.24s; }
  .delay-5 { animation-delay: 0.32s; }
  .delay-6 { animation-delay: 0.40s; }

  .supporting-text {
    font-size: 16px;
    color: var(--text-muted);
    letter-spacing: 0.06em;
  }

  .flash {
    animation: flash 0.12s ease;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes flash {
    0% { color: var(--accent); }
    100% { color: var(--text-primary); }
  }

  @media (max-width: 540px) {
    .units-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .unit-card {
      padding: 1.5rem 0.75rem 1.25rem;
    }
  }
`;

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
  const [secondsFlashTick, setSecondsFlashTick] = useState(0);
  const previousSecondRef = useRef(-1);

  const startCountdown = useCallback(() => {
    if (countdownActive) return;
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    setCountdownEndTime(endTime);
    setCountdownActive(true);
  }, [countdownActive]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (countdownActive || e.repeat) return;
      if (
        e.key === "ArrowRight" ||
        e.key === "Enter" ||
        e.key === " " ||
        e.code === "Space"
      ) {
        e.preventDefault();
        startCountdown();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [countdownActive, startCountdown]);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      if (!countdownActive || !countdownEndTime) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        previousSecondRef.current = -1;
        return;
      }

      const diff = countdownEndTime - new Date().getTime();

      if (diff > 0) {
        const nextSeconds = Math.floor((diff / 1000) % 60);
        if (nextSeconds !== previousSecondRef.current) {
          previousSecondRef.current = nextSeconds;
          setSecondsFlashTick((tick) => tick + 1);
        }

        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: nextSeconds,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownActive(false);
        previousSecondRef.current = -1;
      }
    };

    if (countdownActive) {
      calculateTimeLeft();
      const t = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(t);
    }
  }, [countdownActive, countdownEndTime]);

  if (!mounted) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Days", value: pad(timeLeft.days), delayClass: "delay-2" },
    { label: "Hours", value: pad(timeLeft.hours), delayClass: "delay-3" },
    { label: "Minutes", value: pad(timeLeft.minutes), delayClass: "delay-4" },
    { label: "Seconds", value: pad(timeLeft.seconds), delayClass: "delay-5" },
  ];

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <div className="timer-page">
        <div className="container">
          {!countdownActive && (
            <div className="screen">
              <div className="eyebrow fade-up">
                <div className="eyebrow-dot" />
                <span className="eyebrow-text">VIT Chennai - Inter Hostel Hackathon</span>
              </div>

              <h1 className="headline fade-up delay-1">
                Solve-A-Thon
                <span>&apos;26</span>
              </h1>

              <div className="meta-row fade-up delay-2">
                <div className="meta-item">
                  <span className="meta-label">Date</span>
                  <span className="meta-value">3 - 4 April 2026</span>
                </div>

                <div className="meta-sep" />

                <div className="meta-item">
                  <span className="meta-label">Venue</span>
                  <span className="meta-value">AB-3 Amphitheatre</span>
                </div>

                <div className="meta-sep" />

                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">24 Hours</span>
                </div>
              </div>

              <div className="divider fade-up delay-3" />

              <div className="fade-up delay-4">
                <button className="start-btn" onClick={startCountdown}>
                  <span className="btn-icon">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 3L13 8L4 13V3Z" fill="currentColor" />
                    </svg>
                  </span>
                  Begin Countdown
                </button>

                <p className="hint">Press Space, Enter, or Right Arrow to start</p>
              </div>
            </div>
          )}

          {countdownActive && (
            <div className="screen">
              <div className="cd-header">
                <div className="cd-label fade-up">Solve-A-Thon &apos;26</div>
                <div className="cd-title fade-up delay-1">Time Remaining</div>
                <div className="cd-sub fade-up delay-2">VIT Chennai - Inter Hostel Hackathon</div>
              </div>

              <div className="units-grid">
                {units.map((unit) => (
                  <UnitCard
                    key={unit.label}
                    value={unit.value}
                    label={unit.label}
                    delayClass={unit.delayClass}
                    flash={unit.label === "Seconds" && secondsFlashTick > 0}
                  />
                ))}
              </div>

              <div className="cd-footer fade-up delay-6">
                <div className="cd-footer-left">
                  <div className="badge">
                    <div className="badge-dot" />
                    Live
                  </div>
                  <span className="supporting-text">24-Hour Challenge</span>
                </div>

                <div className="cd-footer-right">3 - 4 April 2026 - AB-3 Amphitheatre</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}