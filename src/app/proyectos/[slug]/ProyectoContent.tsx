'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Proyecto } from '@/data/proyectos'
import { FadeUp, ScaleIn, Stagger, StaggerItem } from '@/components/ui/Motion'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

function DetailSection({ proyecto }: { proyecto: Proyecto }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })

    return (
        <section ref={ref} className="relative w-full" style={{ height: '1595px' }}>
            <motion.p
                className="absolute text-[#0F0F0F] m-0"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '32px', left: '89px', top: '154px' }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: expo, delay: 0.05 }}
            >
                {proyecto.año}
            </motion.p>

            <motion.div
                className="absolute"
                style={{ left: '466px', top: '108px' }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: expo, delay: 0.1 }}
            >
                <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '24px' }}>LOCACIÓN</p>
                <p className="text-[#0F0F0F] m-0 mt-[46px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '32px' }}>{proyecto.locacionDetalle}</p>
            </motion.div>

            <motion.div
                className="absolute overflow-hidden bg-[#D9D9D9]"
                style={{ left: '89px', top: '236px', width: '739px', height: '893px' }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: expo, delay: 0.15 }}
            >
                <Image src={proyecto.mainImage} alt={proyecto.nombre} fill className="object-cover object-center" />
            </motion.div>

            <motion.div
                className="absolute overflow-hidden bg-white"
                style={{ left: '927px', top: '237px', width: '413px', height: '539px' }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: expo, delay: 0.25 }}
            >
                <Image src={proyecto.portraitImage} alt={proyecto.nombre} fill className="object-cover object-center" />
            </motion.div>

            <motion.p
                className="absolute text-[#0F0F0F] m-0 leading-none"
                style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '96px', left: '859px', top: '921px' }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
            >
                {proyecto.nombre.toUpperCase()}
            </motion.p>

            <motion.p
                className="absolute text-[#0F0F0F] m-0"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '32px', lineHeight: '1.4', left: '89px', top: '1170px', width: '739px' }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: expo, delay: 0.2 }}
            >
                {proyecto.descripcion}
            </motion.p>
        </section>
    )
}

function SpecsSection({ proyecto }: { proyecto: Proyecto }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })

    return (
        <section ref={ref} className="relative w-full" style={{ height: '1041px' }}>
            {[
                { label: 'EL EDIFICIO', value: proyecto.specs.edificio, top: 161, valueTop: 223, width: 355 },
                { label: 'UNIDADES', value: proyecto.specs.unidades, top: 388, valueTop: 450, width: 336 },
                ...(proyecto.specs.amenities ? [{ label: 'AMENITIES', value: proyecto.specs.amenities, top: 679, valueTop: 741, width: 435 }] : []),
            ].map(({ label, value, top, valueTop, width }, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: expo, delay: 0.1 + i * 0.1 }}
                >
                    <p className="absolute text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '36px', left: '151px', top: `${top}px` }}>
                        {label}
                    </p>
                    <p className="absolute text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '24px', lineHeight: '1.5', left: '151px', top: `${valueTop}px`, width: `${width}px`, whiteSpace: 'pre-wrap' }}>
                        {value}
                    </p>
                </motion.div>
            ))}

            {[
                { img: proyecto.gridImages[0], left: 621, top: 60 },
                { img: proyecto.gridImages[1], left: 973, top: 60 },
                { img: proyecto.gridImages[2], left: 621, top: 519 },
                { img: proyecto.gridImages[3], left: 973, top: 518 },
            ].map(({ img, left, top }, i) => img ? (
                <motion.div
                    key={i}
                    className="absolute overflow-hidden bg-white"
                    style={{ left: `${left}px`, top: `${top}px`, width: '305px', height: '414px' }}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: expo, delay: 0.15 + i * 0.1 }}
                >
                    <Image src={img} alt="" fill className="object-cover" />
                </motion.div>
            ) : null)}
        </section>
    )
}

export default function ProyectoContent({ proyecto, otrosProyectos }: { proyecto: Proyecto; otrosProyectos: Proyecto[] }) {
    return (
        <div className="w-full flex flex-col bg-[#ECEAE3]">

            {/* ─── HERO ──────────────────────────────────────────────── */}
            <section className="relative w-full h-[725px] overflow-hidden">
                <Image src={proyecto.heroImage} alt={proyecto.nombre} fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-black/20" />
                <motion.h1
                    className="absolute m-0 text-[#FAFAFA]"
                    style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '96px', lineHeight: '1', left: '463px', top: '321px' }}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: expo, delay: 0.15 }}
                >
                    {proyecto.nombre.toUpperCase()}
                </motion.h1>
            </section>

            <div className="w-full flex flex-col items-center bg-[#ECEAE3]">
                <main className="w-full max-w-[1440px] flex flex-col bg-[#ECEAE3]">

                    <DetailSection proyecto={proyecto} />
                    <SpecsSection proyecto={proyecto} />

                    {/* ─── GALERÍA HORIZONTAL ────────────────────────────────── */}
                    {proyecto.galeriaImages.length > 0 && (
                        <FadeUp className="w-full py-[80px] overflow-x-auto">
                            <div className="flex flex-row gap-[8px] px-[192px]" style={{ minWidth: 'max-content' }}>
                                {proyecto.galeriaImages.map((img, i) => (
                                    <div key={i} className="relative flex-shrink-0 overflow-hidden bg-[#D9D9D9]" style={{ width: '760px', height: '473px' }}>
                                        <Image src={img} alt={`${proyecto.nombre} — ${i + 1}`} fill className="object-cover object-center" />
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    )}

                    {/* ─── CTA ───────────────────────────────────────────────── */}
                    <FadeUp className="w-full py-[100px] flex flex-col items-center gap-[40px]">
                        <div className="flex flex-row items-center gap-[16px]">
                            <svg width="40" height="6" viewBox="0 0 40 6" fill="none"><rect width="40" height="6" fill="#0F0F0F" /></svg>
                            <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '64px', lineHeight: '1', letterSpacing: '-0.32px' }}>
                                Construimos tus sueños
                            </p>
                        </div>
                        <Link href="/contacto" className="bg-[#101010] text-[#F5F5F5] px-[20px] py-[8px] hover:bg-[#2a2a2a] transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '19px' }}>
                            Hablá con nosotros
                        </Link>
                    </FadeUp>

                    {/* ─── MÁS PROYECTOS ─────────────────────────────────────── */}
                    <section className="w-full pb-[80px]">
                        <FadeUp>
                            <h2 className="m-0 mb-[32px] px-[89px]" style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '36px', color: '#0F0F0F' }}>
                                MÁS PROYECTOS
                            </h2>
                        </FadeUp>
                        <Stagger className="flex flex-row gap-[8px] px-[93px] overflow-x-auto pb-[8px]">
                            {otrosProyectos.map((p) => (
                                <StaggerItem key={p.slug} className="flex-shrink-0">
                                    <Link href={`/proyectos/${p.slug}`} className="relative overflow-hidden bg-[#D9D9D9] group block" style={{ width: '391px', height: '576px' }}>
                                        <Image src={p.imagenPrincipal} alt={p.nombre} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                        <div className="absolute bottom-[24px] left-[24px]">
                                            <p className="text-white m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase' }}>{p.nombre}</p>
                                            <p className="text-white/80 m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '13px' }}>{p.ubicacion}</p>
                                        </div>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>

                </main>
            </div>
        </div>
    )
}
