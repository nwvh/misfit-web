"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserMultipleIcon,
  Alert01Icon,
  Notification01Icon,
  Settings01Icon,
  Store01Icon,
  DashboardSquare01Icon,
  Search01Icon,
  Logout01FreeIcons,
} from "@hugeicons/core-free-icons";

// ─── MOCK DATA ─────────────────────────────────────────────────────────────
const userData = {
  username: "wx",
  discordId: "123456789012345678",
  misfitCoins: 2500,
  totalPlaytime: "342h",
  isBanned: true,
  banReason: "Zneužití herních mechanik (Bug Abuse) - Ticket #4021",
  characters: [
    {
      id: "CID-0042",
      name: "Marcus Thorne",
      job: "LSPD - Poručík",
      cash: 12500,
      bank: 450000,
      playtime: "210h",
      vehicles: 3,
      properties: 2,
      status: "Zdráv",
      lastPlayed: "Před 2 hodinami",
    },
    {
      id: "CID-1089",
      name: "Elias Vance",
      job: "Nezaměstnaný",
      cash: 450,
      bank: 1200,
      playtime: "12h",
      vehicles: 0,
      properties: 0,
      status: "Ve vězení (12 měsíců)",
      lastPlayed: "Před 5 dny",
    },
  ],
  punishments: [
    {
      id: "#W-102",
      type: "Varování",
      date: "12. 04. 2026",
      admin: "lachy",
      reason: "Nerespektování Fear RP.",
      status: "Expirováno",
    },
    {
      id: "#B-084",
      type: "Ban (30 dní)",
      date: "01. 05. 2026",
      admin: "wx",
      reason: "Bug Abuse při craftingu.",
      status: "Aktivní",
    },
  ],
};

