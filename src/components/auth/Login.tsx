"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../constants/tokens";

function DiscordIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 71 55"
      fill="currentColor"
      aria-hidden
    >
      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.401329 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C7.26676 50.5515 13.9336 53.5943 20.4786 55.5773C20.571 55.6058 20.6689 55.5716 20.7282 55.4946C22.2515 53.4093 23.6117 51.2154 24.7752 48.9096C24.8372 48.7862 24.778 48.6402 24.6469 48.5907C22.4789 47.7535 20.4141 46.7274 18.4247 45.5576C18.2796 45.4728 18.2684 45.264 18.4023 45.1622C18.8139 44.8518 19.2255 44.5301 19.6175 44.2056C19.6843 44.1518 19.7766 44.1406 19.8542 44.1772C31.5479 49.5054 44.2239 49.5054 55.7714 44.1772C55.849 44.1378 55.9413 44.149 56.0109 44.2028C56.403 44.5273 56.8145 44.8518 57.2289 45.1622C57.3628 45.264 57.3544 45.4728 57.2093 45.5576C55.2199 46.7472 53.1551 47.7535 50.9843 48.5879C50.8532 48.6374 50.7968 48.7862 50.8588 48.9096C52.0451 51.2126 53.4054 53.4065 54.9007 55.4918C54.9572 55.5716 55.0579 55.6058 55.1503 55.5773C61.7231 53.5943 68.3899 50.5515 75.2709 45.5576C75.3241 45.5182 75.3576 45.459 75.3633 45.3941C76.8672 30.0791 72.8141 16.7757 64.9949 4.9823C64.9754 4.9429 64.9418 4.9147 64.9025 4.8978H60.1045ZM25.182 37.3338C21.8442 37.3338 19.1204 34.2951 19.1204 30.5725C19.1204 26.8499 21.789 23.8112 25.182 23.8112C28.6022 23.8112 31.2992 26.8782 31.2436 30.5725C31.2436 34.2951 28.575 37.3338 25.182 37.3338ZM50.8532 37.3338C47.5154 37.3338 44.7916 34.2951 44.7916 30.5725C44.7916 26.8499 47.4602 23.8112 50.8532 23.8112C54.2734 23.8112 56.9704 26.8782 56.9148 30.5725C56.9148 34.2951 54.2734 37.3338 50.8532 37.3338Z" />
    </svg>
  );
}

export default function Login() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center relative overflow-hidden">
      {/* Radial glow — top */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(201,169,110,0.06)_0%,transparent_65%)] pointer-events-none"
      />
      {/* Radial glow — bottom */}
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(88,101,242,0.05)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Faint watermark */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Manrope',sans-serif] font-black text-[clamp(100px,16vw,200px)] tracking-[-0.06em] text-white/[0.015] select-none pointer-events-none whitespace-nowrap"
      >
        MISFIT
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="relative z-10 w-full max-w-[420px] mx-4"
      >
        <div className="bg-white/[0.025] border border-white/[0.08] rounded-[28px] p-10 flex flex-col items-center gap-8 backdrop-blur-sm shadow-[0_32px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Logo + wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] flex items-center justify-center mb-1">
              <span className="font-['Manrope',sans-serif] font-black text-[22px] tracking-[-0.05em] text-[#c9a96e]">
                M
              </span>
            </div>
            <h1 className="font-['Manrope',sans-serif] font-extrabold text-[26px] tracking-[-0.04em] text-[#f2ede3] leading-none">
              Misfit
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[17px] tracking-[-0.01em] text-[rgba(242,237,227,0.4)]">
              Hráčský portál
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06]" />

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-center"
          >
            <p className="font-['Manrope',sans-serif] font-normal text-[14.5px] leading-[1.7] tracking-[-0.01em] text-[rgba(242,237,227,0.5)]">
              Přihlas se přes Discord pro přístup k portálu hráče, správě postav
              a přehledu trestů.
            </p>
          </motion.div>

          {/* Discord button */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="w-full"
          >
            <a
              href="/dashboard"
              className="group w-full flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-['Manrope',sans-serif] font-bold text-[14.5px] tracking-[-0.015em] px-7 py-[14px] rounded-2xl transition-[background,transform] duration-200 hover:scale-[0.98] no-underline relative overflow-hidden"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
              <DiscordIcon />
              Přihlásit se přes Discord
            </a>
          </motion.div>

          {/* Footer note */}
          <p className="font-['Manrope',sans-serif] font-normal text-[11.5px] tracking-[0.01em] text-[rgba(242,237,227,0.2)] text-center leading-[1.6]">
            Přihlášením souhlasíš s pravidly serveru.
            <br />
            Pouze pro registrované hráče Misfitu.
          </p>
        </div>

        {/* Back link */}
        <div className="flex justify-center mt-6">
          <a
            href="/"
            className="font-['Manrope',sans-serif] font-medium text-[13px] tracking-[-0.01em] text-[rgba(242,237,227,0.3)] hover:text-[rgba(242,237,227,0.6)] no-underline transition-colors duration-150"
          >
            ← Zpět na web
          </a>
        </div>
      </motion.div>
    </div>
  );
}
