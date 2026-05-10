"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { T, EASE } from "../../constants/tokens";
import CopyCommand from "./CopyCommand";
import DiscordLink from "./DiscordLink";

interface ServerCardProps {
  current?: number;
  max?: number;
}

export default function ServerCard({
  current = 47,
  max = 128,
}: ServerCardProps) {
  const pct = Math.round((current / max) * 100);
  const isHigh = pct >= 80;
  const [connectHov, setConnectHov] = useState(false);

  return (
    <    motion.div
      initial={{ opacity: 0, x: 32, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      className="w-full lg:w-[460px] shrink-0 bg-white/[0.025] border border-white/[0.07] rounded-[28px] p-[28px_24px_24px] lg:p-[36px_32px_32px] flex flex-col gap-0 backdrop-blur-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] relative overflow-hidden"
    >
      {/* Top glow */}
      <div
        aria-hidden
        className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[240px] h-[120px] bg-[radial-gradient(ellipse,rgba(201,169,110,0.07)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Header row */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <span className="font-['Manrope',sans-serif] font-bold text-[12px] lg:text-[13px] tracking-[-0.01em] text-[rgba(242,237,227,0.45)]">
          Server Status
        </span>

        {/* Live badge */}
        <span className="inline-flex items-center gap-[6px] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.22)] rounded-full py-0.5 lg:py-1 px-[8px] lg:px-[10px] pl-1.5 lg:pl-2">
          <span className="relative flex w-[6px] h-[6px] lg:w-[7px] lg:h-[7px]">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#22c55e] opacity-60" />
            <span className="relative w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#22c55e]" />
          </span>
          <span className="font-['Manrope',sans-serif] font-semibold text-[9px] lg:text-[10.5px] tracking-[0.08em] uppercase text-[#22c55e]">
            Online
          </span>
        </span>
      </div>

      {/* Player count */}
      <div className="mb-2">
        <div className="flex items-end gap-[6px] leading-none mb-3">
          <span
            className={[
              "font-['Manrope',sans-serif] font-extrabold text-[clamp(36px,7vw,52px)] tracking-[-0.05em] leading-none transition-colors duration-[400ms]",
              isHigh ? "text-[#fcd34d]" : "text-[#f2ede3]",
            ].join(" ")}
          >
            {current}
          </span>
          <span className="font-['Manrope',sans-serif] font-light text-[clamp(16px,3vw,28px)] text-white/[0.15] pb-[6px]">
            /
          </span>
          <span className="font-['Manrope',sans-serif] font-medium text-[clamp(14px,2.5vw,24px)] text-white/[0.28] pb-1 tracking-[-0.02em]">
            {max}
          </span>
        </div>

        {/* Label + percentage */}
        <div className="flex items-center justify-between mb-1.5 lg:mb-2">
          <span className="font-['Manrope',sans-serif] font-medium text-[10px] lg:text-[11px] tracking-[0.08em] uppercase text-[rgba(242,237,227,0.22)]">
            Hráčů online
          </span>
          <span
            className={[
              "font-['Manrope',sans-serif] font-semibold text-[11px] transition-colors duration-[400ms]",
              isHigh ? "text-[#fcd34d]" : "text-[rgba(242,237,227,0.22)]",
            ].join(" ")}
          >
            {pct}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] w-full rounded-full bg-white/[0.07] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            className={[
              "h-full rounded-full",
              isHigh
                ? "bg-gradient-to-r from-[#f59e0b] to-[#fcd34d]"
                : "bg-gradient-to-r from-[#16a34a] to-[#22c55e]",
            ].join(" ")}
          />
        </div>
      </div>

      {/* Connect button */}
      <motion.a
        href="fivem://connect/fivem.wx0.dev"
        onHoverStart={() => setConnectHov(true)}
        onHoverEnd={() => setConnectHov(false)}
        animate={{
          background: connectHov ? "#e8e3d9" : T.text,
          scale: connectHov ? 0.985 : 1,
        }}
        transition={{ duration: 0.18 }}
        className="flex items-center justify-center gap-[8px] lg:gap-[10px] px-5 lg:px-6 py-[12px] lg:py-[14px] rounded-2xl mt-4 lg:mt-6 mb-4 lg:mb-6 no-underline cursor-pointer overflow-hidden relative"
      >
        {/* Shimmer sweep */}
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: connectHov ? "200%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)] pointer-events-none"
        />
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke={T.bg}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>play</title>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span className="font-['Manrope',sans-serif] font-extrabold text-[13px] lg:text-[14.5px] tracking-[-0.02em] text-[#09090b]">
          Připojit se
        </span>
      </motion.a>

      {/* "A nebo" divider */}
      <div className="flex items-center gap-[12px] lg:gap-[14px] mb-4 lg:mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
        <span className="font-['Manrope',sans-serif] font-semibold text-[9px] lg:text-[10.5px] tracking-[0.14em] uppercase text-white/20 shrink-0">
          A nebo
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
      </div>

      {/* CopyCommand */}
      <CopyCommand />

      {/* Discord */}
      <div className="flex justify-center mt-4">
        <DiscordLink />
      </div>
    </motion.div>
  );
}
