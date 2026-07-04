import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-md border-b border-ink-600/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src="/post_office_icon_logo.png"
            alt="The PO Bar & Grill logo"
            className="h-10 w-10 object-contain invert brightness-[0.92] sepia-[0.25] saturate-[200%] hue-rotate-[10deg] transition-transform duration-300 group-hover:scale-110"
            style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
          />
          <img
            src="/post_office_new_logo.png"
            alt="The Post Office Bar & Grill"
            className="hidden h-8 w-auto object-contain sm:block"
            style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.88)' }}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm uppercase tracking-wider text-cream/80 transition-colors hover:text-brass-400"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+15736422927" className="btn-brass !py-2 !px-5">
            <Phone size={15} /> Call
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-wide flex flex-col gap-1 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-heading text-sm uppercase tracking-wider text-cream/80 transition-colors hover:bg-ink-800 hover:text-brass-400"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+15736422927" className="btn-brass mt-2 w-full">
            <Phone size={15} /> (573) 642-2927
          </a>
        </nav>
      </div>
    </header>
  );
}
