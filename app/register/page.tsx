"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RegisterPage() {
  const registrationUrl = "https://forms.gle/toz4cTtwXcctk49h8";

  return (
    <>
      <main className="relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative px-4 md:px-5 pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-emerald-400 text-black px-3 py-1.5 text-xs font-bold tracking-widest mb-4">
                JOIN THE HACKATHON
              </div>

              <h1 className="text-3xl md:text-4xl tracking-widest text-cyan-400 font-bold mb-4">
                SOLVE-A-THON&apos;26 REGISTRATION
              </h1>

              {/*<p className="text-base md:text-lg text-gray-300 mb-3">
                Be part of an exciting 2-day inter-hostel hackathon
              </p>*/}

              <p className="text-gray-400 text-sm md:text-base mb-10">
                03RD – 04TH APRIL 2026 | VIT CHENNAI
              </p>
            </div>

            {/* Registration Rules */}
            <div className="bg-neutral-900/80 border border-emerald-400/40 p-6 md:p-8 mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-emerald-300 mb-5 flex items-center gap-2.5">
                <i className="fas fa-clipboard-list text-cyan-400" />
                Registration Rules
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>
                    Must use <strong className="text-white">@vitstudent.ac.in</strong> email address to register
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>
                    Teams must consist of <strong className="text-white">5 members</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>
                    All team members must be <strong className="text-white">Hostellers from VIT Chennai</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>
                    Registration closes on <strong className="text-white">APRIL 02, 2026</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>
                    Participation is <strong className="text-white">FREE</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              {/*<p className="text-gray-400 mb-6 text-sm md:text-base">
                Ready to make a difference? Register now and secure your spot!
              </p>*/}
              <a
                href={registrationUrl}
                target="_blank"
                className="inline-block bg-cyan-400 text-black px-6 md:px-10 py-2.5 md:py-3 font-bold uppercase text-sm md:text-base tracking-widest hover:bg-cyan-300 transition cursor-pointer"
              >
                <i className="fas fa-pen-to-square mr-3" />
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
