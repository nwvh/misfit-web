"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function DiscordLink() {
  const [hov, setHov] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="font-['Manrope',sans-serif] font-semibold text-[13.5px] tracking-[-0.01em] no-underline flex items-center gap-[7px] transition-colors duration-200 text-[rgba(242,237,227,0.45)] hover:text-[#5865F2]"
    >
      Přidej se k nám na Discordu
      <motion.span
        animate={{ x: hov ? 3 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex"
      >
        <HugeiconsIcon icon={ArrowRight01Icon} size={15} color="currentColor" strokeWidth={2} />
      </motion.span>
    </a>
  );
}
