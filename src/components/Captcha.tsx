"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01FreeIcons,
  Loading03Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import { useFingerprint } from "../functions/fingerprint";

export default function Captcha() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const fingerprint = useFingerprint();

  const handleVerify = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
    console.log(JSON.stringify(fingerprint, null, 2));
  };

  return (
    // bg-[#09090b] je tvoje barva pozadí, min-h-screen zajistí celou výšku
    <div className="min-h-screen bg-[#09090b] text-[#f2ede3] flex flex-col font-sans">
      {/* Header */}
      <header className="p-10">
        <div className="text-center text-[21px] font-extrabold tracking-[-0.045em]">
          Misfit
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px] bg-white/[0.02] border border-white/[0.07] rounded-[28px] p-12 text-center backdrop-blur-2xl"
        >
          {/* Icon Container */}
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

          {/* Captcha Button Area */}
          <div className="mt-5">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.button
                  key="idle"
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={handleVerify}
                  className="w-full py-4 rounded-2xl bg-[#f2ede3] text-[#09090b] font-semibold text-sm border-none cursor-pointer flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                >
                  Nejsem robot, pokračovat
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
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center p-10 text-xs text-[#f2ede3]/45">
        Potřebuješ pomoc?{" "}
        <a href="/" className="text-[#c9a96e] hover:underline">
          Kontaktuj podporu
        </a>
      </footer>
    </div>
  );
}
