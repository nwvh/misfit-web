"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { T } from "../../constants/tokens";

export default function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const CMD = "connect fivem.wx0.dev";

  const copy = useCallback(() => {
    navigator.clipboard.writeText(CMD).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <p className="font-['Manrope',sans-serif] font-medium text-[11px] tracking-[0.09em] uppercase text-[rgba(242,237,227,0.22)]">
        Rychlé připojení přes F8 → vlož do konzole
      </p>

      <button
        type="button"
        onClick={copy}
        className={[
          "inline-flex items-stretch bg-white/[0.035] border rounded-[14px] overflow-hidden cursor-pointer transition-[border-color] duration-[250ms]",
          copied
            ? "border-[rgba(34,197,94,0.35)]"
            : "border-white/[0.07] hover:border-white/[0.14]",
        ].join(" ")}
      >
        {/* F8 keyboard hint */}
        <div className="px-[18px] py-[13px] flex items-center gap-3 border-r border-white/[0.07]">
          <span className="font-['Manrope',sans-serif] font-bold text-[10px] tracking-[0.1em] uppercase text-[rgba(242,237,227,0.22)] bg-white/[0.06] px-2 py-[3px] rounded-[5px] border border-white/[0.07]">
            F8
          </span>
        </div>

        {/* Command text */}
        <div className="px-[22px] py-[13px] flex items-center">
          <span className="font-['Manrope',sans-serif] font-medium text-[14.5px] tracking-[0.01em] text-[#f2ede3]">
            {CMD}
          </span>
        </div>

        {/* Copy icon */}
        <div
          className={[
            "px-[18px] py-[13px] border-l border-white/[0.07] flex items-center justify-center min-w-[50px] transition-[background] duration-[250ms]",
            copied ? "bg-[rgba(34,197,94,0.09)]" : "bg-transparent",
          ].join(" ")}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="tick"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HugeiconsIcon
                  icon={Tick01Icon}
                  size={16}
                  color={T.green}
                  strokeWidth={2.5}
                />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HugeiconsIcon
                  icon={Copy01Icon}
                  size={16}
                  color={T.muted}
                  strokeWidth={1.5}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
