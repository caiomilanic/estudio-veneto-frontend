import { useEffect, useState } from "react";
import { getContent } from "../services/api";
import { Skeleton } from "./Skeleton";

type Status = "loading" | "success" | "error";

export function SobreIncorporadora() {
  const [texto, setTexto] = useState("");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    getContent()
      .then((items) => {
        const item = items.find((c) => c.sectionKey === "sobre_incorporadora");
        setTexto(item?.text ?? "");
        setStatus("success");
      })
      .catch((err) => {
        console.error("Erro ao carregar conteúdo:", err);
        setStatus("error");
      });
  }, []);

  if (status === "success" && !texto) return null;

  return (
    <section className="bg-surface py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-sans text-oliva text-sm tracking-[0.2em] uppercase">
          Quem constrói
        </span>

        <h2 className="font-display text-charcoal text-4xl md:text-5xl mt-3">
          MK2 Incorporadora
        </h2>

        {status === "loading" && (
          <div className="mt-6 space-y-2 max-w-xl mx-auto">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        )}

        {status === "error" && (
          <p className="font-sans text-charcoal/50 text-sm mt-6">
            Não foi possível carregar essa informação no momento.
          </p>
        )}

        {status === "success" && (
          <p className="font-sans text-charcoal/80 text-base md:text-lg mt-6 leading-relaxed">
            {texto}
          </p>
        )}
      </div>
    </section>
  );
}