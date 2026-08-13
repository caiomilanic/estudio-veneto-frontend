import { useEffect, useState } from "react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { getSocialLinks } from "../services/api";
import { Logo } from "./Logo";
import type { SocialLink } from "../types/SocialLink";

export function Footer() {
  const [links, setLinks] = useState<SocialLink | null>(null);

  useEffect(() => {
    getSocialLinks()
      .then(setLinks)
      .catch((err) => console.error("Erro ao carregar links sociais:", err));
  }, []);

  const whatsappUrl = links
    ? `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(links.whatsappMessage)}`
    : "#";

  return (
    <footer className="bg-charcoal py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
        <Logo size={28} />
        <span className="font-display text-surface text-lg tracking-widest uppercase">
          Studios Vêneto
        </span>
      </div>

        <div className="flex items-center gap-5">
          {links?.instagramUrl && (
            <a href={links.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Studios Vêneto" className="text-surface/70 hover:text-terracota transition-colors">
              <SiInstagram size={20} />
            </a>
          )}
          {links?.whatsappNumber && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="text-surface/70 hover:text-terracota transition-colors">
              <SiWhatsapp size={20} />
            </a>
          )}
        </div>
    
        <p className="font-sans text-surface/50 text-xs text-center md:text-right">
          © 2026 Studios Vêneto
          <br />
          MK2 Incorporadora · CNPJ: 18.154.475/0001-06
          <br />
          RAC Imóveis · CNPJ: 11.342.958/0001-87
        </p>
      </div>

      <p className="text-center font-sans text-surface/30 text-[11px] mt-8">
        Desenvolvido por{" "}
        <a href="mailto:caiomilanic@gmail.com?subject=Gostaria%20de%20desenvolver%20um%20site"
        className="hover:text-terracota transition-colors">
          caiomilanic
        </a>
      </p>
    </footer>
  );
}