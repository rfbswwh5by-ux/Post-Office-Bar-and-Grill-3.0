import { useState, useEffect, useRef } from 'react';
import { menu } from '../data/content';
import { ArrowLeft, Flame } from 'lucide-react';

const tagStyles: Record<string, string> = {
  Signature: 'bg-ember-500/20 text-ember-400 border-ember-500/40',
  'Local Favorite': 'bg-brass-400/15 text-brass-300 border-brass-400/40',
  'Must Try': 'bg-cream/10 text-cream border-cream/30',
};

export default function FullMenu({ onBack }: { onBack: () => void }) {
  const [activeSection, setActiveSection] = useState(menu[0].id);
const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    menu.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  
useEffect(() => {
  const activeButton = buttonRefs.current[activeSection];
  const container = activeButton?.parentElement;

  if (!activeButton || !container) return;

  const buttonCenter = activeButton.offsetLeft + activeButton.offsetWidth / 2;
  const containerCenter = container.clientWidth / 2;

  container.scrollTo({
    left: buttonCenter - containerCenter,
    behavior: 'smooth',
  });
}, [activeSection]);
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth >= 1024 ? 90 : 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Sticky sub-header */}
      <div className="sticky top-0 z-40 border-b border-ink-600/60 bg-ink-900/95 backdrop-blur-md">
        <div className="container-wide flex items-center justify-between py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-cream/80 transition-colors hover:text-brass-400"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          <h1 className="font-display text-2xl uppercase tracking-wider text-cream sm:text-3xl">
            Full <span className="text-brass-400">Menu</span>
          </h1>
          <div className="w-32 hidden sm:block" />
        </div>
      </div>

      {/* Mobile sticky category nav — sits directly below the header */}
      <div className="sticky top-[57px] z-30 border-b border-ink-600/60 bg-ink-900/95 backdrop-blur-md lg:hidden">
        <div className="flex gap-2 overflow-x-auto px-5 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((cat) => (
            <button
              key={cat.id}
              ref={(el) => {
  buttonRefs.current[cat.id] = el;
}}
              onClick={() => scrollTo(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 font-heading text-xs uppercase tracking-wider transition-all ${
                activeSection === cat.id
                  ? 'bg-brass-400 text-ink-900'
                  : 'border border-ink-600 text-cream/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-wide py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Section shortcuts sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="mb-3 font-heading text-xs uppercase tracking-widest2 text-brass-400">
                Jump to
              </p>
              {menu.map((cat) => (
                <button
                  key={cat.id}
                  ref={(el) => {
  buttonRefs.current[cat.id] = el;
}}
                  onClick={() => scrollTo(cat.id)}
                  className={`block w-full rounded-lg px-4 py-2.5 text-left font-heading text-sm uppercase tracking-wider transition-all duration-200 ${
                    activeSection === cat.id
                      ? 'bg-brass-400/15 text-brass-300'
                      : 'text-cream/60 hover:bg-ink-800 hover:text-cream'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              <div className="mt-4 flex items-center gap-2 px-4 py-2 text-cream/40">
                <Flame size={14} className="text-ember-400" />
                <span className="font-body text-xs">Prices vary nightly</span>
              </div>
            </div>
          </aside>

          {/* Menu content */}
          <div className="flex-1 min-w-0">
            {menu.map((cat, idx) => (
              <section
                key={cat.id}
                id={cat.id}
                className={`scroll-mt-[120px] lg:scroll-mt-24 ${idx > 0 ? 'mt-12 pt-8 border-t border-ink-600/40 lg:mt-16' : ''}`}
              >
                <div className="mb-5 lg:mb-6">
                  <h2 className="font-display text-2xl uppercase leading-none text-cream sm:text-3xl lg:text-4xl">
                    {cat.label}
                  </h2>
                  <p className="mt-2 font-heading text-xs uppercase tracking-widest text-brass-400/80 lg:text-sm">
                    {cat.blurb}
                  </p>
                </div>
                <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="card-surface group p-5 lg:p-6 transition-all duration-300 hover:border-brass-400/50 hover:bg-ink-700/40"
                    >
                      <div className="flex items-start justify-between gap-3 lg:gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-heading text-base uppercase tracking-wide text-cream transition-colors group-hover:text-brass-300 lg:text-lg">
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
                        <span className="font-display text-xl text-brass-400 lg:text-2xl">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-12 flex items-center justify-center gap-3 text-center lg:mt-16">
              <Flame size={16} className="text-ember-400" />
              <p className="font-body text-sm text-cream/50">
                Prices vary nightly. Ask your bartender about happy hour food and daily specials.
              </p>
            </div>

            <div className="mt-8 text-center">
              <button onClick={onBack} className="btn-ghost">
                <ArrowLeft size={16} /> Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
