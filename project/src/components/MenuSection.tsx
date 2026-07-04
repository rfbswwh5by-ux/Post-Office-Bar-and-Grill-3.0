import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { menu } from '../data/content';
import { Flame, ArrowRight } from 'lucide-react';

const tagStyles: Record<string, string> = {
  Signature: 'bg-ember-500/20 text-ember-400 border-ember-500/40',
  'Local Favorite': 'bg-brass-400/15 text-brass-300 border-brass-400/40',
  'Must Try': 'bg-cream/10 text-cream border-cream/30',
};

export default function MenuSection({ onViewFull }: { onViewFull: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative bg-ink-800 py-24 sm:py-32">
      <div ref={ref} className={`container-wide reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">The Menu</span>
          <h2 className="section-title mt-3">
            Pub food, <span className="text-brass-400">done right</span>
          </h2>
          <p className="mt-5 font-body text-cream/70">
            From hand-cut ribeye to the garlic parmesan wings regulars swear by —
            straightforward plates, fair prices, and portions that earn their
            keep.
          </p>
        </div>

        {/* Category tabs — wrap on all screens, no overflow */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-heading text-xs uppercase tracking-wider transition-all duration-300 sm:text-sm ${
                active === cat.id
                  ? 'bg-brass-400 text-ink-900 shadow-[0_0_24px_-6px_rgba(212,162,76,0.7)]'
                  : 'border border-ink-600 text-cream/70 hover:border-brass-400/50 hover:text-brass-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center font-heading text-sm uppercase tracking-widest text-brass-400/80">
          {current.blurb}
        </p>

        {/* Items */}
        <div key={current.id} className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {current.items.map((item, i) => (
            <div
              key={item.name}
              className="card-surface group p-6 transition-all duration-300 hover:border-brass-400/50 hover:bg-ink-700/60"
              style={{ animation: `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-lg uppercase tracking-wide text-cream transition-colors group-hover:text-brass-300">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-heading text-[10px] uppercase tracking-wider ${tagStyles[item.tag]}`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-cream/65">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-display text-2xl text-brass-400">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center">
          <Flame size={16} className="text-ember-400" />
          <p className="font-body text-sm text-cream/50">
            Prices vary nightly. Ask your bartender about happy hour food and daily specials.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button onClick={onViewFull} className="btn-brass">
            View Full Menu <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
