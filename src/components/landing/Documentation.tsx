"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { T } from "../../constants/tokens";
import FadeUp from "./FadeUp";

export default function Documentation() {
  const [hov, setHov] = useState(false);

  return (
    <section
      id="documentation"
      className="relative z-[1] pb-[110px] px-4 md:px-7 max-w-[1160px] mx-auto"
    >
      <FadeUp>
        <div className="bg-[#f2ede3] rounded-[28px] p-6 md:p-[56px_60px] lg:p-[64px_68px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 relative overflow-hidden">
          {/* Grain overlay — defined in global.css as .doc-grain */}
          <div
            aria-hidden
            className="doc-grain absolute inset-0 pointer-events-none opacity-50"
          />

          {/* Decorative circle */}
          <div
            aria-hidden
            className="absolute -right-[60px] -top-[60px] w-[280px] h-[280px] rounded-full bg-black/[0.04] pointer-events-none"
          />

          {/* Left content */}
          <div className="flex-1 w-full max-w-[480px] relative order-2 md:order-1">
            {/* Icon */}
            <div className="w-[46px] md:w-[50px] h-[46px] md:h-[50px] rounded-[12px] md:rounded-[14px] bg-[rgba(9,9,11,0.08)] flex items-center justify-center mb-4 md:mb-6">
              <HugeiconsIcon
                icon={BookOpen01Icon}
                size={20} md:size={24}
                color={T.bg}
                strokeWidth={1.5}
              />
            </div>

            <h2 className="font-['Manrope',sans-serif] font-extrabold text-[clamp(24px,3.4vw,38px)] md:text-[clamp(28px,3.8vw,46px)] tracking-[-0.045em] text-[#09090b] leading-[1.08] mb-3 md:mb-4">
              Každá část serveru je
              <br />
              <span className="font-['Cormorant_Garamond',serif] italic font-light text-[clamp(26px,3.8vw,42px)] md:text-[clamp(30px,4.2vw,52px)] text-[rgba(9,9,11,0.5)] tracking-[-0.02em]">
                zdokumentovaná.
              </span>
            </h2>

            <p className="font-['Manrope',sans-serif] font-normal text-[14px] md:text-[15px] leading-[1.68] md:leading-[1.72] tracking-[-0.01em] text-[rgba(9,9,11,0.52)] m-0">
              Ať už jde o recept pro crafting, lokace, mechanika či předmět na
              serveru, všechno je přehledně zdokumentované. Nemusíš tak složitě
              zjišťovat, jak něco funguje, vše je popsané v dokumentaci. Ty se
              tak můžeš soustředit na to, co je zrovna důležité, třeba tvůj
              podnik.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 order-1 md:order-2 mt-6 md:mt-0">
            <button
              type="button"
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              className="font-['Manrope',sans-serif] font-bold text-[13.5px] md:text-[14.5px] tracking-[-0.02em] px-6 md:px-7 py-[13px] md:py-[15px] rounded-full bg-[#09090b] text-[#f2ede3] border-none cursor-pointer transition-[background,transform] duration-200 flex items-center gap-[8px] md:gap-[10px] hover:bg-[#1a1a1e] hover:scale-[0.97]"
            >
              Přečíst si dokumentaci
              <motion.span
                animate={{ x: hov ? 3 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16} md:size={18}
                  color={T.text}
                  strokeWidth={2}
                />
              </motion.span>
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
