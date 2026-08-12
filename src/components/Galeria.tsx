import { useEffect, useState } from "react";
import { getPhotos } from "../services/api";
import type { Photo } from "../types/Photo";
import { Skeleton } from "./Skeleton";

type Status = "loading" | "success" | "error";

export function Galeria() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<Photo | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setPhotos(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error("Erro ao carregar fotos:", err);
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (status === "success" && photos.length === 0) return null;

  return (
    <section id="galeria" className="bg-base py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="font-sans text-oliva text-sm tracking-[0.2em] uppercase">
          Conheça o studio
        </span>

        <h2 className="font-display text-charcoal text-4xl md:text-5xl mt-3">
          Ambientes pensados nos mínimos detalhes
        </h2>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/3] rounded-2xl" />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="font-sans text-charcoal/50 text-sm mt-10">
            Não foi possível carregar as fotos no momento.
          </p>
        )}

        {status === "success" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelected(photo)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] text-left cursor-zoom-in"
              >
                <img
                  src={photo.url}
                  alt={photo.caption || "Foto do Studios Veneto"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {photo.caption && (
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent text-surface font-sans text-sm px-4 py-3">
                    {photo.caption}
                  </figcaption>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6 md:p-12" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-surface/80 hover:text-surface font-sans text-sm tracking-wide" aria-label="Fechar">
            Fechar ✕
          </button>
          <figure className="max-w-4xl w-full">
            <img src={selected.url} alt={selected.caption || "Foto do Studios Veneto"} className="w-full max-h-[80vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            {selected.caption && <figcaption className="text-surface/80 font-sans text-sm mt-4 text-center">{selected.caption}</figcaption>}
          </figure>
        </div>
      )}
    </section>
  );
}