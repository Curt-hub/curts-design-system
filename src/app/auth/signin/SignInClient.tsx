'use client';
import { useRouter } from 'next/navigation';

export default function SignInClient() {
  const router = useRouter();

  function enter() {
    document.cookie = 'purpleui-session=1; path=/; max-age=31536000';
    router.push('/');
  }

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-2xl flex flex-col items-center gap-6">

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-4">
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em', color: '#111111' }}>
            CDS
          </span>
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            {"Curt's Design System — token documentation and foundations."}
          </p>
        </div>

        {/* Enter button */}
        <button
          onClick={enter}
          className="w-full flex items-center justify-center bg-black hover:bg-[#333] text-white font-semibold rounded-xl py-3 px-4 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Enter
        </button>

      </div>
    </div>
  );
}
