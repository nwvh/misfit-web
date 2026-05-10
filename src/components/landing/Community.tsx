"use client";

import React from "react";
import FadeUp from "./FadeUp";

const tags = [
  "Sklady a prostory pro hráče",
  "Systém Dark Webu a VPN",
  "Skriptově dané eventy",
  "Systém craftingu",
  "Těžba kryptoměn a vylepšování racků",
  "Black market, který se pravidelně mění",
  "Obyčejné práce pro každého",
  "Propracovaný skill systém",
  "Nelegální aktivity",
  "PVP zóny mimo město",
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative z-[1] pb-[100px] px-4 md:px-7 max-w-[1160px] mx-auto"
    >
      <FadeUp>
        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[24px] p-6 md:p-[48px_52px] lg:p-[52px_56px] flex flex-col gap-6 md:gap-8 lg:gap-9">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {/* Left: title */}
            <div className="flex-1 w-full">
              <p className="font-['Manrope',sans-serif] font-semibold text-[11px] tracking-[0.12em] uppercase text-[#c9a96e] mb-[12px] md:mb-[14px]">
                Jen část toho, co u nás najdete
              </p>
              <h2 className="font-['Manrope',sans-serif] font-extrabold text-[clamp(22px,3vw,32px)] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.04em] text-[#f2ede3] leading-[1.1] m-0">
                Město, které se vyplatí
                <br />
                <span className="font-['Cormorant_Garamond',serif] italic font-light text-[clamp(24px,3.4vw,38px)] md:text-[clamp(28px,3.8vw,44px)] text-[rgba(242,237,227,0.45)]">
                  prozkoumat.
                </span>
              </h2>
            </div>

            {/* Right: description */}
            <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] md:text-[14.5px] leading-[1.68] md:leading-[1.72] tracking-[-0.01em] text-[rgba(242,237,227,0.45)] max-w-[360px] m-0 flex-1 w-full">
              Server je zasazený do blízko budoucnosti, kde hráči bojují o
              kontrolu nad přírodním zdrojem - Voltium. Ten, kdo ovládá tento
              zdroj, ovládá celé město.
            </p>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-['Manrope',sans-serif] font-medium text-[12px] md:text-[13px] text-[rgba(242,237,227,0.45)] bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 md:px-3 lg:px-4 py-[6px] md:py-[7px] inline-block"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
