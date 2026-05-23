'use client';
import { useState } from 'react';
import { typography } from '@/lib/tokens';

const typeScale = [
  {
    token: 'CDSTypography.supporting',
    label: 'Supporting text',
    flutterSize: 12.0,
    weight: 'Regular',
    sampleStyle: { fontSize: typography.sizes.supporting },
  },
  {
    token: 'CDSTypography.body',
    label: 'Body text',
    flutterSize: 14.0,
    weight: 'Regular',
    sampleStyle: { fontSize: typography.sizes.body },
  },
  {
    token: 'CDSTypography.bodyBold',
    label: 'Body text - Bold',
    flutterSize: 14.0,
    weight: 'Bold',
    sampleStyle: { fontSize: typography.sizes.body },
  },
  {
    token: 'CDSTypography.section',
    label: 'Section title',
    flutterSize: 18.0,
    weight: 'Bold',
    sampleStyle: { fontSize: typography.sizes.section },
  },
  {
    token: 'CDSTypography.title',
    label: 'Page title',
    flutterSize: 22.0,
    weight: 'Bold',
    sampleStyle: { fontSize: typography.sizes.title },
  },
  {
    token: 'CDSTypography.hero',
    label: 'Hero',
    flutterSize: 40.0,
    weight: 'Bold',
    sampleStyle: { fontSize: typography.sizes.hero },
  },
];

function TypeSection({
  token,
  label,
  flutterSize,
  weight,
  sampleStyle,
  previewText,
}: (typeof typeScale)[0] & { previewText: string }) {
  const [copied, setCopied] = useState(false);
  const displayText = previewText || 'The quick brown fox jumps over the lazy dog';
  const isBold = weight === 'Bold';

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border-b border-[#DDDDDF] py-8">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-900 shrink-0">{label}</span>
            <span className="text-xs text-gray-400 shrink-0">{weight}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
            <span>Flutter {flutterSize}sp</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-700 hover:text-black font-mono px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 whitespace-nowrap"
        >
          {copied ? 'Copied!' : token}
        </button>
      </div>

      <div className="overflow-hidden">
        <span
          className="text-black block truncate min-w-0"
          style={{ ...sampleStyle, fontWeight: isBold ? 700 : 400 }}
        >
          {displayText}
        </span>
      </div>
    </div>
  );
}

export default function TypographyPage() {
  const [previewText, setPreviewText] = useState('');

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Typography</h1>
      <p className="text-gray-500 mb-8">
        Set your font family in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">src/lib/tokens.ts</code> and in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">CDS-Flutter/lib/tokens/cds_typography.dart</code>. Everything else cascades from there.
      </p>

      <div className="mb-10">
        <input
          type="text"
          value={previewText}
          onChange={e => setPreviewText(e.target.value)}
          placeholder="Type to preview..."
          className="w-full px-4 py-3 rounded-xl border border-[#DDDDDF] text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-shadow"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-[#111111] rounded-xl p-8">
          <p className="text-sm font-bold text-white/70 mb-2">Font-family:</p>
          <p className="text-[22px] font-bold text-white">YourFont</p>
          <p className="text-xs text-white/40 mt-1">TODO: replace in tokens.ts</p>
        </div>
        <div className="bg-[#111111] rounded-xl p-8">
          <p className="text-sm font-bold text-white/70 mb-2">Scale:</p>
          <p className="text-[22px] font-bold text-white">6 levels</p>
          <p className="text-xs text-white/40 mt-1">supporting → hero</p>
        </div>
      </div>

      {typeScale.map(entry => (
        <TypeSection key={entry.token} {...entry} previewText={previewText} />
      ))}

      {/* Import once */}
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-gray-900">Import once, use everywhere</h2>
        <p className="text-sm text-gray-500">
          Add the Flutter package to your project once. After that, use any token directly - your IDE autocompletes the rest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-400 mb-2">Dart (Flutter)</p>
            <div className="bg-[#F7F7F8] rounded-xl p-4 text-sm font-mono text-gray-700 space-y-1">
              <p><span className="text-gray-900 font-bold">import</span> <span className="text-green-700">&apos;package:cds/cds.dart&apos;</span>;</p>
              <p className="text-gray-400 pt-1">{'// then use directly:'}</p>
              <p>Text(<span className="text-green-700">&apos;Hello&apos;</span>,</p>
              <p>{'  '}style: CDSTypography.body),</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400 mb-2">Web (TypeScript)</p>
            <div className="bg-[#F7F7F8] rounded-xl p-4 text-sm font-mono text-gray-700 space-y-1">
              <p><span className="text-gray-900 font-bold">import</span> {`{ typography }`}</p>
              <p>{'  '}from <span className="text-green-700">&apos;@/lib/tokens&apos;</span>;</p>
              <p className="text-gray-400 pt-1">{'// then use directly:'}</p>
              <p>style={`{{ fontSize: typography.sizes.body }}`}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
