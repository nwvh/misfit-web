import { useEffect, useState } from "react";

export interface Fingerprint {
  userAgent: string;
  platform: string;
  language: string;
  languages: readonly string[];
  hardwareConcurrency: number;
  deviceMemory?: number;
  screen: {
    width: number;
    height: number;
    colorDepth: number;
    pixelRatio: number;
  };
  timezone: string;
  webgl: {
    vendor: string | null;
    renderer: string | null;
    version: string | null;
    maxTextureSize: number | null;
    maxViewportDims: string | null;
  } | null;
  canvasFingerprint: string | null;
  audioFingerprint: string | null;
  mathFingerprint: string;
  collectedAt: number;
}

/* ─── WebGL ─── */
function getWebGLInfo(): Fingerprint["webgl"] {
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return null;

    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const maxViewport = gl.getParameter(gl.MAX_VIEWPORT_DIMS) as Int32Array;

    return {
      vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : null,
      renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : null,
      version: gl.getParameter(gl.VERSION),
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxViewportDims: maxViewport ? Array.from(maxViewport).join("x") : null,
    };
  } catch {
    return null;
  }
}

/* ─── Canvas 2D ─── */
function getCanvasFingerprint(): string | null {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 280;
    canvas.height = 60;
    const ctx = canvas.getContext("2d")!;

    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.font = "11pt no-real-font-123";
    ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.font = "18pt Arial";
    ctx.fillText("Cwm fjordbank glyphs vext quiz", 4, 45);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.beginPath();
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    return canvas.toDataURL().slice(-64);
  } catch {
    return null;
  }
}

/* ─── Audio ─── */
async function getAudioFingerprint(): Promise<string | null> {
  try {
    const ctx = new (
      window.OfflineAudioContext || (window as any).webkitOfflineAudioContext
    )(1, 44100, 44100);

    const oscillator = ctx.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(10000, ctx.currentTime);

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-50, ctx.currentTime);
    compressor.knee.setValueAtTime(40, ctx.currentTime);
    compressor.ratio.setValueAtTime(12, ctx.currentTime);
    compressor.attack.setValueAtTime(0, ctx.currentTime);
    compressor.release.setValueAtTime(0.25, ctx.currentTime);

    oscillator.connect(compressor);
    compressor.connect(ctx.destination);
    oscillator.start(0);

    const buffer = await ctx.startRendering();
    const data = buffer.getChannelData(0).slice(4500, 5000);
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += Math.abs(data[i]);
    return sum.toString();
  } catch {
    return null;
  }
}

/* ─── Math ─── */
function getMathFingerprint(): string {
  return [
    Math.acos(0.5),
    Math.acosh(2),
    Math.asin(0.5),
    Math.asinh(1),
    Math.atan(0.5),
    Math.atanh(0.5),
    Math.atan2(1, 2),
    Math.cbrt(2),
    Math.cos(1),
    Math.cosh(1),
    Math.exp(1),
    Math.expm1(1),
    Math.hypot(1, 2),
    Math.log(2),
    Math.log10(2),
    Math.log1p(1),
    Math.sin(1),
    Math.sinh(1),
    Math.sqrt(2),
    Math.tan(1),
    Math.tanh(1),
    Math.pow(2, 0.5),
  ].join("|");
}

/* ─── Hook ─── */
export function useFingerprint() {
  const [data, setData] = useState<Fingerprint | null>(null);

  useEffect(() => {
    let mounted = true;

    async function collect() {
      const [audio, canvas] = await Promise.all([
        getAudioFingerprint(),
        Promise.resolve(getCanvasFingerprint()),
      ]);

      if (!mounted) return;

      setData({
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: (navigator as any).deviceMemory,
        screen: {
          width: window.screen.width,
          height: window.screen.height,
          colorDepth: window.screen.colorDepth,
          pixelRatio: window.devicePixelRatio,
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        webgl: getWebGLInfo(),
        canvasFingerprint: canvas,
        audioFingerprint: audio,
        mathFingerprint: getMathFingerprint(),
        collectedAt: Date.now(),
      });
    }

    collect();
    return () => {
      mounted = false;
    };
  }, []);

  return data;
}
