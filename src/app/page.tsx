import Link from 'next/link';
import { LayoutShell } from '@/components/layouts/LayoutShell';

const stats = [
  { value: '5',        label: 'Foundations' },
  { value: 'Flutter',  label: 'Token Package' },
  { value: 'Web',      label: 'Docs Site' },
];

export default function WelcomePage() {
  return (
    <LayoutShell>
      <main>

        {/* ── Hero ── */}
        <div
          className="relative flex flex-col items-center justify-center gap-7 px-10 py-28 text-center overflow-hidden"
          style={{ backgroundColor: '#111111' }}
        >
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Version badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-white/50 text-xs font-poppins font-medium tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            Version 1.0
          </div>

          {/* Wordmark */}
          <div className="relative z-10">
            <span
              className="font-poppins font-bold text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-0.02em' }}
            >
              CDS
            </span>
          </div>

          {/* Headline */}
          <div className="relative z-10 flex flex-wrap items-baseline justify-center gap-x-4">
            <span
              className="font-poppins font-bold text-white"
              style={{ fontSize: 'clamp(36px, 5.5vw, 76px)', lineHeight: 1 }}
            >
              DESIGN
            </span>
            <span
              className="font-poppins font-bold"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 76px)',
                lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: '2px white',
              }}
            >
              SYSTEM
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="relative z-10 font-poppins text-white/60 max-w-xl"
            style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', lineHeight: 1.7 }}
          >
            {"Curt's Design System — a token-first template for Web and Flutter. Fork it, set your brand colour, and ship."}
          </p>

          {/* CTAs */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-1">
            <Link
              href="/foundation/colors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-poppins font-bold hover:bg-white/90 transition-colors"
            >
              View Foundations
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="border-b border-[#DDDDDF]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-[#DDDDDF]">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 py-10">
                  <span
                    className="font-poppins font-bold text-black"
                    style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1 }}
                  >
                    {value}
                  </span>
                  <span className="text-sm text-gray-400 font-poppins">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── About ── */}
        <div className="max-w-4xl mx-auto px-10 py-16">
          <div className="flex flex-col gap-6 max-w-lg">
            <div>
              <p className="text-xs font-bold text-black tracking-widest uppercase mb-2 font-poppins">About</p>
              <h2 className="font-poppins font-bold text-[22px] text-black leading-snug">{"What is Curt's Design System?"}</h2>
            </div>
            <div className="font-poppins text-[14px] text-[#595959] leading-relaxed space-y-4">
              <p>
                {"CDS is a token-first design system template. It ships with a complete semantic token layer, a Flutter package, and this documentation site."}
              </p>
              <p>
                {"Fork it, replace the brand colour, choose your font, and you have a fully wired design system ready to build on."}
              </p>
              <p>
                {"Built on Atomic Design principles — tokens feed components, components compose screens. All values flow from one source of truth."}
              </p>
            </div>
          </div>
        </div>

      </main>
    </LayoutShell>
  );
}
