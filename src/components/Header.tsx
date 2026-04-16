import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent flex justify-center">
      <div className="relative w-full max-w-[1440px] h-[176.18px]">
        {/* Logo */}
        <div
          className="absolute left-[10px] top-[16px] w-[238px] h-[150.18px]"
          style={{ transform: 'rotate(0deg)' }}
        >
          <Image
            src="/logos/logo_solo.svg"
            alt="5411 Logo"
            width={238}
            height={150}
            className="object-contain w-full h-full brightness-0 invert"
            priority
          />
        </div>

        {/* Navegación */}
        <nav className="absolute left-[640px] top-[25px] w-[765px] h-[126px] flex flex-row items-center gap-[73px] px-[23px] py-[40px] opacity-100">
          {['PROYECTO', 'NOSOTROS', 'PROPUESTA', 'CONTACTO'].map((item) => (
            <div key={item} className="flex flex-row justify-center items-center p-[10px] gap-[10px]">
              <div className="flex flex-row justify-center items-center gap-[10px]">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="font-sans font-bold text-[20px] leading-[26px] text-[rgba(255,255,255,0.9)] hover:text-white transition-colors whitespace-nowrap"
                >
                  {item}
                </Link>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
