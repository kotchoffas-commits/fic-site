"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function track() {
      try {
        const res = await fetch("/api/compteur", { method: "POST", cache: "no-store" });
        const data = await res.json();
        setCount(data.count);
      } catch {
        try {
          const res = await fetch("/api/compteur", { cache: "no-store" });
          const data = await res.json();
          setCount(data.count);
        } catch {
          // silencieux : le compteur n'est pas critique
        }
      }
    }
    track();
  }, []);

  if (count === null) return <span>—</span>;
  return <strong>{count.toLocaleString("fr-FR")}</strong>;
}
