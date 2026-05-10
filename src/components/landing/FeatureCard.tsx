"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { T } from "../../constants/tokens";
import FadeUp from "./FadeUp";

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  index: number;
}

export default function FeatureCard({
  icon,
  title,
  desc,
  index,
}: FeatureCardProps) {
  const [hov, setHov] = useState(false);

  return (
    <FadeUp delay={index * 0.09} className="h-full">
      <motion.div
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        animate={{
          y: hov ? -5 : 0,
          borderColor: hov ? T.borderHover : T.border,
          background: hov
            ? "rgba(255,255,255,0.038)"
            : "rgba(255,255,255,0.018)",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="border border-white/[0.07] rounded-[22px] p-[28px_24px_30px] md:p-[34px_32px_36px] h-full cursor-default"
      >
        {/* Icon */}
        <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-[11px] md:rounded-[13px] bg-[rgba(201,169,110,0.09)] border border-[rgba(201,169,110,0.22)] flex items-center justify-center mb-[18px] md:mb-[22px]">
          <HugeiconsIcon
            icon={icon}
            size={22}
            color={T.accent}
            strokeWidth={1.5}
          />
        </div>

        <h3 className="font-['Manrope',sans-serif] font-bold text-[15px] md:text-[16.5px] tracking-[-0.025em] text-[#f2ede3] mb-[9px] md:mb-[11px] leading-[1.2]">
          {title}
        </h3>

        <p className="font-['Manrope',sans-serif] font-normal text-[13px] md:text-[14px] leading-[1.65] md:leading-[1.68] tracking-[-0.008em] text-[rgba(242,237,227,0.45)] m-0">
          {desc}
        </p>
      </motion.div>
    </FadeUp>
  );
}
