"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import type { NewsItem } from "@/lib/actualites-data";

export default function NewsCard({ item }: { item: NewsItem }) {
  const [modal, setModal] = useState<number | null>(null);

  const images =
    item.type === "single" ? [item.img] :
    item.type === "album" ? item.album :
    [];

  return (
    <>
      <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">

        {item.type === "video" ? (
          <div className="relative h-72 overflow-hidden bg-black">
            <video controls preload="metadata" className="w-full h-full object-cover">
              <source src={item.video} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        ) : item.type === "single" ? (
          <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => setModal(0)}>
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>
        ) : (
          <div
            className={`grid ${item.album.length >= 6 ? "grid-cols-3" : "grid-cols-2"} h-72 overflow-hidden cursor-pointer`}
            onClick={() => setModal(0)}
          >
            {item.album.slice(0, 6).map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Album ${i + 1}`}
                  fill
                  sizes="20vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider mb-3">
            <span className="text-gray-500">{item.date}</span>
            <span className="text-gold font-semibold">{item.cat}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-balance mb-2 line-clamp-2">{item.title}</h3>
          <p className="text-gray-600 line-clamp-2 mb-4">{item.text}</p>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener"
            className="text-green font-medium text-sm hover:text-green-dark transition"
          >
            Lire la suite sur Facebook →
          </Link>
        </div>
      </article>

      {modal !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[modal]}
              alt={`Image ${modal + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30"
              aria-label="Fermer"
            >
              ×
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setModal((modal - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 text-2xl"
                  aria-label="Précédent"
                >
                  ‹
                </button>
                <button
                  onClick={() => setModal((modal + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 text-2xl"
                  aria-label="Suivant"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  {modal + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export type { NewsItem } from "@/lib/actualites-data";
