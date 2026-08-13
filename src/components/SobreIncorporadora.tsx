import { useEffect, useState } from "react";
import { getContent } from "../services/api";
import { Skeleton } from "./Skeleton";

type Status = "loading" | "success" | "error";

export function SobreIncorporadora() {
  const [textoMK2, setTextoMK2] = useState("");
  const [textoRAC, setTextoRAC] = useState("");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    getContent()
      .then((items) => {
        setTextoMK2(items.find((c) => c.sectionKey === "sobre_incorporadora")?.text ?? "");
        setTextoRAC(items.find((c) => c.sectionKey === "sobre_rac")?.text ?? "");
        setStatus("success");
      })
      .catch((err) => {
        console.error("Erro ao carregar conteúdo:", err);
        setStatus("error");
      });
  }, []);

  if (status === "success" && !textoMK2 && !textoRAC) return null;

  return (
    <section className="bg-surface py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-oliva text-sm tracking-[0.2em] uppercase block text-center">
          Quem constrói
        </span>

        {status === "loading" && (
          <div className="grid md:grid-cols-2 gap-12 md:gap-0 md:divide-x md:divide-madeira/40 mt-6">
            {[0, 1].map((i) => (
              <div key={i} className={i === 0 ? "md:pr-12" : "md:pl-12"}>
                <Skeleton className="h-6 w-40 mx-auto" />
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="font-sans text-charcoal/50 text-sm mt-6 text-center">
            Não foi possível carregar essa informação no momento.
          </p>
        )}

        {status === "success" && (
          <div className="grid md:grid-cols-2 gap-12 md:gap-0 md:divide-x md:divide-madeira/40 mt-6 text-center md:text-left">
            {textoMK2 && (
              <div className="md:pr-12">
                <h2 className="font-display text-charcoal text-3xl">MK2 Incorporadora</h2>
                <p className="font-sans text-charcoal/80 text-base mt-5 leading-relaxed">
                  {textoMK2}
                </p>
              </div>
            )}

            {textoRAC && (
              <div className="md:pl-12 mt-10 md:mt-0">
                <h2 className="font-display text-charcoal text-3xl">RAC Imóveis</h2>
                <p className="font-sans text-charcoal/80 text-base mt-5 leading-relaxed">
                  {textoRAC}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}