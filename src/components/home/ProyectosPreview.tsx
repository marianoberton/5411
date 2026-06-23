'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProyectosPreview() {
    const sectionRef = useRef<HTMLElement>(null)

    // scrollYProgress: 0 = section top at viewport top, 1 = section bottom at viewport bottom
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // Imagen: parte desplazada hacia la izquierda (más central) y se corre a la derecha
    const imageX   = useTransform(scrollYProgress, [0, 0.72], ['-42%', '0%'])
    // Ken Burns reverso dentro del frame
    const imageScale = useTransform(scrollYProgress, [0, 0.72], [1.12, 1])

    // Texto: aparece desde la izquierda mientras la imagen se corre
    const textOpacity = useTransform(scrollYProgress, [0.28, 0.65], [0, 1])
    const textX       = useTransform(scrollYProgress, [0.28, 0.65], [-48, 0])

    return (
        <>
            {/* ── Desktop: sticky scroll reveal ── */}
            <section
                ref={sectionRef}
                className="hidden md:block w-full bg-[#fafafa]"
                style={{ minHeight: '200vh' }}
            >
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <div className="w-full max-w-[1440px] mx-auto px-[120px]">

                        {/* Título — siempre visible, sin animar */}
                        <p
                            className="font-serif font-normal text-[#0F0F0F] m-0 mb-[48px]"
                            style={{ fontSize: 'clamp(24px, 2.3vw, 33px)' }}
                        >
                            PROYECTOS
                        </p>

                        <div className="flex flex-row gap-[48px] items-start">

                            {/* Texto — izquierda */}
                            <motion.div
                                className="flex flex-col gap-[32px] w-[35%] shrink-0"
                                style={{ opacity: textOpacity, x: textX }}
                            >
                                <div className="flex flex-row items-start gap-[16px]">
                                    <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                                    <p
                                        className="font-sans font-light text-[#0F0F0F] m-0"
                                        style={{ fontSize: 'clamp(14px, 1.5vw, 22px)', lineHeight: '1.45', maxWidth: '340px' }}
                                    >
                                        Elegimos los mejores barrios para cada uno de nuestros proyectos, para acercarte lo mejor de la ciudad.
                                    </p>
                                </div>
                                <Link
                                    href="/proyectos"
                                    className="bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] px-[16px] py-[9px] hover:opacity-80 transition-opacity inline-flex items-center justify-center self-start"
                                >
                                    Ver proyectos
                                </Link>
                            </motion.div>

                            {/* Imagen — derecha, parte desplazada al centro */}
                            <motion.div
                                className="flex-1 relative overflow-hidden"
                                style={{ x: imageX, aspectRatio: '678/628' }}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    style={{ scale: imageScale }}
                                >
                                    <Image
                                        src="/images/torre-incas-render-16.jpg"
                                        alt="Proyecto Los Incas"
                                        fill
                                        className="object-cover"
                                        sizes="678px"
                                    />
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mobile: layout simple ── */}
            <section className="md:hidden w-full bg-[#fafafa] py-[60px] px-[24px] flex flex-col gap-[32px]">
                <p className="font-serif font-normal text-[#0F0F0F] m-0 text-[24px]">PROYECTOS</p>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image src="/images/torre-incas-render-16.jpg" alt="Proyecto Los Incas" fill className="object-cover" sizes="100vw" />
                </div>
                <div className="flex flex-row items-start gap-[16px]">
                    <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                    <p className="font-sans font-light text-[#0F0F0F] m-0 text-[16px]" style={{ lineHeight: '1.45' }}>
                        Elegimos los mejores barrios para cada uno de nuestros proyectos, para acercarte lo mejor de la ciudad.
                    </p>
                </div>
                <Link
                    href="/proyectos"
                    className="bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] px-[16px] py-[9px] hover:opacity-80 transition-opacity inline-flex items-center justify-center self-start"
                >
                    Ver proyectos
                </Link>
            </section>
        </>
    )
}
