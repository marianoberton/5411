'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp, SlideIn } from '@/components/ui/Motion'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const collageVariants = {
    topLeft:     { hidden: { opacity: 0, x: -48, y: -48 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: expo, delay: 0.1 } } },
    topRight:    { hidden: { opacity: 0, x: 48,  y: -48 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: expo, delay: 0.24 } } },
    bottomLeft:  { hidden: { opacity: 0, x: -48, y: 48  }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: expo, delay: 0.18 } } },
    bottomRight: { hidden: { opacity: 0, x: 48,  y: 48  }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: expo, delay: 0.32 } } },
}

const listItems = [
    { text: 'Financiación propia', indent: 120 },
    { text: 'Beneficios de la compra en pozo', indent: 200 },
    { text: 'Finalización de proyectos en un máximo de 24 meses', indent: 280 },
    { text: 'Seguridad financiera y rentabilidad por pago al contado', indent: 360 },
    { text: 'Búsqueda constante de terrenos para nuevos proyectos', indent: 440 },
]

function ListSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px 0px' })
    return (
        <section ref={ref} className="w-full bg-white px-[76px] pt-[200px] pb-[200px]">
            <div style={{ maxWidth: '1115px' }}>
                <motion.div
                    className="pl-[20px] mb-[40px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: expo }}
                >
                    <p className="text-[#0F0F0F] m-0 mb-[28px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '26px', lineHeight: '1.3' }}>
                        Qué proponemos como empresa desarrolladora
                    </p>
                    <div className="w-[300px] h-[1px] bg-[#0F0F0F]" />
                </motion.div>

                <div className="flex flex-col gap-[8px]">
                    {listItems.map(({ text, indent }, i) => (
                        <motion.div
                            key={text}
                            className="flex flex-row items-center gap-[10px] py-[10px]"
                            style={{ paddingLeft: `${indent}px` }}
                            initial={{ opacity: 0, x: -24 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: expo, delay: 0.1 + i * 0.08 }}
                        >
                            <div className="flex-shrink-0">
                                <svg width="27" height="5" viewBox="0 0 27 5" fill="none"><rect width="27" height="5" fill="#0F0F0F" /></svg>
                            </div>
                            <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '21px', lineHeight: '1.4', opacity: 0.8 }}>
                                {text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default function PropuestaPage() {
    return (
        <div className="w-full flex flex-col bg-white">

            {/* ─── HERO COLLAGE ──────────────────────────────────────────── */}
            <section className="relative w-full h-[877px] bg-[#ECEAE3] overflow-hidden">

                <motion.div
                    className="absolute left-[145px] top-[52px] w-[240px] h-[317px] overflow-hidden bg-[#D9D9D9]"
                    variants={collageVariants.topLeft}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/otros/arquitecto-documentos.png" alt="Arquitecto con documentos" fill className="object-cover object-center" />
                </motion.div>

                <motion.div
                    className="absolute right-[129px] top-[89px] w-[276px] h-[365px] overflow-hidden bg-[#D9D9D9]"
                    variants={collageVariants.topRight}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/otros/construccion-1.jpg" alt="Obra en construcción" fill className="object-cover object-center" />
                </motion.div>

                <motion.div
                    className="absolute left-[297px] top-[470px] w-[193px] h-[255px] overflow-hidden bg-[#D9D9D9]"
                    variants={collageVariants.bottomLeft}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/otros/andamio-1.jpg" alt="Andamio" fill className="object-cover object-center" />
                </motion.div>

                <motion.div
                    className="absolute left-[794px] top-[409px] w-[193px] h-[255px] overflow-hidden bg-[#D9D9D9]"
                    variants={collageVariants.bottomRight}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/otros/gente-construccion.png" alt="Equipo de construcción" fill className="object-cover object-center" />
                </motion.div>

                <motion.h1
                    className="absolute left-1/2 -translate-x-1/2 text-[#0F0F0F] text-center whitespace-nowrap m-0"
                    style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '48px', lineHeight: '1', top: '296px' }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: expo, delay: 0.65 }}
                >
                    NUESTRA PROPUESTA
                </motion.h1>
            </section>

            <div className="w-full flex flex-col items-center bg-white">
            <main className="w-full max-w-[1440px] relative flex flex-col bg-white">

                {/* ─── INTRO: DOS COLUMNAS DE TEXTO ─────────────────────────── */}
                <section className="w-full bg-white px-[80px] pt-[100px] pb-[60px]">
                    <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-start gap-[80px]">
                        <SlideIn direction="left" className="flex flex-row items-start gap-[16px]" style={{ maxWidth: '640px' }} delay={0.05}>
                            <div className="flex-shrink-0 mt-[4px]">
                                <svg width="5" height="30" viewBox="0 0 5 30" fill="none"><rect width="5" height="30" fill="#0F0F0F" /></svg>
                            </div>
                            <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '32px', lineHeight: '1.4' }}>
                                En 5411 BRIQUE ofrecemos un servicio integral que abarca todas las etapas del desarrollo inmobiliario.
                            </p>
                        </SlideIn>
                        <SlideIn direction="right" className="flex flex-col items-end" style={{ maxWidth: '497px' }} delay={0.1}>
                            <p className="text-[#0F0F0F] text-right m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '24px', lineHeight: '1.5' }}>
                                Nuestro enfoque combina precisión técnica, diseño contemporáneo y una gestión eficiente orientada a generar valor sostenible para clientes e inversores.
                            </p>
                        </SlideIn>
                    </div>
                </section>

                {/* ─── IMAGEN DE PLANOS ─────────────────────────────────────── */}
                <FadeUp className="w-full bg-white px-[200px] py-[44px]">
                    <div className="relative w-full h-[694px] overflow-hidden bg-[#D9D9D9]">
                        <Image src="/images/otros/blueprints.jpg" alt="Planos arquitectónicos" fill className="object-cover object-center" />
                    </div>
                </FadeUp>

                {/* ─── QUÉ PROPONEMOS ──────────────────────────────────────── */}
                <ListSection />

            </main>
            </div>
        </div>
    )
}
