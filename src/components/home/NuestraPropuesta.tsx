'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function NuestraPropuesta() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // Imagen izquierda: parte desplazada hacia la derecha (centro de pantalla), se corre a su posición final
    const imageX     = useTransform(scrollYProgress, [0, 0.72], ['42%', '0%'])
    const imageScale = useTransform(scrollYProgress, [0, 0.72], [1.12, 1])

    // Texto derecha: emerge desde la derecha mientras la imagen se asienta
    const textOpacity = useTransform(scrollYProgress, [0.28, 0.65], [0, 1])
    const textX       = useTransform(scrollYProgress, [0.28, 0.65], [48, 0])

    return (
        <>
            {/* ── Desktop: sticky scroll (espejo de ProyectosPreview) ── */}
            <section
                ref={sectionRef}
                className="hidden md:block w-full bg-[#fafafa]"
                style={{ minHeight: '200vh' }}
            >
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <div className="w-full max-w-[1440px] mx-auto px-[120px]">

                        <p
                            className="font-serif font-normal text-[#0F0F0F] m-0 mb-[48px] text-right"
                            style={{ fontSize: 'clamp(24px, 2.3vw, 33px)' }}
                        >
                            NUESTRA PROPUESTA
                        </p>

                        <div className="flex flex-row gap-[48px] items-start">

                            {/* Imagen — izquierda */}
                            <motion.div
                                className="relative overflow-hidden shrink-0"
                                style={{ x: imageX, width: '55%', aspectRatio: '674/624' }}
                            >
                                <motion.div className="relative w-full h-full" style={{ scale: imageScale }}>
                                    <Image
                                        src="/images/home-propuesta-1.jpg"
                                        alt="Nuestra propuesta"
                                        fill
                                        className="object-cover object-top"
                                        sizes="55vw"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Texto — derecha */}
                            <motion.div
                                className="flex flex-col gap-[32px] flex-1"
                                style={{ opacity: textOpacity, x: textX }}
                            >
                                <div className="flex flex-row items-start gap-[16px]">
                                    <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                                    <p
                                        className="font-sans font-light text-[#0F0F0F] m-0"
                                        style={{ fontSize: 'clamp(14px, 1.5vw, 22px)', lineHeight: '1.45', maxWidth: '247px' }}
                                    >
                                        Estamos con vos en cada paso del proceso de inversión en bienes raíces.
                                    </p>
                                </div>
                                <Link
                                    href="/propuesta"
                                    className="bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] px-[16px] py-[9px] hover:opacity-80 transition-opacity inline-flex items-center justify-center self-start"
                                >
                                    Nuestra propuesta
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mobile ── */}
            <section className="md:hidden w-full bg-[#fafafa] py-[60px] px-[24px] flex flex-col gap-[32px]">
                <p className="font-serif font-normal text-[#0F0F0F] m-0 text-[24px] text-right">NUESTRA PROPUESTA</p>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image src="/images/home-propuesta-1.jpg" alt="Nuestra propuesta" fill className="object-cover object-top" sizes="100vw" />
                </div>
                <div className="flex flex-row items-start gap-[16px]">
                    <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                    <p className="font-sans font-light text-[#0F0F0F] m-0 text-[16px]" style={{ lineHeight: '1.45' }}>
                        Estamos con vos en cada paso del proceso de inversión en bienes raíces.
                    </p>
                </div>
                <Link href="/propuesta" className="bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] px-[16px] py-[9px] hover:opacity-80 transition-opacity inline-flex items-center justify-center self-start">
                    Nuestra propuesta
                </Link>
            </section>
        </>
    )
}
