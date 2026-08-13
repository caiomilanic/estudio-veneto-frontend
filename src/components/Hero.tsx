import fachada from "../assets/fachada.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] [@media(max-height:500px)]:min-h-fit flex items-end overflow-hidden">
      <img
        src={fachada}
        alt="Fachada do Studios Veneto, no Santa Cândida, Curitiba"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />

      <div className="absolute top-24 right-6 md:top-28 md:right-12 [@media(max-height:500px)]:top-20 bg-terracota text-surface font-sans text-xs md:text-sm tracking-wide px-4 py-2 rounded-full shadow-lg">
        Entrega em dezembro de 2026
      </div>

      <div className="relative z-10 px-6 md:px-12 pt-28 pb-20 md:pb-28 [@media(max-height:500px)]:pt-24 [@media(max-height:500px)]:pb-6 max-w-3xl">
        <span className="font-sans text-madeira text-sm tracking-[0.2em] uppercase">
          Santa Cândida · Curitiba
        </span>

        <h1 className="font-display text-surface text-5xl md:text-7xl [@media(max-height:500px)]:text-3xl leading-[0.95] mt-4">
          Studios Veneto
        </h1>

        <p className="font-sans text-surface/80 text-base md:text-lg [@media(max-height:500px)]:text-sm mt-6 max-w-xl">
          Studios inteligentes e opções Garden a poucos passos do Terminal Santa Cândida. Praticidade para morar, potencial para investir.
        </p>

        <a
          href="#contato"
          className="inline-block mt-8 [@media(max-height:500px)]:mt-4 bg-terracota text-surface font-sans text-sm tracking-wide px-8 py-4 [@media(max-height:500px)]:px-6 [@media(max-height:500px)]:py-3 rounded-full hover:bg-terracota/90 transition-colors"
        >
          Quero conhecer o empreendimento
        </a>
      </div>
    </section>
  );
}