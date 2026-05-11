"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01FreeIcons,
  Loading03Icon,
  Tick01Icon,
  AlertDiamondIcon,
} from "@hugeicons/core-free-icons";
import { useFingerprint } from "../functions/fingerprint";
import ky from "ky";

type Status = "idle" | "loading" | "success" | "rejected";

export default function Captcha() {
  const [status, setStatus] = useState<Status>("idle");
  const fingerprint = useFingerprint();

  const token = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get("token");
  }, []);

  const handleVerify = async () => {
    if (!fingerprint || !token) return;
    setStatus("loading");

    try {
      const cached = await cookieStore.get("_fp");
      const cachedFingerprint = cached?.value ?? null;

      if (!cachedFingerprint) {
        await cookieStore.set({
          name: "_fp",
          value: btoa(JSON.stringify(fingerprint)),
          expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
          sameSite: "strict",
        });
      }

      const res = await ky
        .post(`${process.env.FIVEM_SERVER_URL}/verify/verifyToken`, {
          json: {
            browserFingerprint: JSON.stringify(fingerprint),
            token,
            cachedFingerprint: cachedFingerprint
              ? atob(cachedFingerprint)
              : null,
          },
        })
        .json<{ status: string }>();

      setStatus(res.status === "verified" ? "success" : "rejected");
    } catch {
      setStatus("rejected");
    }
  };

  const isReady = !!fingerprint && !!token && status === "idle";

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f2ede3] flex flex-col font-sans">
      {/* Header */}
      <header className="px-10 py-7 flex items-center justify-between border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center">
            <HugeiconsIcon
              icon={Shield01FreeIcons}
              size={16}
              color="#c9a96e"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-sm font-semibold tracking-wide">Misfit</span>
        </div>
        <span className="text-xs text-[#f2ede3]/20 tracking-widest uppercase">
          Ověřovací portál
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px] bg-white/[0.02] border border-white/[0.07] rounded-[28px] p-12 text-center backdrop-blur-2xl"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-[20px] bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-6">
            <HugeiconsIcon
              icon={Shield01FreeIcons}
              size={32}
              color="#c9a96e"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-2xl font-medium mb-3">Ověření hráče</h1>

          <p className="text-sm leading-relaxed text-[#f2ede3]/45 mb-8">
            Vypadá to, že jsi u nás poprvé. U nových hráčů vyžadujeme jednoduché
            ověření kliknutím na captcha box níže, nezabere to více než pár
            sekund.
          </p>

          {/* Button area */}
          <div className="mt-5">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.button
                  key="idle"
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={handleVerify}
                  disabled={!isReady}
                  className="w-full py-4 rounded-2xl bg-[#f2ede3] text-[#09090b] font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {!fingerprint ? "Načítání..." : "Nejsem robot, pokračovat"}
                </motion.button>
              )}

              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 py-4 text-[#f2ede3]/45"
                >
                  <HugeiconsIcon
                    icon={Loading03Icon}
                    size={20}
                    className="animate-spin"
                  />
                  <span className="text-sm">Ověřování identity...</span>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 text-[#22c55e] font-semibold flex items-center justify-center gap-2"
                >
                  <HugeiconsIcon icon={Tick01Icon} size={20} />
                  Ověřeno. Můžeš se připojit.
                </motion.div>
              )}

              {status === "rejected" && (
                <motion.div
                  key="rejected"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 text-red-400 font-semibold flex flex-col items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={AlertDiamondIcon} size={20} />
                    Přístup zamítnut.
                  </div>
                  <span className="text-xs font-normal text-[#f2ede3]/40">
                    Pokud jde o chybu, založ ticket na Discordu.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center p-10 text-xs text-[#f2ede3]/25 max-w-8xl mx-auto w-full">
        <div className="flex justify-between items-center gap-10">
          <span>Ověřovací token: {token ?? "—"}</span>
          <span>
            Potřebuješ pomoc?{" "}
            <a
              href="https://discord.gg/Eb3rH7c"
              className="text-[#c9a96e] hover:underline"
            >
              Kontaktuj podporu
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
