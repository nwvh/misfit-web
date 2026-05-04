"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../constants/tokens";
import ServerCard from "./ServerCard";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative z-[1] min-h-screen flex flex-col items-center justify-center pt-[100px] px-2 pb-[72px]"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(201,169,110,0.05)_0%,transparent_65%)] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(201,169,110,0.03)_0%,transparent_60%)] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Manrope',sans-serif] font-black text-[clamp(120px,18vw,220px)] tracking-[-0.06em] text-white/[0.018] select-none pointer-events-none whitespace-nowrap"
      >
        MISFIT
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-[1fr_auto] gap-[clamp(40px,6vw,88px)] items-center w-full max-w-[50vw]">
        {/* LEFT: editorial copy */}
        <div className="flex flex-col gap-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="inline-flex items-center gap-[9px] bg-white/[0.045] border border-white/[0.07] rounded-full px-[14px] py-[5px] pl-[9px] mb-9 self-start"
          >
            <div className="w-[7px] h-[7px] rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
            <span className="font-['Manrope',sans-serif] font-medium text-[12px] tracking-[0.02em] text-[rgba(242,237,227,0.45)]">
              Criminal Update nyní na serveru
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="mb-7"
          >
            <h1 className="font-['Manrope',sans-serif] font-extrabold text-[clamp(48px,6.5vw,82px)] leading-none tracking-[-0.048em] text-[#f2ede3] m-0">
              Misfits
            </h1>
            <h2 className="font-['Cormorant_Garamond',serif] italic font-light text-[clamp(46px,6.8vw,88px)] leading-[1.05] tracking-[-0.02em] text-[#c9a96e] m-0">
              budoucnost roleplaye
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            className="font-['Manrope',sans-serif] font-normal text-[16px] leading-[1.72] tracking-[-0.012em] text-[rgba(242,237,227,0.45)] max-w-[440px] mb-12 mt-0"
          >
            Semi-RP server zasazený v blízké budoucnosti. Důkladně jsme
            promysleli každé rozhodnutí, abychom zaručili zážitek, který jste v
            CZ/SK nikde jinde nezažili.
          </motion.p>
        </div>

        {/* RIGHT: server card */}
        <ServerCard current={47} max={128} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(242,237,227,0.22)] to-transparent mx-auto"
        />
      </motion.div>

      {/* Ping keyframe */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
