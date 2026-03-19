export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "/" },
    { label: "PROBLEMS", href: "/problems" },
    //{ label: "MERCH", href: "/merch" },
    { label: "ORGANIZERS", href: "/#organizers" },
    { label: "GALLERY", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-neutral-900/75 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 md:px-8 lg:px-20 py-12 md:py-16 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-widest mb-4">
              SOLVE-A-THON&apos;26
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Code - Compete - Conquer
            </p>
            <p className="text-gray-500 text-xs mt-2">
              3rd - 4th April 2026
            </p>
          </div>

          {/* Quick Links - Desktop Only */}
          <div className="hidden md:block">
            <h4 className="text-base md:text-lg font-bold text-white mb-4 tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition text-xs md:text-sm tracking-wide flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-emerald-300 text-[10px]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-bold text-white mb-4 tracking-widest uppercase">
              Contact Us
            </h4>

              <div>
                <p className="font-medium text-white text-sm md:text-base">
                  Dr. Natarajan B
                  <span className="block text-gray-400 text-xs md:text-sm font-normal">
                    Event Coordinator
                  </span>
                </p>

                <a
                  href="mailto:natarajan.b@vit.ac.in"
                  className="mt-2 inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <i className="fas fa-envelope text-cyan-400" />
                  natarajan.b@vit.ac.in
                </a>
              </div>
              <div>
                <p className="font-medium text-white text-sm md:text-base">
                  Dr. Revathi M
                  <span className="block text-gray-400 text-xs md:text-sm font-normal">
                    Event Coordinator
                  </span>
                </p>

                <a
                  href="mailto:m.revathi@vit.ac.in"
                  className="mt-2 inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <i className="fas fa-envelope text-cyan-400" />
                  m.revathi@vit.ac.in
                </a>
              </div>

  <div className="flex items-start gap-2 text-gray-400 text-sm">
    <i className="fas fa-map-marker-alt text-emerald-300 mt-1 flex-shrink-0" />
    <span>
      VIT Chennai<br />
    </span>
  </div>

  {/* Optional: add phone if you have official contact */}
  {/* 
  <div className="flex items-center gap-2 text-gray-300 text-sm">
    <i className="fas fa-phone-alt text-cyan-400" />
    <span>+91 44 3993 1555 (General Enquiry)</span>
  </div>
  */}
</div>
        </div>

        {/* Divider */}
        <div className="mt-8 md:mt-12 border-t border-white/10 pt-6">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            &copy; Solve-A-Thon'26 VIT Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
