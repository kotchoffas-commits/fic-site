"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-20T00:00:00+01:00").getTime();

export default function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { v: t.d, l: "Jours" },
    { v: t.h, l: "Heures" },
    { v: t.m, l: "Minutes" },
    { v: t.s, l: "Secondes" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 my-12 animate-fade-in-up">
      {cells.map((c) => (
        <div key={c.l} className="bg-white border border-gray-200 rounded-2xl py-6 text-center">
          <div className="font-serif text-3xl md:text-5xl font-bold text-green">
            {String(c.v).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mt-2">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
