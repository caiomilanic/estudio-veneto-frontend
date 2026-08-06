import { useEffect, useState } from "react";
import { getContent } from "../services/api";

export function SobreIncorporadora() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    getContent()
      .then((items) => {
        const item = items.find((c) => c.sectionKey === "sobre_incorporadora");
        if (item) setTexto(item.text);
      })
      .catch((err) => console.error("Erro ao carregar conteúdo:", err));
  }, []);

  if (!texto) return null;

  return (
    <section className="bg-surface py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-sans text-oliva text-sm tracking-[0.2em] uppercase">
          Quem constrói
        </span>

        <h2 className="font-display text-charcoal text-4xl md:text-5xl mt-3">
          MK2 Incorporadora
        </h2>

        <p className="font-sans text-charcoal/80 text-base md:text-lg mt-6 leading-relaxed">
          {texto}
        </p>
      </div>
    </section>
  );
}