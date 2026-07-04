const items = [
  'Ribeye Steak',
  'Garlic Parmesan Wings',
  'Butterfly Shrimp',
  'Pork Tenderloin',
  'Full Bar',
  'Outdoor Seating',
  'Happy Hour',
  'Local Hangout',
  'Est. 1917',
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-600/60 bg-ink-800 py-4">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl uppercase tracking-wider text-cream/80">
              {item}
            </span>
            <span className="text-brass-400">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
