import { useEffect, useState } from "react";
import { getUnits } from "../services/api";
import type { Unit } from "../types/Unit";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function Precos() {
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    getUnits()
      .then(setUnits)
      .catch((err) => console.error("Erro ao carregar unidades:", err));
  }, []);

  if (units.length === 0) return null;

  return (
    <section id="precos" className="bg-charcoal py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-madeira text-sm tracking-[0.2em] uppercase">
          Tipologias
        </span>

        <h2 className="font-display text-surface text-4xl md:text-5xl mt-3">
          Escolha o studio ideal para você
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 border-t-4 border-terracota"
            >
              <h3 className="font-display text-charcoal text-2xl">{unit.tipo}</h3>

              <dl className="mt-6 space-y-3 font-sans text-sm">
                <div className="flex justify-between border-b border-madeira/30 pb-3">
                  <dt className="text-charcoal/60">Metragem</dt>
                  <dd className="text-charcoal font-medium">{unit.metragem}m²</dd>
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
        
        <div className="flex items-center justify-center gap-2 mt-8 text-madeira font-sans text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-madeira" />
          Entrega prevista para outubro de 2026
        </div>
        
        <p className="font-sans text-surface/50 text-xs mt-8 text-center">
          Consulte a disponibilidade das unidades e as condições de pagamento.
        </p>
      </div>
    </section>
  );
}