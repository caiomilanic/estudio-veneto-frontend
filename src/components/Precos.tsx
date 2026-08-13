import { useEffect, useState } from "react";
import { getUnits } from "../services/api";
import type { Unit } from "../types/Unit";
import { Skeleton } from "./Skeleton";
import { Link } from "react-router-dom";

type Status = "loading" | "success" | "error";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function Precos() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    getUnits()
      .then((data) => {
        setUnits(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error("Erro ao carregar unidades:", err);
        setStatus("error");
      });
  }, []);

  if (status === "success" && units.length === 0) return null;

  return (
    <section id="precos" className="bg-charcoal py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-madeira text-sm tracking-[0.2em] uppercase">
          Tipologias
        </span>

        <h2 className="font-display text-surface text-4xl md:text-5xl mt-3">
          Escolha o studio ideal para você
        </h2>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="bg-surface/10 rounded-2xl p-8">
                <Skeleton className="h-7 w-32" />
                <div className="mt-6 space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
                <Skeleton className="h-12 w-full mt-6 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="font-sans text-surface/50 text-sm mt-10">
            Não foi possível carregar as tipologias no momento.
          </p>
        )}

        {status === "success" && (
          <>
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {units.map((unit, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border-t-4 border-terracota">
                  <h3 className="font-display text-charcoal text-2xl">{unit.tipo}</h3>
                  <dl className="mt-6 space-y-3 font-sans text-sm">
                    <div className="flex justify-between border-b border-madeira/30 pb-3">
                      <dt className="text-charcoal/60">Área total *</dt>
                      <dd className="text-charcoal font-medium">a partir de {unit.areaTotal}</dd>
                    </div>
                    <div className={`flex justify-between border-b border-madeira/30 pb-3 ${!unit.areaJardim ? "opacity-0" : ""}`}>
                      <dt className="text-charcoal/60">Área do garden privativo</dt>
                      <dd className="text-charcoal font-medium">{unit.areaJardim ? `a partir de ${unit.areaJardim}` : "—"}</dd>
                    </div>
                    <div className="flex justify-between pb-3">
                      <dt className="text-charcoal/60">A partir de</dt>
                      <dd className="text-charcoal font-medium text-lg">{formatarPreco(unit.precoAPartirDe)}</dd>
                    </div>
                  </dl>
                  <a href="#contato" className="block text-center mt-6 bg-terracota text-surface font-sans text-sm px-6 py-3 rounded-full hover:bg-terracota/90 transition-colors">
                    Consultar disponibilidade
                  </a>
                </div>
              ))}
            </div>

            <p className="font-sans text-surface/40 text-xs mt-6 text-center max-w-md mx-auto">
              * Área total corresponde à soma da área privativa coberta com a fração de área de uso comum do empreendimento.
            </p>

            <p className="font-sans text-surface/50 text-xs mt-8 text-center">
              Consulte a disponibilidade das unidades e as condições de pagamento.{" "}
              <Link
                to="/politica-de-privacidade#secao-12"
                className="underline hover:text-terracota transition-colors"
              >
                Avisos legais
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}