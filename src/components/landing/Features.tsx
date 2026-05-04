"use client";

import React from "react";
import {
  DashboardSquare01Icon,
  Shield01Icon,
  Settings03Icon,
  BookOpen01Icon,
} from "@hugeicons/core-free-icons";
import FadeUp from "./FadeUp";
import FeatureCard from "./FeatureCard";

const cards = [
  {
    icon: DashboardSquare01Icon,
    title: "Efektivní skripty",
    desc: "90% skriptů u nás na serveru je ručně sepsaný, a ten zbytek důkladně vybraný. Využíváme moderní metody FiveM Lua prostředí, jako jsou např. Statebagy, abychom zaručili co největší efektivitu a výkonnost na serveru.",
  },
  {
    icon: Shield01Icon,
    title: "Vlastní AntiCheat",
    desc: "Postavili jsme si vlastní AntiCheat systém, který je sepsaný tak, aby fungoval přesně pro náš server a nedošlo k chybným detekcím. Aktivně sledujeme cheating komunitu a adaptujeme naše detekce tak, abychom byli vždy o krok napřed.",
  },
  {
    icon: Settings03Icon,
    title: "90% originálních skriptů",
    desc: "Většinu skriptu a systému si programujeme sami, pouze tak máme absolutní kontrolu a umíme případně rychle vyřešit případné problémy. Vlastní skripty nám taky umožňují mít bezpečnost serveru pod palcem a zaručit fair-play mezi hráči.",
  },
  {
    icon: BookOpen01Icon,
    title: "Každá sekce, zdokumentovaná",
    desc: "Jedna z nevýhod propracovaného serveru je jeho komplikovanost, proto jsme zdokumentovali každou část, ať už jde o předměty, lokace a mechaniky, na serveru do přehledné dokumentace.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative z-[1] py-20 pb-[100px] px-7 max-w-[1160px] mx-auto"
    >
      {/* Section header */}
      <FadeUp className="mb-14">
        <p className="font-['Manrope',sans-serif] font-semibold text-[11px] tracking-[0.12em] uppercase text-[#c9a96e] mb-[18px]">
          Proč Misfit
        </p>

        <div className="flex items-end justify-between gap-10 flex-wrap">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[clamp(34px,5vw,56px)] tracking-[-0.045em] text-[#f2ede3] leading-[1.05] m-0">
            V čem se lišíme od 99%
            <br />
            <span className="font-['Cormorant_Garamond',serif] italic font-light text-[clamp(36px,5.4vw,62px)] text-[rgba(242,237,227,0.38)] tracking-[-0.025em]">
              československých serverů.
            </span>
          </h2>

          <p className="font-['Manrope',sans-serif] font-normal text-[15px] leading-[1.7] tracking-[-0.01em] text-[rgba(242,237,227,0.45)] max-w-[360px] m-0 pb-[6px]">
            CZ/SK scéna je v posledních letech postavena na cash-grab systému
            kde se servery skládají z uniklých záloh jiných serverů,
            ukradených skriptů a týmu nezkušených lidí. Tohle u nás
            nehledejte.
          </p>
        </div>
      </FadeUp>

      {/* Cards grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[14px]">
        {cards.map((c, i) => (
          <FeatureCard key={c.title} {...c} index={i} />
        ))}
      </div>
    </section>
  );
}
