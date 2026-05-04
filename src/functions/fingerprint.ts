import { useEffect, useState } from "react";

export interface Fingerprint {
  userAgent: string;
  language: string;
  languages: readonly string[];
  platform: string;
  hardwareConcurrency: number;
  deviceMemory?: number;

  screen: {
    width: number;
    height: number;
    colorDepth: number;
    pixelRatio: number;
  };

  timezone: string;
  cookiesEnabled: boolean;
  doNotTrack: string | null;
  touchSupport: boolean;

  webgl?: {
    vendor: string | null;
    renderer: string | null;
  };

  audioFingerprint?: string;
}

/* ------------------ WebGL ------------------ */
function getWebGLInfo() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) return null;

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

    if (!debugInfo) {
      return { vendor: null, renderer: null };
    }

    return {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    };
  } catch {
    return null;
  }
}

/* ------------------ Audio ------------------ */
async function getAudioFingerprint(): Promise<string | null> {
  try {
    const ctx = new (
      window.OfflineAudioContext || (window as any).webkitOfflineAudioContext
    )(1, 44100, 44100);

    const oscillator = ctx.createOscillator();
    oscillator.type = "triangle";

    const compressor = ctx.createDynamicsCompressor();

    oscillator.connect(compressor);
    compressor.connect(ctx.destination);

    oscillator.start(0);

    const buffer = await ctx.startRendering();

    let sum = 0;
    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      sum += Math.abs(data[i]);
    }

    return sum.toString();
  } catch {
    return null;
  }
}

/* ------------------ Hook ------------------ */
export function useFingerprint() {
  const [data, setData] = useState<Fingerprint | null>(null);

  useEffect(() => {
    let mounted = true;

    async function collect() {
      const base: Fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: (navigator as any).deviceMemory,

        screen: {
          width: window.screen.width,
          height: window.screen.height,
          colorDepth: window.screen.colorDepth,
          pixelRatio: window.devicePixelRatio,
        },

        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack,
        touchSupport: "ontouchstart" in window,
      };

      // Run async + sync in parallel
      const [webgl, audio] = await Promise.all([
        Promise.resolve(getWebGLInfo()),
        getAudioFingerprint(),
      ]);

      if (!mounted) return;

      setData({
        ...base,
        webgl: webgl || undefined,
        audioFingerprint: audio || undefined,
      });
    }

    collect();

    return () => {
      mounted = false;
    };
  }, []);

  return data;
}
