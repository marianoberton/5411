'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MARK_PARTS, MARK_VIEWBOX, MARK_TRANSFORM } from './brand/briqueMark';

const NAV_LINKS = [
  ['PROYECTOS', '/proyectos'],
  ['NOSOTROS', '/nosotros'],
  ['PROPUESTA', '/propuesta'],
  ['CONTACTO', '/contacto'],
] as const;

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Las vistas con fondo claro usan texto/logo oscuro; el resto (heros con
// imagen oscura) usan texto blanco y logo invertido.
function isLightTheme(pathname: string) {
  return pathname.startsWith('/propuesta') || pathname.startsWith('/contacto')
}

function readBrand() {
  if (typeof window === 'undefined') return { blue: '#1f4cff', yellow: '#f5b301' }
  const root = getComputedStyle(document.documentElement)
  return {
    blue: root.getPropertyValue('--brand-blue').trim() || '#1f4cff',
    yellow: root.getPropertyValue('--brand-yellow').trim() || '#f5b301',
  }
}

// Isotipo inline: en cada navegación, las piezas destellan azul + amarillo en
// secuencia justo cuando la cortina libera el header — el guiño de marca vive
// acá, no en la transición (que queda liviana).
function BrandMark({ ink, wink }: { ink: string; wink: number }) {
  const [brand] = useState(readBrand)
  return (
    <motion.svg
      viewBox={MARK_VIEWBOX}
      className="block h-[68px] lg:h-[96px] 3xl:h-[118px] w-auto overflow-visible"
      aria-hidden="true"
    >
      <g transform={MARK_TRANSFORM} stroke="none">
        {MARK_PARTS.map((part, i) => {
          const color = i % 2 === 0 ? brand.blue : brand.yellow
          return (
            <motion.path
              key={`${wink}-${i}`}
              d={part.d}
              initial={{ fill: ink }}
              animate={wink > 0 ? { fill: [ink, color, color, ink] } : { fill: ink }}
              transition={
                wink > 0
                  ? { duration: 0.6, ease: 'easeInOut', delay: 0.85 + i * 0.04, times: [0, 0.3, 0.55, 1] }
                  : { duration: 0.3 }
              }
            />
          )
        })}
      </g>
    </motion.svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const light = isLightTheme(pathname)
  const [open, setOpen] = useState(false)

  // Guiño del logo: se dispara en cada CAMBIO de ruta (no en el primer load,
  // ahí ya está el intro). Ajuste de estado durante render (patrón oficial
  // "adjusting state when props change") — el contador replay el destello.
  const [wink, setWink] = useState(0)
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setWink(wink + 1)
  }

  // El menú se cierra desde el onClick de cada link; acá solo bloqueamos el
  // scroll del body mientras el overlay está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      id="siteHeader"
      className="absolute top-0 left-0 w-full z-50 flex justify-center"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] flex items-start justify-between px-6 sm:px-10 lg:px-[56px] 3xl:px-[80px] py-[22px] lg:py-[30px] 3xl:py-[40px]">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex-none"
        >
          <Link href="/" className="block" aria-label="5411 Brique — inicio">
            <BrandMark ink={light ? '#0F0F0F' : '#FFFFFF'} wink={wink} />
          </Link>
        </motion.div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-[46px] 3xl:gap-[64px] pt-[22px] 3xl:pt-[30px]">
          {NAV_LINKS.map(([label, href], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: expo, delay: 0.2 + i * 0.07 }}
            >
              <Link
                href={href}
                data-active={pathname === href}
                className={`link-lift font-sans font-bold text-[18px] 3xl:text-[22px] tracking-[0.6px] whitespace-nowrap transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  light
                    ? 'text-[#0F0F0F] focus-visible:outline-[#0F0F0F]'
                    : 'text-[rgba(255,255,255,0.92)] hover:text-white focus-visible:outline-white'
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className={`md:hidden flex-none mt-[6px] flex flex-col gap-[6px] p-2 -mr-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${light ? 'focus-visible:outline-[#0F0F0F]' : 'focus-visible:outline-white'}`}
        >
          {[0, 1, 2].map((n) => (
            <span
              key={n}
              className={`block w-[26px] h-[2px] transition-colors ${light ? 'bg-[#0F0F0F]' : 'bg-white'}`}
            />
          ))}
        </button>
      </div>

      {/* Overlay menú mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#0F0F0F] flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-start justify-between px-6 py-[22px]">
              <Image
                src="/logos/logo_solo.svg"
                alt="5411 Brique"
                width={82}
                height={82}
                className="block h-[68px] w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="mt-[6px] relative w-[34px] h-[34px] -mr-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="absolute left-1/2 top-1/2 w-[26px] h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <span className="absolute left-1/2 top-1/2 w-[26px] h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-[8px] px-8">
              {NAV_LINKS.map(([label, href], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: expo, delay: 0.08 + i * 0.07 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block font-serif text-[44px] leading-[1.25] tracking-[1px] transition-opacity ${
                      pathname === href ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-12">
              <p className="text-white/50 font-sans font-light text-[14px] leading-[1.6] m-0">
                info@5411briquedes.com<br />
                4706-0921 / +54 (11) 6271-7818
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
