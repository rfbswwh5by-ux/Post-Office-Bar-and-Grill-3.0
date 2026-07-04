import { useReveal } from '../hooks/useReveal';
import { MapPin, Phone, Clock, ExternalLink, Car } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '2:00 PM - 1:00 AM' },
  { day: 'Tuesday', time: '2:00 PM – 1:30 AM' },
  { day: 'Wednesday', time: '2:00 PM – 1:30 AM' },
  { day: 'Thursday', time: '2:00 PM – 1:30 AM' },
  { day: 'Friday', time: '11:00 PM – 1:30 AM' },
  { day: 'Saturday', time: '11:00 PM – 1:30 AM' },
  { day: 'Sunday', time: '11:00 PM – 12:00 AM' },
];

const today = new Date().getDay(); // 0 = Sunday
const todayIndex = today === 0 ? 6 : today - 1;

export default function Visit() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="visit" className="relative bg-ink-900 py-24 sm:py-32">
      <div ref={ref} className={`container-wide reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Come On In</span>
          <h2 className="section-title mt-3">
            Visit the <span className="text-brass-400">Post Office</span>
          </h2>
          <p className="mt-5 font-body text-cream/70">
            On the corner of 5th Street in downtown Fulton — parking available,
            wheelchair accessible, and the door is open late.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Info card */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="card-surface p-6 transition-colors hover:border-brass-400/40">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brass-400/10 text-brass-400">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-brass-400">
                    Find Us
                  </h3>
                  <p className="mt-1 font-body text-cream">
                    100 W 5th Street
                    <br />
                    Fulton, MO 65251
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=100+W+5th+St+Fulton+MO+65251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-wider text-brass-300 transition-colors hover:text-brass-400"
                  >
                    Get directions <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card-surface p-6 transition-colors hover:border-brass-400/40">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brass-400/10 text-brass-400">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-brass-400">
                    Call Us
                  </h3>
                  <p className="mt-1 font-body text-cream">
                    <a href="tel:+15736422927" className="transition-colors hover:text-brass-300">
                      (573) 642-2927
                    </a>
                    <span className="mx-2 text-cream/30">·</span>
                    <a href="tel:+15735928465" className="transition-colors hover:text-brass-300">
                      (573) 592-8465
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-surface p-6 transition-colors hover:border-brass-400/40">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brass-400/10 text-brass-400">
                  <Clock size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-brass-400">
                    Hours
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {hours.map((h, i) => (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between rounded-lg px-2 py-1 font-body text-sm ${
                          i === todayIndex
                            ? 'bg-brass-400/10 text-cream'
                            : 'text-cream/70'
                        }`}
                      >
                        <span className={i === todayIndex ? 'font-semibold' : ''}>
                          {h.day}
                          {i === todayIndex && (
                            <span className="ml-2 font-heading text-[10px] uppercase tracking-wider text-brass-400">
                              Today
                            </span>
                          )}
                        </span>
                        <span className={h.time === 'Closed' ? 'text-cream/40' : ''}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="card-surface p-6 transition-colors hover:border-brass-400/40">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brass-400/10 text-brass-400">
                  <Car size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-brass-400">
                    Good to Know
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'Parking Available',
                      'Outdoor Seating',
                      'Serves Alcohol',
                      'Table Service',
                      'Takeout',
                      'Television',
                      'Wheelchair Accessible',
                    ].map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-ink-600 px-3 py-1 font-heading text-[11px] uppercase tracking-wider text-cream/70"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-ink-600/60 min-h-[400px] lg:min-h-full">
            <iframe
              title="Post Office Bar & Grill location"
              src="https://www.google.com/maps?q=100+W+5th+St+Fulton+MO+65251&output=embed"
              className="h-full min-h-[400px] w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
