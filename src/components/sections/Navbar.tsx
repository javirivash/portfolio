"use client";

import { useRef, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#resume", label: "Resume" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <nav
      className="sticky z-50 bg-paper"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to main content
      </a>

      <div className="jr-wrap">
        {/* Firma: name left, role and links right, over a 2px ink rule */}
        <div className="flex items-baseline justify-between gap-3 border-b-2 border-ink py-4 text-sm">
          <a href="#" className="text-[17px] font-extrabold no-underline">
            Javier Rivas
          </a>

          <div className="hidden items-baseline gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted no-underline transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="border-2 border-ink px-3 py-1 text-sm font-bold md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <ul id="mobile-menu" className="jr-lista md:hidden" style={{ columns: 1 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block no-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
