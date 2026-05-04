"use client";

import React from "react";
import Prism from "./Prism";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Community from "../components/landing/Community";
import Documentation from "../components/landing/Documentation";
import Footer from "../components/landing/Footer";

export default function MisfitLanding() {
  return (
    <div className="bg-[#09090b] text-[#f2ede3]">
      {/* ── Hero viewport ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Prism background — fills the hero exactly */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Prism
            animationType="rotate"
            timeScale={0.1}
            height={3.5}
            baseWidth={5.5}
            scale={2.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>

        {/* Navbar + Hero content layer */}
        <div className="relative z-[1] h-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* ── Rest of the page ──────────────────────────────────────────────────── */}
      <div className="relative z-[2] bg-[#09090b]">
        <Features />
        <Community />
        <Documentation />
        <Footer />
      </div>
    </div>
  );
}
