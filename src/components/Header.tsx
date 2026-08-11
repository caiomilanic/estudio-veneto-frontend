import { useEffect, useState } from "react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { getSocialLinks } from "../services/api";
import { Logo } from "./Logo";
import type { SocialLink } from "../types/SocialLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState<SocialLink | null>(null);

  useEffect(() => {
    getSocialLinks()
      .then(setLinks)
      .catch((err) => console.error("Erro ao carregar links sociais:", err));
  }, []);

  const whatsappUrl = links
    ? `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(links.whatsappMessage)}`
    : "#";

  const navLinks = [
    { href: "#localizacao", label: "Localização" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#precos", label: "Preços" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Logo size={32} />
        <span className="font-display text-surface text-lg tracking-widest uppercase">
          Studios Vêneto
        </span>
      </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-surface/90">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-terracota transition-colors">
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4">
            {links?.instagramUrl && (
              <a href={links.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Studios Vêneto" className="text-surface/90 hover:text-terracota transition-colors">
                <SiInstagram size={18} />
              </a>
            )}
            {links?.whatsappNumber && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="text-surface/90 hover:text-terracota transition-colors">
                <SiWhatsapp size={18} />
              </a>
            )}
          </div>

          <a href="#contato" className="border border-surface/40 rounded-full px-5 py-2 hover:bg-terracota hover:border-terracota transition-colors">
            Fale conosco
          </a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-surface" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 bg-charcoal/95 rounded-2xl px-6 py-6 font-sans text-surface/90">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-terracota transition-colors">
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-5 pt-2 border-t border-surface/10">
            {links?.instagramUrl && (
              <a href={links.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Studios Vêneto" className="text-surface/90 hover:text-terracota transition-colors mt-2">
                <SiInstagram size={20} />
              </a>
            )}
            {links?.whatsappNumber && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="text-surface/90 hover:text-terracota transition-colors mt-2">
                <SiWhatsapp size={20} />
              </a>
            )}
          </div>

          <a href="#contato" onClick={() => setMenuOpen(false)} className="text-center border border-surface/40 rounded-full px-5 py-2 hover:bg-terracota hover:border-terracota transition-colors">
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  );
}