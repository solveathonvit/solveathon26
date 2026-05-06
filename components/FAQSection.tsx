"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who can participate in Solve-A-Thon?",
    answer:
      "Solve-A-Thon is exclusively for hostel students of VIT Chennai. Only hostellers are eligible to participate in the event.",
  },
  {
    question: "What is the team size?",
    answer:
       "Each team can have 1–5 members. Please form your team before registering.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No, there is no registration fee for Solve-A-Thon.",
  },
  {
    question: "Will participants receive certificates and prizes?",
    answer:
      "All participants will receive participation certificates. Prizes for the winning teams will be distributed on Hostel Day.",
  },
  {
    question: "When and where will the event be conducted?",
    answer:
      "Solve-A-Thon will be conducted over two days — 3rd April and 4th April at AB-3 Amphitheatre, VIT Chennai.",
  },
];


export default function FAQSection({ glass = false }: { glass?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section id="faq" className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="timer-mono mt-2 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em]">
          Got questions? We&apos;ve got answers!
        </p>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border backdrop-blur-md shadow-[0_10px_32px_rgba(0,0,0,0.45)] overflow-hidden transition ${
                openIndex === index
                  ? "border-[#c8f059]/55 bg-white/8"
                  : "border-white/10 bg-white/5 hover:border-[#c8f059]/40"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className={`w-full px-6 py-4 text-left font-semibold text-white/88 transition flex justify-between items-center group ${
                  openIndex === index ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <span className="tracking-wide">{faq.question}</span>
                <span
                  className={`text-xl transition transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-white/10 bg-black/15 text-white/75 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
