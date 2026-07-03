'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Proyecto } from '@/data/proyectos'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

function AnimatedBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: expo, delay }}
        >
            {children}
        </motion.div>
    )
}

function KenBurnsImage({ src, alt, sizes, priority }: { src: string; alt: string; sizes: string; priority?: boolean }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })
    return (
        <motion.div
            ref={ref}
            className="w-full h-full"
            initial={{ scale: 1.06 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, ease: expo }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority={priority}
                sizes={sizes}
            />
        </motion.div>
    )
}

function CardInfo({ proyecto }: { proyecto: Proyecto }) {
    return (
        <div className="flex flex-row justify-between items-center gap-4 pt-[12px]">
            <span
                className="uppercase text-[#0F0F0F] transition-opacity group-hover:opacity-60"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '14px', lineHeight: '18px' }}
            >
                {proyecto.nombre}
            </span>
            <span
                className="text-[#888888]"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '13px', lineHeight: '18px' }}
            >
                — {proyecto.ubicacion}
            </span>
        </div>
    )
}

export default function ProyectosGrid({ proyectos }: { proyectos: Proyecto[] }) {
    const rendered = new Set<string>()

    return (
        <div className="w-full px-6 sm:px-10 lg:px-[80px] flex flex-col gap-[64px] lg:gap-[80px]">
            {proyectos.map((proyecto) => {
                if (rendered.has(proyecto.slug)) return null

                // ARIAS 3020 y ARIAS 3023 — side by side
                if (proyecto.slug === 'arias-3020') {
                    const arias3023 = proyectos.find(p => p.slug === 'arias-3023')
                    rendered.add('arias-3020')
                    if (arias3023) rendered.add('arias-3023')

                    return (
                        <div key="arias-pair" className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <AnimatedBlock delay={0}>
                                <Link href="/proyectos/arias-3020" className="flex flex-col group">
                                    <motion.div
                                        className="relative w-full h-[300px] sm:h-[420px] lg:h-[516px] overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5, ease: expo }}
                                    >
                                        <KenBurnsImage
                                            src={proyecto.imagenPrincipal}
                                            alt={proyecto.nombre}
                                            sizes="(max-width: 1440px) 50vw, 660px"
                                        />
                                    </motion.div>
                                    <CardInfo proyecto={proyecto} />
                                </Link>
                            </AnimatedBlock>
                            {arias3023 && (
                                <AnimatedBlock delay={0.15}>
                                    <Link href="/proyectos/arias-3023" className="flex flex-col group">
                                        <motion.div
                                            className="relative w-full h-[516px] overflow-hidden"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.5, ease: expo }}
                                        >
                                            <KenBurnsImage
                                                src={arias3023.imagenPrincipal}
                                                alt={arias3023.nombre}
                                                sizes="(max-width: 1440px) 50vw, 660px"
                                            />
                                        </motion.div>
                                        <CardInfo proyecto={arias3023} />
                                    </Link>
                                </AnimatedBlock>
                            )}
                        </div>
                    )
                }

                rendered.add(proyecto.slug)

                // LOS INCAS — full width
                if (proyecto.slug === 'los-incas') {
                    return (
                        <AnimatedBlock key={proyecto.slug}>
                            <Link href={`/proyectos/${proyecto.slug}`} className="block group">
                                <motion.div
                                    className="relative w-full h-[400px] sm:h-[600px] lg:h-[886px] overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: expo }}
                                >
                                    <KenBurnsImage
                                        src={proyecto.imagenPrincipal}
                                        alt={proyecto.nombre}
                                        sizes="(max-width: 1440px) 100vw, 1280px"
                                        priority
                                    />
                                </motion.div>
                                <CardInfo proyecto={proyecto} />
                            </Link>
                        </AnimatedBlock>
                    )
                }

                // MATER DEI y OFICINAS SUCRE — centrado
                return (
                    <AnimatedBlock key={proyecto.slug}>
                        <div className="flex justify-center">
                            <Link href={`/proyectos/${proyecto.slug}`} className="flex flex-col group w-full md:w-[53%]">
                                <motion.div
                                    className="relative w-full overflow-hidden h-[360px] sm:h-[500px] lg:h-[658px]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: expo }}
                                >
                                    <KenBurnsImage
                                        src={proyecto.imagenPrincipal}
                                        alt={proyecto.nombre}
                                        sizes="(max-width: 1440px) 60vw, 762px"
                                    />
                                </motion.div>
                                <CardInfo proyecto={proyecto} />
                            </Link>
                        </div>
                    </AnimatedBlock>
                )
            })}
        </div>
    )
}
