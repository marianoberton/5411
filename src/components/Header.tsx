'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  ['PROYECTOS', '/proyectos'],
  ['NOSOTROS', '/nosotros'],
  ['PROPUESTA', '/propuesta'],
  ['CONTACTO', '/contacto'],
] as const;

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center">
      <div className="relative w-full max-w-[1440px] h-[176px]">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Link href="/" className="absolute left-[125px] top-[16px] w-[238px] h-[150px] overflow-hidden">
            <div className="absolute w-full" style={{ height: '158.48%', top: '-29.24%' }}>
              <Image
                src="/logos/logo_solo.svg"
                alt="5411 Brique"
                fill
                className="brightness-0 invert"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Navegación */}
        <nav className="absolute left-[640px] top-[25px] w-[765px] flex items-center gap-[73px] px-[23px] py-[40px]">
          {NAV_LINKS.map(([label, href], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: expo, delay: 0.2 + i * 0.07 }}
            >
              <Link
                href={href}
                className="flex items-center justify-center p-[10px] font-sans font-bold text-[20px] leading-normal text-[rgba(255,255,255,0.9)] hover:text-white transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

      </div>
    </header>
  );
}
