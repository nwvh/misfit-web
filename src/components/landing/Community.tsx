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
      className="relative z-[1] pb-[100px] px-7 max-w-[1160px] mx-auto"
    >
      <FadeUp>
        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[24px] p-[52px_56px] flex flex-col gap-9">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            {/* Left: title */}
            <div className="flex-1 min-w-[240px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[11px] tracking-[0.12em] uppercase text-[#c9a96e] mb-[14px]">
                Jen část toho, co u nás najdete
              </p>
              <h2 className="font-['Manrope',sans-serif] font-extrabold text-[clamp(26px,3.5vw,38px)] tracking-[-0.04em] text-[#f2ede3] leading-[1.1] m-0">
                Město, které se vyplatí
                <br />
                <span className="font-['Cormorant_Garamond',serif] italic font-light text-[clamp(28px,3.8vw,44px)] text-[rgba(242,237,227,0.45)]">
                  prozkoumat.
                </span>
              </h2>
            </div>

            {/* Right: description */}
            <p className="font-['Manrope',sans-serif] font-normal text-[14.5px] leading-[1.72] tracking-[-0.01em] text-[rgba(242,237,227,0.45)] max-w-[360px] m-0 pt-1 flex-1 min-w-[240px]">
              Server je zasazený do blízko budoucnosti, kde hráči bojují o
              kontrolu nad přírodním zdrojem - Voltium. Ten, kdo ovládá tento
              zdroj, ovládá celé město.
            </p>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-['Manrope',sans-serif] font-medium text-[13px] text-[rgba(242,237,227,0.45)] bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-[7px] inline-block"
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
