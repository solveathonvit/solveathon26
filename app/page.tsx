"use client";

import Navbar from "../components/Navbar";
import EventCountdown from "../components/EventCountdown";
import EventDetailsSection from "../components/EventDetailsSection";
import ThemesSection from "../components/ThemesSection";
import ConvenersSection from "../components/ConvenersSection";
import OrganizersSection from "../components/OrganizersSection";
import HostelTeamSection from "../components/HostelTeamSection";
import StudentCoordinatorsSection from "../components/StudentCoordinatorsSection";
import NewPrizePoolSection from "../components/NewPrizePoolSection";
import TimelineSection from "../components/TimelineSection";
import GallerySection from "../components/GallerySection";
import AboutPreviousEditionSection from "../components/AboutPreviousEditionSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import ScrollingBar from "../components/ScrollingBar";

export default function Home() {
  return (
    <>
      <main className="timer-shell timer-typography relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

      {/* HERO */}
      <section className="timer-typography px-4 md:px-6 pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
        <p className="text-base md:text-lg uppercase tracking-[0.18em] text-white/85">VIT Chennai - Inter Hostel Hackathon</p>

        <h1 className="timer-headline mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="block text-white/90">Solve-A-Thon</span>
          <span className="timer-headline-accent block">&apos;26</span>
        </h1>

        <p className="mt-5 text-sm md:text-base tracking-[0.08em] text-white/60 uppercase">
          Code - Compete - Conquer
        </p>

        <p className="timer-mono mt-6 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em] hidden">
          VIT Chennai Inter-Hostel Hackathon
        </p>

        <p className="timer-mono mt-4 text-xs md:text-sm text-white/55 uppercase tracking-[0.12em]">
          3RD – 4TH APRIL 2026
        </p>

        <div className="mt-10 md:mt-12 flex justify-center gap-3 md:gap-4 flex-wrap">
          <a
            href="/register"
            className="timer-accent-btn px-6 md:px-8 py-2.5 md:py-3 text-sm cursor-pointer"
          >
            REGISTER
          </a>
          <a
            href="/problems"
            className="timer-outline-btn px-6 md:px-8 py-2.5 md:py-3 text-sm cursor-pointer"
          >
            PROBLEMS
          </a>
        </div>
        </div>
      </section>

      {/* SCROLLING BAR */}
      <ScrollingBar />

      {/* COUNTDOWN */}
      <EventCountdown glass />

      {/* EVENT DETAILS (glass) */}
      <EventDetailsSection glass={false} />

      {/* PRIZE POOL (glass) */}
      <NewPrizePoolSection glass />

      {/* TIMELINE (glass) */}
      <TimelineSection glass={false} />

      {/* THEMES & PROBLEM STATEMENTS (no glass) */}
      <ThemesSection glass />

      {/* CONVENERS & CO-CONVENERS (glass) */}
      <ConvenersSection glass={false} />

      {/* ORGANIZERS (no glass) */}
      <OrganizersSection glass/>

      {/* STUDENT COORDINATORS (no glass) */}
      <StudentCoordinatorsSection glass={false} />

      {/* HOSTEL MANAGEMENT TEAM (glass) */}
      <HostelTeamSection glass />

      {/* GALLERY (no glass) */}
      <GallerySection glass={false} />

      {/* ABOUT PREVIOUS EDITION (glass) */}
      <AboutPreviousEditionSection glass />

      {/* FAQ (no glass) */}
      <FAQSection glass={false} />

      {/* FOOTER */}
      <Footer />
      </main>
    </>
  );
}
