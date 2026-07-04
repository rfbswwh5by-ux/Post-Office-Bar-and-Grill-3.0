import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-600/60 bg-ink-900 pt-16 pb-8">
      <div className="paper-texture absolute inset-0 opacity-20" />
      <div className="container-wide relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/post_office_icon_logo.png"
                alt="The Post Office Bar & Grill"
                className="h-16 w-16 object-contain"
                style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
              />
              <img
                src="/post_office_new_logo.png"
                alt="The Post Office Bar & Grill"
                className="h-12 w-auto max-w-[260px] object-contain"
                style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
              />
            </div>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-cream/60">
              A historic bar and grill in the building that served as
              Fulton&apos;s post office from 1917 to 1988. Cold beer, friendly
              faces, and the best ribeye in Callaway County.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest2 text-brass-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brass-400" />
                <span>100 W 5th Street, Fulton, MO 65251</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-brass-400" />
                <a href="tel:+15736422927" className="hover:text-brass-300">
                  (573) 642-2927
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 text-brass-400" />
                <span>2:00 PM – 1:30 AM</span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest2 text-brass-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              {[
                { label: 'Our Story', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Visit', href: '#visit' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 transition-colors hover:text-brass-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-600/60 pt-6 sm:flex-row">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} The Post Office Bar &amp; Grill. All
            rights reserved.
          </p>
          <p className="font-heading text-[10px] uppercase tracking-widest2 text-cream/30">
            Fulton&apos;s Historic Post Office · Est. 1917
          </p>
        </div>
      </div>
    </footer>
  );
}
