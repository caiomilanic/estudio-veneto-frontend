import { useEffect, useState } from "react";
import { getHighlights } from "../services/api";
import type { Highlight } from "../types/Highlight";
import { Skeleton } from "./Skeleton";

type Status = "loading" | "success" | "error";

export function Diferenciais() {
  const [items, setItems] = useState<Highlight[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    getHighlights("diferenciais")
      .then((data) => {
        setItems(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error("Erro ao carregar diferenciais:", err);
        setStatus("error");
      });
  }, []);

  if (status === "success" && items.length === 0) return null;

  return (
    <section id="diferenciais" className="bg-charcoal py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-madeira text-sm tracking-[0.2em] uppercase">
          Por que escolher
        </span>

        <h2 className="font-display text-surface text-4xl md:text-5xl mt-3">
          Diferenciais do Studios Vêneto
        </h2>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-full" />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="font-sans text-surface/50 text-sm mt-10">
            Não foi possível carregar os diferenciais no momento.
          </p>
        )}

        {status === "success" && (
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-12">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 font-sans text-surface/85 text-base">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracota shrink-0" />
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}