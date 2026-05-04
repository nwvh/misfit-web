"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EASE } from "../../constants/tokens";

// ─── NavLink ──────────────────────────────────────────────────────────────────
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="font-['Manrope',sans-serif] font-medium text-[13.5px] tracking-[-0.01em] text-[rgba(242,237,227,0.45)] no-underline px-[14px] py-[6px] rounded-lg transition-[color,background] duration-[180ms] hover:text-[#f2ede3] hover:bg-white/[0.04]"
    >
      {children}
    </a>
  );
}

// ─── PillButton ───────────────────────────────────────────────────────────────
interface PillButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function PillButton({ children, onClick }: PillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-['Manrope',sans-serif] font-bold text-[13.5px] tracking-[-0.015em] px-[22px] py-[9px] rounded-full bg-[#f2ede3] text-[#09090b] border-none cursor-pointer transition-[background,transform] duration-[180ms] flex items-center gap-2 whitespace-nowrap hover:bg-[#ddd8ce] hover:scale-[0.97]"
    >
      {children}
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection requires window API — useEffect is necessary here
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Domů", href: "/" },
    { label: "V čem se lišíme?", href: "#features" },
    { label: "O serveru", href: "#community" },
    { label: "Dokumentace", href: "#documentation" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={[
        "fixed top-0 left-0 right-0 z-[100] transition-[background,border-color] duration-[400ms]",
        scrolled
          ? "bg-[rgba(9,9,11,0.82)] backdrop-blur-[18px] backdrop-saturate-[1.2] border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1160px] mx-auto px-7 h-[66px] flex items-center justify-between">
        {/* Wordmark */}
        <div className="font-['Manrope',sans-serif] font-extrabold text-[21px] tracking-[-0.045em] text-[#f2ede3] select-none">
          Misfit
        </div>

        {/* Desktop links */}
        <div className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <NavLink key={label} href={href}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <a href="/login">
          <PillButton onClick={() => {}}>Přihlášení</PillButton>
        </a>
      </div>
    </motion.nav>
  );
}
