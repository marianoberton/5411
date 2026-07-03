'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MaskLines } from '@/components/ui/Reveal';

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const NAV = [
  ['Proyectos', '/proyectos'],
  ['Nosotros', '/nosotros'],
  ['Propuesta', '/propuesta'],
  ['Contacto', '/contacto'],
] as const

function Hairline({ play, delay = 0, className }: { play: boolean; delay?: number; className?: string }) {
  return (
    <motion.div
      className={`h-[1px] bg-[#0F0F0F]/15 origin-left ${className || ''}`}
      initial={{ scaleX: 0 }}
      animate={play ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.1, ease: expo, delay }}
    />
  )
}

// Footer editorial: abre con el claim de marca + CTA (el cierre real del
// sitio), sigue con columnas de navegación/contacto/dirección y termina en
// una barra legal. Sin bordes duros: hairlines suaves que se dibujan.
export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px 0px' })

  return (
    <footer ref={ref} className="w-full bg-[#ECEAE3]">
      <div className="w-full max-w-[1240px] 2xl:max-w-[1480px] 3xl:max-w-[1680px] mx-auto px-6 sm:px-10 pt-[72px] lg:pt-[110px] pb-[36px]">

        {/* ── Claim + CTA ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[36px]">
          <div>
            <motion.p
              className="m-0 mb-[18px] font-sans font-light text-[#0F0F0F]/60 text-[12px] lg:text-[13px] uppercase tracking-[3px]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              ¿Empezamos?
            </motion.p>
            <MaskLines
              as="p"
              lines={['CONSTRUIMOS', 'TUS SUEÑOS']}
              play={inView}
              delay={0.1}
              stagger={0.12}
              duration={1.0}
              className="m-0 font-serif font-normal text-[#0F0F0F] leading-[1.02] text-[clamp(44px,7vw,96px)] 3xl:text-[112px]"
            />
          </div>
          <motion.div
            className="lg:pb-[10px]"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.9, ease: expo, delay: 0.4 }}
          >
            <Link
              href="/contacto"
              className="btn-sweep group inline-flex items-center gap-[10px] bg-[#0F0F0F] text-[#F5F5F5] px-[26px] py-[14px] font-sans font-light text-[16px] lg:text-[18px] whitespace-nowrap"
              style={{ '--sweep-bg': '#FAFAFA', '--sweep-ink': '#0F0F0F' } as React.CSSProperties}
            >
              <span>Hablá con nosotros</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        <Hairline play={inView} delay={0.35} className="mt-[52px] lg:mt-[72px]" />

        {/* ── Columnas ── */}
        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-x-[32px] gap-y-[44px] pt-[44px] lg:pt-[60px] pb-[52px] lg:pb-[72px]">

          {/* Marca */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, ease: expo, delay: 0.5 }}
          >
            <Link href="/" className="block w-fit group" aria-label="5411 Brique — inicio">
              <Image
                src="/logos/logo_texto.svg"
                alt="5411 Brique"
                width={160}
                height={254}
                className="block w-[104px] lg:w-[128px] 3xl:w-[150px] h-auto transition-opacity duration-300 group-hover:opacity-70"
              />
            </Link>
          </motion.div>

          {/* Navegación */}
          <motion.nav
            className="flex flex-col gap-[12px]"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, ease: expo, delay: 0.58 }}
          >
            <p className="m-0 mb-[6px] font-sans font-light text-[#0F0F0F]/55 text-[11px] uppercase tracking-[2.5px]">Navegación</p>
            {NAV.map(([label, href]) => (
              <Link key={href} href={href} className="link-lift w-fit font-sans font-light text-[#0F0F0F] text-[15px] lg:text-[16px]">
                {label}
              </Link>
            ))}
          </motion.nav>

          {/* Contacto */}
          <motion.div
            className="flex flex-col gap-[12px]"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, ease: expo, delay: 0.66 }}
          >
            <p className="m-0 mb-[6px] font-sans font-light text-[#0F0F0F]/55 text-[11px] uppercase tracking-[2.5px]">Contacto</p>
            <a href="mailto:info@5411briquedes.com" className="link-lift w-fit font-sans font-light text-[#0F0F0F] text-[15px] lg:text-[16px] break-all">
              info@5411briquedes.com
            </a>
            <p className="m-0 font-sans font-light text-[#0F0F0F] text-[15px] lg:text-[16px]">4706-0921</p>
            <a href="https://wa.me/5491162717818" target="_blank" rel="noopener noreferrer" className="link-lift w-fit font-sans font-light text-[#0F0F0F] text-[15px] lg:text-[16px]">
              +54 (11) 6271-7818
            </a>
          </motion.div>

          {/* Dirección */}
          <motion.div
            className="flex flex-col gap-[12px]"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, ease: expo, delay: 0.74 }}
          >
            <p className="m-0 mb-[6px] font-sans font-light text-[#0F0F0F]/55 text-[11px] uppercase tracking-[2.5px]">Dirección</p>
            <p className="m-0 font-sans font-light text-[#0F0F0F] text-[15px] lg:text-[16px] leading-[1.6]">
              Antonio Mariscal de Sucre 362<br />
              Belgrano, Buenos Aires
            </p>
          </motion.div>
        </div>

        <Hairline play={inView} delay={0.6} />

        {/* ── Barra legal ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[8px] pt-[22px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
        >
          <p className="m-0 font-sans font-light text-[#0F0F0F]/55 text-[12px] lg:text-[13px]">
            © 2026 5411 Brique — Desarrollos inmobiliarios
          </p>
          <p className="m-0 font-sans font-light text-[#0F0F0F]/55 text-[12px] lg:text-[13px]">
            Buenos Aires, Argentina
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
