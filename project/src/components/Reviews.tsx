import { useReveal } from '../hooks/useReveal';
import { reviews } from '../data/content';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="paper-texture absolute inset-0 opacity-30" />
      <div ref={ref} className={`container-wide reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Word of Mouth</span>
          <h2 className="section-title mt-3">
            What the <span className="text-brass-400">regulars</span> say
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} className="fill-brass-400 text-brass-400" />
              ))}
              <Star size={20} className="fill-brass-400/40 text-brass-400" />
            </div>
            <span className="font-heading text-sm uppercase tracking-wider text-cream/70">
              4.0 from 813 reviews
            </span>
          </div>
        </div>

        {/* Featured review */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-2xl border border-brass-400/30 bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-12">
            <Quote size={48} className="absolute -top-5 left-8 fill-ink-900 text-brass-400" />
            <p className="font-display text-2xl uppercase leading-tight text-cream sm:text-3xl">
              {reviews[0].highlight}
            </p>
            <p className="mt-5 font-body text-cream/70 leading-relaxed">
              {reviews[0].text}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-400 font-display text-lg text-ink-900">
                {reviews[0].name.charAt(0)}
              </div>
              <div>
                <p className="font-heading text-sm uppercase tracking-wide text-cream">
                  {reviews[0].name}
                </p>
                <p className="font-body text-xs text-cream/50">{reviews[0].date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of reviews */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(1).map((r) => (
            <div
              key={r.name}
              className="card-surface flex flex-col p-6 transition-all duration-300 hover:border-brass-400/40 hover:bg-ink-700/40"
            >
              <div className="mb-3 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 5 ? 'fill-brass-400 text-brass-400' : 'text-brass-400/30'}
                  />
                ))}
              </div>
              <p className="font-heading text-sm uppercase tracking-wide text-brass-300">
                {r.highlight}
              </p>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-cream/65">
                {r.text}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-600/60 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-600 font-display text-sm text-brass-400">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wide text-cream">
                    {r.name}
                  </p>
                  <p className="font-body text-[11px] text-cream/40">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
