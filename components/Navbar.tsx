"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PROBLEMS", href: "/problems" },
    //{ label: "MERCH", href: "/merch" },
    { label: "ORGANIZERS", href: "/#organizers" },
    { label: "GALLERY", href: "/#gallery" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="timer-typography timer-nav sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3 shrink-0">
  <img
    src="/vit_cystal_logo.png"
    alt="VIT Crystal"
    className="h-8 w-auto"
    style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
  />
  <img
    src="/solveathonlogo.png"
    alt="Solve-A-Thon"
    className="h-10 w-auto hidden"
  />
</a>

      {/* Desktop Navigation */}
      <div className="timer-nav-pill hidden lg:flex items-center px-6 py-2">
        {navItems.map((item, index, arr) => (
          <a
            key={item.label}
            href={item.href}
            className={`timer-nav-link text-xs md:text-sm uppercase transition px-4 border-white/20 ${
              index !== 0 ? "border-l" : ""
            }`}
            
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Desktop Register Button */}
      <a
        href="/register"
        className="timer-accent-btn hidden lg:block px-6 py-2 text-sm cursor-pointer"
      >
        REGISTER
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white hover:text-[#c8f059] transition p-2 cursor-pointer"
      >
        <i className={`fas fa-${mobileMenuOpen ? "times" : "bars"} text-xl`} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#07080a]/95 backdrop-blur-sm border-b border-white/10 lg:hidden">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="timer-nav-link block text-sm uppercase transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/register"
              className="timer-accent-btn w-full px-6 py-2 text-sm mt-2 text-center cursor-pointer block"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGISTER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
