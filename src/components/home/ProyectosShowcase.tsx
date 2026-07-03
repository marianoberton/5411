'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { proyectos } from '@/data/proyectos'
import { MaskWords } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Índice editorial de proyectos: lista tipográfica grande a la izquierda,
// preview de imagen que crossfadea según la fila hovereada a la derecha.
// Cada fila navega al proyecto. Las líneas se dibujan en cascada al entrar.
export default function ProyectosShowcase() {
    const [active, setActive] = useState(0)
    const listRef = useRef(null)
    const inView = useInView(listRef, { once: true, margin: '-15% 0px' })

    return (
        <>
            {/* ── Desktop ── */}
            <section className="hidden md:block w-full bg-[#fafafa] py-[100px] 3xl:py-[130px]">
                <div className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] mx-auto px-[120px] 3xl:px-[160px]">

                    {/* Encabezado */}
                    <div className="flex items-end justify-between mb-[56px]">
                        <MaskWords
                            text="NUESTROS PROYECTOS"
                            as="p"
                            className="font-sans font-light text-[#0F0F0F] tracking-[3px] text-[13px] 3xl:text-[15px] m-0 uppercase"
                        />
                        <MaskWords
                            text="(05)"
                            as="p"
                            delay={0.15}
                            className="font-serif font-normal text-[#0F0F0F] text-[clamp(20px,1.8vw,32px)] m-0"
                        />
                    </div>

                    <div ref={listRef} className="flex flex-row gap-[72px] 3xl:gap-[96px] items-start">

                        {/* Lista */}
                        <ul className="flex-1 m-0 p-0 list-none">
                            {proyectos.map((p, i) => (
                                <motion.li
                                    key={p.slug}
                                    className="relative"
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                >
                                    {/* Línea divisoria: se dibuja de izquierda a derecha */}
                                    <motion.span
                                        className="block h-[1px] bg-[#d0d0d0] origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{ duration: 1.0, ease: expo, delay: 0.1 + i * 0.1 }}
                                    />
                                    <Link
                                        href={`/proyectos/${p.slug}`}
                                        className="group flex flex-row items-baseline gap-[28px] py-[26px] 3xl:py-[34px]"
                                    >
                                        <motion.span
                                            className="font-sans font-light text-[13px] 3xl:text-[15px] text-[#888888] w-[32px] shrink-0"
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                                            transition={{ duration: 0.8, ease: expo, delay: 0.2 + i * 0.1 }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </motion.span>
                                        <span className="block flex-1 min-w-0">
                                            <span className="block overflow-hidden" style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
                                                <motion.span
                                                    className="block font-serif font-normal text-[#0F0F0F] leading-[1.05] text-[clamp(32px,3.2vw,58px)] transition-transform duration-500 ease-out group-hover:translate-x-[14px]"
                                                    initial={{ y: '112%' }}
                                                    animate={inView ? { y: '0%' } : { y: '112%' }}
                                                    transition={{ duration: 0.9, ease: expo, delay: 0.22 + i * 0.1 }}
                                                >
                                                    {p.nombre.toUpperCase()}
                                                </motion.span>
                                            </span>
                                            <motion.span
                                                className="block mt-[8px] font-sans font-light text-[13px] 3xl:text-[15px] text-[#888888] transition-transform duration-500 ease-out group-hover:translate-x-[14px]"
                                                initial={{ opacity: 0 }}
                                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 + i * 0.1 }}
                                            >
                                                {p.ubicacion}
                                            </motion.span>
                                        </span>
                                        <motion.span
                                            className="font-sans font-light text-[20px] text-[#0F0F0F] shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-[6px] group-hover:-translate-y-[2px]"
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 + i * 0.1 }}
                                            aria-hidden="true"
                                        >
                                            ↗
                                        </motion.span>
                                    </Link>
                                </motion.li>
                            ))}
                            {/* Línea de cierre */}
                            <motion.span
                                className="block h-[1px] bg-[#d0d0d0] origin-left"
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 1.0, ease: expo, delay: 0.1 + proyectos.length * 0.1 }}
                            />
                        </ul>

                        {/* Preview — crossfade según fila activa */}
                        <motion.div
                            className="relative w-[34%] shrink-0 aspect-[3/4] overflow-hidden self-start sticky top-[10vh]"
                            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                            animate={inView ? { clipPath: 'inset(0% 0% 0% 0%)' } : { clipPath: 'inset(100% 0% 0% 0%)' }}
                            transition={{ duration: 1.1, ease: expo, delay: 0.3 }}
                        >
                            {proyectos.map((p, i) => (
                                <motion.div
                                    key={p.slug}
                                    className="absolute inset-0"
                                    initial={false}
                                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.07 }}
                                    transition={{ duration: 0.65, ease: expo }}
                                    style={{ pointerEvents: 'none' }}
                                >
                                    <Image
                                        src={p.imagenPrincipal}
                                        alt={p.nombre}
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1536px) 420px, 560px"
                                    />
                                </motion.div>
                            ))}
                            <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
                            <div className="absolute left-[20px] bottom-[18px] pointer-events-none">
                                <p className="m-0 font-sans font-bold text-white text-[15px] uppercase tracking-[1px]">
                                    {proyectos[active].nombre}
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Mobile: tarjetas apiladas ── */}
            <section className="md:hidden w-full bg-[#fafafa] py-[60px] px-[24px]">
                <p className="font-sans font-light text-[#0F0F0F] tracking-[3px] text-[12px] m-0 mb-[28px] uppercase">
                    Nuestros proyectos (05)
                </p>
                <div className="flex flex-col gap-[36px]">
                    {proyectos.map((p, i) => (
                        <Link key={p.slug} href={`/proyectos/${p.slug}`} className="block">
                            <motion.div
                                className="relative w-full aspect-[4/3] overflow-hidden"
                                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                                viewport={{ once: true, margin: '-50px 0px' }}
                                transition={{ duration: 1.0, ease: expo }}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    initial={{ scale: 1.18 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: '-50px 0px' }}
                                    transition={{ duration: 1.4, ease: expo }}
                                >
                                    <Image src={p.imagenPrincipal} alt={p.nombre} fill className="object-cover object-center" sizes="100vw" />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="flex items-baseline justify-between mt-[14px]"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30px 0px' }}
                                transition={{ duration: 0.7, ease: expo, delay: 0.1 }}
                            >
                                <p className="m-0 font-serif font-normal text-[#0F0F0F] text-[26px] leading-none">
                                    <span className="font-sans font-light text-[12px] text-[#888888] mr-[10px]">{String(i + 1).padStart(2, '0')}</span>
                                    {p.nombre.toUpperCase()}
                                </p>
                                <p className="m-0 font-sans font-light text-[12px] text-[#888888]">{p.ubicacion}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}
