"use client";

import { useEffect, useRef } from "react";

// Animated signal-field canvas — ported verbatim from Home.dc.html.
export function HeroSignalField({ density = 70 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      dpr = 1,
      raf = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number; accent: boolean }[] = [];
    const N = Math.max(8, density);

    const resize = () => {
      const p = cv.parentElement!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = p.width;
      h = p.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const init = () => {
      nodes = [];
      for (let i = 0; i < N; i++)
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.7 + 0.6,
          accent: Math.random() < 0.16,
        });
    };
    let tick = 0;
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = w + 20;
        if (a.x > w + 20) a.x = -20;
        if (a.y < -20) a.y = h + 20;
        if (a.y > h + 20) a.y = -20;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j],
            dx = a.x - b.x,
            dy = a.y - b.y,
            d = Math.hypot(dx, dy);
          if (d < 128) {
            ctx.strokeStyle = "rgba(138,57,192," + 0.22 * (1 - d / 128) + ")";
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, 6.2832);
        ctx.fillStyle = n.accent ? "rgba(138,57,192,0.95)" : "rgba(100,116,139,0.42)";
        ctx.fill();
        if (n.accent) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 3, 0, 6.2832);
          ctx.strokeStyle = "rgba(138,57,192,0.25)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      tick += 0.0032;
      if (tick > 1) tick = 0;
      const px = -40 + tick * (w + 80);
      const py = h * 0.62 + Math.sin(tick * Math.PI * 1.6) * -h * 0.28;
      const g = ctx.createRadialGradient(px, py, 0, px, py, 26);
      g.addColorStop(0, "rgba(138,57,192,0.9)");
      g.addColorStop(1, "rgba(138,57,192,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, 26, 0, 6.2832);
      ctx.fill();
      ctx.fillStyle = "#7C3AED";
      ctx.beginPath();
      ctx.arc(px, py, 2.6, 0, 6.2832);
      ctx.fill();
      raf = requestAnimationFrame(frame);
    };

    resize();
    init();
    if (reduce) {
      frame();
      cancelAnimationFrame(raf);
    } else {
      frame();
    }
    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", display: "block", opacity: 0.7 }}
      aria-hidden="true"
    />
  );
}
