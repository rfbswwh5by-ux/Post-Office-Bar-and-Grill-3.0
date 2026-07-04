import { Star, MapPin, Clock, ArrowDown } from 'lucide-react';
import { heroImage } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Post Office Bar & Grill building at dusk"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/70 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-transparent to-ink-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-wide pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-in">
              <span className="h-px w-12 bg-brass-400" />
              <span className="font-heading text-xs uppercase tracking-widest2 text-brass-400">
                Est. in Fulton&apos;s Historic Post Office · 1917–1988
              </span>
            </div>

            <div className="mb-2 flex items-center gap-4">
              <img
                src="/post_office_icon_logo.png"
                alt="The Post Office Bar & Grill"
                className="h-20 w-20 object-contain drop-shadow-[0_0_25px_rgba(212,162,76,0.35)]"
                style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
              />
              <img
                src="/post_office_new_logo.png"
                alt="The Post Office Bar & Grill"
                className="h-12 w-auto max-w-[280px] object-contain"
                style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
              />
            </div>

            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/80">
              A Fulton, Missouri landmark — pouring drinks and plating up pub
              food in the building that served as the city&apos;s post office
              for over seventy years. Cold beer, friendly bartenders, and the
              best ribeye in Callaway County.
            </p>

            {/* Rating row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={18} className="fill-brass-400 text-brass-400" />
                  ))}
                  <Star size={18} className="fill-brass-400/40 text-brass-400" />
                </div>
                <span className="font-heading text-sm uppercase tracking-wider text-cream/80">
                  4.0 · 813 reviews
                </span>
              </div>
              <span className="hidden h-4 w-px bg-cream/20 sm:block" />
              <div className="flex items-center gap-2 text-cream/80">
                <MapPin size={16} className="text-brass-400" />
                <span className="font-heading text-sm uppercase tracking-wider">
                  100 W 5th St, Fulton, MO
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="btn-brass">
                View the Menu
              </a>
              <a href="#visit" className="btn-ghost">
                <Clock size={16} /> Hours &amp; Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition-colors hover:text-brass-400 sm:flex"
      >
        <span className="font-heading text-[10px] uppercase tracking-widest2">
          Scroll
        </span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
