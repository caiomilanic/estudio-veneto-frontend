import type { Content } from "../types/Content";
import type { Photo } from "../types/Photo";
import type { Highlight } from "../types/Highlight";
import type { Unit } from "../types/Unit";
import type { SocialLink } from "../types/SocialLink";

const API_URL = import.meta.env.VITE_API_URL;

export async function getContent(): Promise<Content[]> {
  const res = await fetch(`${API_URL}/api/content`);
  if (!res.ok) throw new Error("Erro ao buscar conteúdo");
  return res.json();
}

export async function getPhotos(): Promise<Photo[]> {
  const res = await fetch(`${API_URL}/api/photos`);
  if (!res.ok) throw new Error("Erro ao buscar fotos");
  return res.json();
}

export async function getHighlights(category: string): Promise<Highlight[]> {
  const res = await fetch(`${API_URL}/api/highlights?category=${category}`);
  if (!res.ok) throw new Error("Erro ao buscar destaques");
  return res.json();
}

export async function getUnits(): Promise<Unit[]> {
  const res = await fetch(`${API_URL}/api/units`);
  if (!res.ok) throw new Error("Erro ao buscar unidades");
  return res.json();
}

export async function getSocialLinks(): Promise<SocialLink> {
  const res = await fetch(`${API_URL}/api/social-links`);
  if (!res.ok) throw new Error("Erro ao buscar links sociais");
  return res.json();
}

export async function submitLead(data: {
  nome: string;
  telefone: string;
  email: string;
  preferenciaContato: string;
}): Promise<void> {
  const res = await fetch(`${API_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erro ao enviar lead");
}