const EASE = [0.22, 1, 0.36, 1];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f2ede3] font-['Manrope'] selection:bg-[#c9a96e]/30">
      {/* ─── BANNER (Pouze pokud je ban) ─── */}
      <AnimatePresence>
        {userData.isBanned && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="relative z-[60] bg-red-600/10 border-b border-red-600/20 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={Alert01Icon}
                  size={18}
                  className="text-red-500 animate-pulse"
                />
                <span className="font-medium text-red-100/80">
                  <strong className="text-red-500 uppercase mr-2 tracking-wider">
                    Aktivní Ban:
                  </strong>
                  {userData.banReason}
                </span>
              </div>
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 underline decoration-red-500/30 underline-offset-4 transition-colors"
              >
                Žádost o unban
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HLAVNÍ NAVBAR ─── */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Hlavní Navigace */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#c9a96e] to-[#8d754a] flex items-center justify-center shadow-[0_0_20px_rgba(201,169,110,0.2)]">
                <span className="font-black text-black text-xl tracking-tighter">
                  M
                </span>
              </div>
              <span className="text-xl font-bold tracking-tighter hidden md:block text-[#f2ede3]">
                MISFIT
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {[
                {
                  id: "overview",
                  label: "Přehled",
                  icon: DashboardSquare01Icon,
                },
                { id: "characters", label: "Postavy", icon: UserMultipleIcon },
                { id: "store", label: "VIP Obchod", icon: Store01Icon },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTab === item.id
                      ? "bg-white/[0.06] text-[#c9a96e] border border-white/[0.05]"
                      : "text-white/40 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <HugeiconsIcon icon={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pravá část: Notifikace, Search, Profil */}
          <div className="flex items-center gap-4">
            <button className="p-2.5 rounded-xl text-white/20 hover:text-white hover:bg-white/5 transition hidden sm:block">
              <HugeiconsIcon icon={Search01Icon} size={20} />
            </button>
            <button className="relative p-2.5 rounded-xl text-white/20 hover:text-white hover:bg-white/5 transition">
              <HugeiconsIcon icon={Notification01Icon} size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#c9a96e] rounded-full border-2 border-[#09090b]" />
            </button>

            <div className="h-8 w-px bg-white/10 mx-2" />

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] font-bold text-xs">
                    P
                  </div>
                </div>
                <span className="text-sm font-bold pr-2">
                  {userData.username}
                </span>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-[#111115] border border-white/[0.1] rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-2xl"
                  >
                    <div className="px-4 py-3 border-b border-white/[0.05] mb-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        Přihlášen jako
                      </p>
                      <p className="text-sm font-bold text-white">
                        {userData.username}
                      </p>
                    </div>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition">
                      <HugeiconsIcon icon={Settings01Icon} size={18} />{" "}
                      Nastavení
                    </button>
                    <div className="h-px bg-white/[0.05] my-2" />
                    <a href="/login">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl transition">
                        <HugeiconsIcon icon={Logout01FreeIcons} size={18} />{" "}
                        Odhlásit se
                      </button>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── OBSAH ─── */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Glow pozadí pro hloubku */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 space-y-12">
          {/* HEADER SE STATISTIKAMI */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-2 uppercase text-white/90">
                Dashboard
              </h2>
              <p className="text-white/40 font-medium">
                Vítej zpět, spravuj své postavy a herní postup.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
              {[
                {
                  label: "Misfit Coins",
                  value: userData.misfitCoins,
                  color: "text-[#c9a96e]",
                },
                {
                  label: "Celkový odehraný čas",
                  value: userData.totalPlaytime,
                  color: "text-white",
                },
                {
                  label: "Postavy",
                  value: `${userData.characters.length}/4`,
                  color: "text-white",
                },
                {
                  label: "Stav účtu",
                  value: userData.isBanned ? "Omezen" : "Aktivní",
                  color: userData.isBanned ? "text-red-500" : "text-green-500",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-4 backdrop-blur-sm min-w-[140px]"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-xl font-bold tabular-nums ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOJE POSTAVY */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold tracking-tight">MOJE POSTAVY</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userData.characters.map((char, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={char.id}
                  className="group bg-white/[0.02] border border-white/[0.08] rounded-[32px] p-8 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <HugeiconsIcon icon={UserMultipleIcon} size={120} />
                  </div>

                  <div className="flex items-start justify-between relative z-10 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-[#c9a96e]">
                        <HugeiconsIcon icon={UserMultipleIcon} size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black uppercase group-hover:text-[#c9a96e] transition-colors">
                          {char.name}
                        </h4>
                        <p className="text-xs font-bold text-white/40 tracking-widest uppercase">
                          {char.job}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                        char.status === "Zdráv"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >
                      {char.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-black/20 rounded-2xl p-5 border border-white/[0.03]">
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">
                        Hotovost
                      </p>
                      <p className="text-lg font-bold">
                        ${char.cash.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-2xl p-5 border border-white/[0.03]">
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">
                        Banka
                      </p>
                      <p className="text-lg font-bold text-[#c9a96e]">
                        ${char.bank.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-between items-center text-[11px] font-bold text-white/20 uppercase tracking-widest">
                    <span>Odehraný čas: {char.playtime}</span>
                    <button className="text-white/40 hover:text-[#c9a96e] transition-colors">
                      Detaily postavy →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* HISTORIE TRESTŮ */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold tracking-tight">
                HISTORIE ÚČTU
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
            </div>

            <div className="bg-white/[0.01] border border-white/[0.06] rounded-[28px] overflow-hidden backdrop-blur-md">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/30">
                      Typ záznamu
                    </th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/30">
                      Důvod
                    </th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/30">
                      Admin
                    </th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/30">
                      Stav
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {userData.punishments.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="px-8 py-5">
                        <div className="flex flex-col">
                          <span
                            className={`font-bold ${p.type.includes("Ban") ? "text-red-500" : "text-orange-400"}`}
                          >
                            {p.type}
                          </span>
                          <span className="text-[10px] text-white/20">
                            {p.date}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm text-white/60 font-medium">
                        {p.reason}
                      </td>
                      <td className="px-8 py-5 text-sm text-white/40 font-mono">
                        @{p.admin}
                      </td>
                      <td className="px-8 py-5 text-right">
                        <span
                          className={`text-[10px] font-black px-2 py-1 rounded border uppercase tracking-tighter ${
                            p.status === "Aktivní"
                              ? "bg-red-500/10 text-red-500 border-red-500/20"
                              : "bg-white/5 text-white/20 border-white/10"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/[0.05] mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 MISFIT ROLEPLAY. Všechna práva vyhrazena.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">
            Pravidla
          </a>
          <a href="#" className="hover:text-white transition">
            Podpora
          </a>
          <a href="#" className="hover:text-white transition">
            GDPR
          </a>
        </div>
      </footer>
    </div>
  );
}
