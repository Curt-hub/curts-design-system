'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignInClient() {
  const router = useRouter();

  function enter() {
    document.cookie = 'purpleui-session=1; path=/; max-age=31536000';
    router.push('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1F2A24' }}>
      <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-2xl flex flex-col items-center gap-6">

        <div className="flex flex-col items-center gap-4">
          <Image src="/logo/logo.svg" alt="Pickle" width={64} height={64} style={{ borderRadius: 14 }} />
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            {"Curt's Design System — token documentation and foundations."}
          </p>
        </div>

        <button
          onClick={enter}
          className="w-full flex items-center justify-center font-semibold rounded-xl py-3 px-4 transition-opacity hover:opacity-90"
          style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1F2A24', color: '#D1F1B3' }}
        >
          Enter
        </button>

      </div>
    </div>
  );
}
