'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './SideNav.css';

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

// ── Foundation per-item icons ───────────────────────────────

const ColorsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="2.8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="4.5" cy="11" r="2.8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="11.5" cy="11" r="2.8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const TypographyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M8 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SpacingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h12M5 5L2 8l3 3M11 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5l1.6 3.3 3.6.5-2.6 2.5.6 3.7L8 9.8l-3.2 1.7.6-3.7L2.8 5.3l3.6-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ShadowsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="1.5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 14h8a1 1 0 0 0 1-1V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
  </svg>
);

// ── Nav data ────────────────────────────────────────────────

const nav = [
  {
    section: 'Foundation',
    items: [
      { label: 'Colors',      href: '/foundation/colors',      icon: <ColorsIcon /> },
      { label: 'Typography',  href: '/foundation/typography',  icon: <TypographyIcon /> },
      { label: 'Spacing',     href: '/foundation/spacing',     icon: <SpacingIcon /> },
      { label: 'Icons',       href: '/foundation/icons',       icon: <IconsIcon /> },
      { label: 'Shadows',     href: '/foundation/shadows',     icon: <ShadowsIcon /> },
    ],
  },
];

// ── Component ───────────────────────────────────────────────

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={['side-nav', collapsed ? 'side-nav--collapsed' : ''].filter(Boolean).join(' ')}>
      {/* Toggle button */}
      <button
        className="side-nav__toggle"
        onClick={onToggle}
        aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
      >
        <span className="side-nav__toggle-chevron">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M6 2L3 5L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div className="side-nav__panel">
        <div className="side-nav__main">

          {/* Header / Logo */}
          <div className="side-nav__header">
            <Link href="/" className="side-nav__logo">
              {/* Always-visible icon mark */}
              <div className="side-nav__logo-mark" style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '-0.02em', color: '#111111' }}>CDS</span>
              </div>
              {/* Wordmark — fades on collapse */}
              <div className="side-nav__logo-title">
                <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', color: '#111111' }}>
                  {"Curt's Design System"}
                </span>
              </div>
            </Link>
          </div>

          {/* Nav links */}
          <nav className="side-nav__links" aria-label="Main navigation">
            {nav.map(({ section, items }) => (
              <div key={section} className="side-nav__section-block">
                <p className="side-nav__section-label">{section}</p>
                {items.map(item => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={['side-nav__link', isActive ? 'side-nav__link--active' : ''].filter(Boolean).join(' ')}
                      title={collapsed ? item.label : undefined}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="side-nav__link-name">
                        <span className="side-nav__link-icon">{item.icon}</span>
                        <span className="side-nav__link-label">{item.label}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

        </div>
      </div>
    </div>
  );
}
