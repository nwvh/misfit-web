"use client";

import Dashboard from "./dashboard/Dashboard";

export default function DashboardPage() {
  return (
    <div className="bg-[#09090b] text-[#f2ede3]">
      {/* ── Hero viewport ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Prism background — fills the hero exactly */}

        {/* Navbar + Hero content layer */}
        <div className="relative z-[1] h-full flex flex-col">
          <Dashboard />
        </div>
      </section>
    </div>
  );
}
