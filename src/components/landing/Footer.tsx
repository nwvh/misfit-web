"use client";

import React from "react";

// ─── FooterLink ───────────────────────────────────────────────────────────────
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="font-['Manrope',sans-serif] font-medium text-[13px] tracking-[-0.01em] text-[rgba(242,237,227,0.22)] no-underline px-3 py-[6px] rounded-[7px] transition-[color,background] duration-[180ms] hover:text-[#f2ede3] hover:bg-white/[0.04]"
    >
      {children}
    </a>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const links = [
  { label: "Discord Server", href: "#" },
  { label: "Pravidla", href: "#" },
  { label: "Dokumentace / Wiki", href: "#" },
  { label: "Status", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.07] max-w-[1160px] mx-auto px-4 md:px-7 py-6 md:pt-9 md:pb-8 lg:pb-11">
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-6 md:mb-7">
        {/* Wordmark */}
        <div className="font-['Manrope',sans-serif] font-extrabold text-[18px] md:text-[20px] tracking-[-0.045em] text-[#f2ede3] text-center md:text-left">
          Misfit
          <span className="font-['Cormorant_Garamond',serif] italic font-light text-[14px] md:text-[16px] text-[rgba(242,237,227,0.22)] ml-[4px] md:ml-[6px]">
            — Budoucnost roleplaye.
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-[4px] md:gap-[6px] flex-wrap justify-center md:justify-end">
          {links.map(({ label, href }) => (
            <FooterLink key={label} href={href}>
              {label}
            </FooterLink>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4 pt-4 md:pt-5 border-t border-white/[0.04]">
        <p className="font-['Manrope',sans-serif] font-normal text-[11px] md:text-[12px] tracking-[-0.01em] text-[rgba(242,237,227,0.2)] m-0 text-center">
          © 2025 Misfit. Všechna práva vyhrazena.
        </p>
        <p className="font-['Manrope',sans-serif] font-normal text-[11px] md:text-[12px] tracking-[-0.01em] text-[rgba(242,237,227,0.18)] m-0 text-center">
          Made with ❤️ by{" "}
          <a
            href="https://wx0.dev"
            className="font-bold underline text-purple-200 opacity-60"
          >
            wx
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
