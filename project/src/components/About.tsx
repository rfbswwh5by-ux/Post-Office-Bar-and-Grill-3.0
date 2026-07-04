import { useReveal } from '../hooks/useReveal';
import { historyImage, vibeImage } from '../data/content';
import { Building2, Beer, UtensilsCrossed, Trees } from 'lucide-react';

const features = [
  { icon: Beer, label: 'Full Bar' },
  { icon: UtensilsCrossed, label: 'Pub Food' },
  { icon: Trees, label: 'Outdoor Seating' },
  { icon: Building2, label: 'Takeout' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="paper-texture absolute inset-0 opacity-40" />
      <div ref={ref} className={`container-wide reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image stack */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-ink-600/60">
              <img
                src={historyImage}
                alt="Pork tenderloin sandwich plate"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-xl border-4 border-ink-900 shadow-2xl sm:block">
              <img
                src={vibeImage}
                alt="Chicken wings plate"
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Est. badge */}
            <div className="absolute -left-4 -top-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-brass-400 bg-ink-800 text-center shadow-xl">
              <span className="font-display text-2xl leading-none text-brass-400">1917</span>
              <span className="font-heading text-[8px] uppercase tracking-widest text-cream/70">
                Est.
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title mt-3">
              Where Fulton&apos;s
              <br />
              <span className="text-brass-400">history pours</span>
            </h2>
            <div className="mt-6 space-y-4 font-body text-cream/75 leading-relaxed">
              <p>
                The Post Office Bar &amp; Grill sits in the building that served
                as the <strong className="text-cream">Fulton Post Office from
                1917 to 1988</strong> — over seventy years of letters, packages,
                and small-town life under one roof. Today that same roof
                shelters a different kind of gathering.
              </p>
              <p>
                It&apos;s a casual, historic local hangout — sometimes called a
                &ldquo;biker&rdquo; bar, always called friendly. A full bar, pub
                food done right, outdoor seating, and TVs for the game. The kind
                of place where the bartenders learn your name and your order.
              </p>
              <p>
                Fulton itself is the seat of Callaway County, home to
                Westminster College and William Woods University, and listed on
                the National Register of Historic Places in more ways than one.
                While you&apos;re exploring the history, stop in for the most
                delicious food Fulton has to offer.
              </p>
            </div>

            {/* Feature pills */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="card-surface flex flex-col items-center gap-2 px-3 py-4 text-center transition-colors hover:border-brass-400/60"
                >
                  <f.icon size={22} className="text-brass-400" />
                  <span className="font-heading text-xs uppercase tracking-wider text-cream/80">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
