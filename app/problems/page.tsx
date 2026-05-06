"use client";

import Navbar from "../../components/Navbar";
import ProblemsSection from "../../components/ProblemsSection";
import Footer from "../../components/Footer";

export default function ProblemsPage() {
  return (
    <>
      <main className="timer-shell timer-typography relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <section className="text-center px-4 md:px-6 pt-20 md:pt-24 pb-14 md:pb-16">
          <h1 className="timer-headline text-4xl md:text-5xl lg:text-6xl font-extrabold">
            PROBLEM STATEMENTS
          </h1>

          {/*<p className="mt-3 text-xs md:text-sm tracking-widest text-white">
            Code - Compete - Conquer
          </p>*/}

          <p className="timer-mono mt-5 text-xs md:text-sm text-white/60 uppercase tracking-[0.12em]">
            11 UNIQUE CHALLENGES TO SOLVE
          </p>

          {/*<p className="mt-2 text-xs md:text-sm text-gray-400">
            SUSTAINABLE TOMORROW, SHAPED TODAY!
          </p>*/}

          <div className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap">
            <a
              href="https://drive.google.com/uc?export=download&id=1_KWERkgTGFO2qDVxGKHQMMx8bMpxUAZ2"
              className="timer-accent-btn px-5 md:px-7 py-2 md:py-3 text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <i className="fas fa-download" />
              DOWNLOAD ALL
            </a>
            <a
              href="/register"
              className="timer-outline-btn px-5 md:px-7 py-2 md:py-3 text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <i className="fas fa-users" />
              REGISTER TEAM
            </a>
          </div>
        </section>

        {/* PROBLEMS SECTION */}
        <ProblemsSection />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
