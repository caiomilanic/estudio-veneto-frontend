export function Localizacao() {
  return (
    <section id="localizacao" className="bg-base py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-oliva text-sm tracking-[0.2em] uppercase">
          Onde fica
        </span>

        <h2 className="font-display text-charcoal text-4xl md:text-5xl mt-3">
          Localização
        </h2>

        <p className="font-sans text-charcoal/80 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
          Quando falamos em imóvel, localização sempre faz diferença. No Studios
          Vêneto, você estará a apenas três quadras do Terminal Santa Cândida,
          em uma região completa, com fácil acesso ao transporte público,
          comércio, serviços e importantes vias da cidade.
        </p>

        <p className="font-sans text-charcoal/60 text-sm mt-4">
          Rua João Gbur, 1221 — Santa Cândida, Curitiba - PR
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-madeira/40">
          <iframe
            title="Localização do Studios Vêneto"
            src="https://www.google.com/maps?q=Rua+Jo%C3%A3o+Gbur,+1221+-+Santa+C%C3%A2ndida,+Curitiba+-+PR&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}