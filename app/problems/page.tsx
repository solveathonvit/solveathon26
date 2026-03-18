"use client";

import Navbar from "../../components/Navbar";
import ProblemsSection from "../../components/ProblemsSection";
import Footer from "../../components/Footer";

export default function ProblemsPage() {
  return (
    <>
      <main className="relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <section className="text-center px-4 md:px-5 pt-20 md:pt-24 pb-16 md:pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-widest text-cyan-400 font-bold">
            PROBLEM STATEMENTS
          </h1>

          {/*<p className="mt-3 text-xs md:text-sm tracking-widest text-white">
            Code - Compete - Conquer
          </p>*/}

          <p className="mt-4 text-xs md:text-sm text-gray-400">
            11 UNIQUE CHALLENGES TO SOLVE
          </p>

          {/*<p className="mt-2 text-xs md:text-sm text-gray-400">
            SUSTAINABLE TOMORROW, SHAPED TODAY!
          </p>*/}

          <div className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap">
            <a
              href="https://drive.google.com/uc?export=download&id=1_KWERkgTGFO2qDVxGKHQMMx8bMpxUAZ2"
              className="bg-emerald-300 text-black px-5 md:px-7 py-2 md:py-3 font-bold text-sm hover:bg-emerald-200 transition flex items-center gap-2 cursor-pointer"
            >
              <i className="fas fa-download" />
              DOWNLOAD ALL
            </a>
            <a
              href="/register"
              className="bg-cyan-400 text-black px-5 md:px-7 py-2 md:py-3 font-bold text-sm hover:bg-cyan-300 transition flex items-center gap-2 cursor-pointer"
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
