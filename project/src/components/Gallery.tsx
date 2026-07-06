import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { galleryImages } from '../data/content';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section id="gallery" className="relative bg-ink-800 py-24 sm:py-32">
      <div ref={ref} className={`container-wide reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">The Gallery</span>
          <h2 className="section-title mt-3">
            Step <span className="text-brass-400">inside</span>
          </h2>
          <p className="mt-5 font-body text-cream/70">
            A look at the building, the plates, and the people that make the Post
            Office a Fulton fixture.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className={`group relative overflow-hidden rounded-xl border border-ink-600/60 ${
                i === 0 ? 'col-span-2 row-span-2 lg:col-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? 'h-full min-h-[280px] sm:min-h-[420px]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <span className="font-display text-xl uppercase text-cream">
                  {img.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/95 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-ink-700"
            onClick={close}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-ink-700"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <figure
            className="max-w-4xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[78vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-2xl uppercase text-brass-400">
              {galleryImages[lightbox].caption}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-ink-700"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
