// ─────────────────────────────────────────────────────────────
// TIER 1 — PALETTE
// Raw color definitions. Do NOT import these into components.
// Components must only reference semantic tokens below.
// ─────────────────────────────────────────────────────────────

const palette = {
  brand:       '#1F2A24',  // Pickle dark forest green
  brandAccent: '#D1F1B3',  // Pickle mint accent

  black:    '#000000',
  offBlack: '#595959',
  greyA:    '#AAACB0',
  greyC:    '#CDCED0',
  greyD:    '#DDDDDF',
  greyE:    '#EFF0F0',
  greyF:    '#F7F7F8',
  white:    '#FFFFFF',
  green:    '#16C172',
  red:      '#F03A47',
  blue:     '#045DEC',
  yellow:   '#E9D502',
} as const;

// ─────────────────────────────────────────────────────────────
// TIER 2 — SEMANTIC COLOR TOKENS
// Role-based names. Each has a defined light value today and a
// clear dark-mode mapping documented alongside it so dark mode
// is a configuration change, not a rename.
//
// Convention:
//   background*   — surface backgrounds
//   on*           — text / icons that sit on top of a background
//   outline*      — borders and dividers
//   brand*        — brand colours and tints
//   success/error/warning/info + *Subtle — status colours
// ─────────────────────────────────────────────────────────────

export const colors = {
  // Brand
  brand:       palette.brand,        // primary interactive — buttons, links, active states
  brandAccent: palette.brandAccent,  // highlight on dark surfaces — use on backgroundDark
  brandSubtle: '#E6F7D4',            // mint tint — backgrounds behind brand elements

  // Backgrounds (light → dark mappings in comments)
  background:         palette.white,   // dark: palette.brand
  backgroundElevated: palette.greyF,   // dark: '#0a0a0a'
  backgroundSunken:   '#F9F9FC',        // dark: '#050505'
  backgroundDark:     palette.brand,   // invariant — always dark (nav, hero). Same hex as brand.

  // Text & icon colours
  onBackground:          palette.black,    // dark: palette.white
  onBackgroundSecondary: palette.offBlack, // dark: 'rgba(255,255,255,0.70)'
  onBackgroundTertiary:  palette.greyA,    // dark: 'rgba(255,255,255,0.35)'

  // Borders & dividers
  outline:       palette.greyC,  // dark: 'rgba(255,255,255,0.15)'
  outlineSubtle: palette.greyE,  // dark: 'rgba(255,255,255,0.06)'

  // Misc
  loaderTrack: palette.greyD,   // invariant

  // Status
  success:       palette.green,
  successSubtle: '#E8F5E9',     // dark: '#0d3320'
  successStrong: '#4CAF50',

  error:        palette.red,
  errorSubtle:  'rgba(240,58,71,0.12)',

  warning:      palette.yellow,
  warningSubtle: '#fefbe6',     // dark: '#3d3400'

  info:         palette.blue,
  infoSubtle:   'rgba(4,93,236,0.12)',
};

// ─────────────────────────────────────────────────────────────
// SPACING TOKENS
// ─────────────────────────────────────────────────────────────

export const spacing = {
  xs:   4,
  sm:   8,
  md:   12,
  lg:   16,
  xl:   20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
};

// ─────────────────────────────────────────────────────────────
// BORDER RADIUS TOKENS
// ─────────────────────────────────────────────────────────────

export const radius = {
  sm:   6,
  md:   12,
  lg:   16,
  xl:   24,
  full: 9999,
};

// ─────────────────────────────────────────────────────────────
// SHADOW TOKENS
// ─────────────────────────────────────────────────────────────

export const shadows = {
  bottomA: '0px 2px 2px 0px rgba(0,0,0,0.03)',
  bottomB: '0px 2px 2px 0px rgba(0,0,0,0.06)',
  bottomC: '0px 2px 10px 0px rgba(0,0,0,0.05)',
  bottomD: '0px 2px 15px 0px rgba(0,0,0,0.10)',
  topA:    '0px -2px 2px 0px rgba(0,0,0,0.03)',
  topB:    '0px -2px 2px 0px rgba(0,0,0,0.06)',
  topC:    '0px -2px 2px 0px rgba(0,0,0,0.10)',
  topD:    '0px -2px 15px 0px rgba(0,0,0,0.10)',
  sideNav:      '4px 0px 15px 0px rgba(0,0,0,0.20)',
  tilesActive:  '0px 10px 15px -3px rgba(0,0,0,0.10)',
  tilesHover:   '0px 10px 15px -3px rgba(31,42,36,0.30)',
};

// ─────────────────────────────────────────────────────────────
// TYPOGRAPHY TOKENS
// ─────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: 'YourFont, sans-serif', // TODO: replace with your chosen font family
  sizes: {
    supporting: '0.75rem',   // 12px
    body:       '0.875rem',  // 14px
    section:    '1.125rem',  // 18px
    title:      '1.375rem',  // 22px
    hero:       '2.5rem',    // 40px
  },
  weights: {
    regular: 400,
    bold:    700,
  },
};
