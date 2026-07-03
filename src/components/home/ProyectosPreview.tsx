'use client'
import { useRef } from 'react'
import { motion, useInView, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SplitText } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ProyectosPreview() {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // Coreografía sin cruces: la imagen se revela EN SU LUGAR (clip-path que
    // se abre desde el borde interno + zoom que asienta) mientras el texto
    // asciende en su propia columna. Nada pasa por encima de nada.
    // Al final, drift parallax suave que entrega el handoff a la siguiente.
    // IMPORTANTE: solo transforms numéricos sobre scrollYProgress (los de
    // string comparten un valor corrupto entre componentes en este stack);
    // clip-path vía useMotionTemplate. El texto entra por tween (useInView).
    const clipRight = useTransform(scrollYProgress, [0.04, 0.48], [100, 0])
    const imageClip = useMotionTemplate`inset(0% ${clipRight}% 0% 0%)`
    const imageScale = useTransform(scrollYProgress, [0.04, 0.55], [1.24, 1])
    const sceneY = useTransform(scrollYProgress, [0.62, 1], [0, -58])

    // El texto asciende en su columna cuando la escena ya está pineada.
    const stickyRef = useRef(null)
    const textIn = useInView(stickyRef, { once: true, amount: 0.55 })

    return (
        <>
            {/* ── Desktop: sticky scroll reveal ── */}
            <section
                ref={sectionRef}
                className="hidden md:block w-full bg-[#fafafa]"
                style={{ minHeight: '170vh' }}
            >
                <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <motion.div className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] mx-auto px-[120px] 3xl:px-[160px]" style={{ y: sceneY }}>

                        {/* Título — SplitText carácter por carácter al entrar la sección */}
                        <SplitText
                            as="p"
                            lines={['PROYECTOS']}
                            stagger={0.03}
                            duration={0.9}
                            className="font-serif font-normal text-[#0F0F0F] m-0 mb-[48px] 3xl:mb-[64px] text-[clamp(28px,2.6vw,56px)]"
                        />

                        <div className="flex flex-row gap-[48px] 3xl:gap-[72px] items-start">

                            {/* Texto — izquierda, asciende en su columna */}
                            <motion.div
                                className="flex flex-col gap-[32px] w-[35%] shrink-0"
                                initial={{ opacity: 0, y: 40 }}
                                animate={textIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 1.0, ease: expo, delay: 0.35 }}
                            >
                                <div className="flex flex-row items-start gap-[16px]">
                                    <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                                    <p
                                        className="font-sans font-light text-[#0F0F0F] m-0"
                                        style={{ fontSize: 'clamp(15px, 1.6vw, 30px)', lineHeight: '1.45', maxWidth: 'clamp(300px, 24vw, 460px)' }}
                                    >
                                        Elegimos los mejores barrios para cada uno de nuestros proyectos, para acercarte lo mejor de la ciudad.
                                    </p>
                                </div>
                                <Link
                                    href="/proyectos"
                                    className="btn-sweep group bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] 3xl:text-[19px] px-[18px] py-[10px] 3xl:px-[24px] 3xl:py-[13px] inline-flex items-center gap-[8px] self-start"
                                    style={{ '--sweep-bg': '#0F0F0F', '--sweep-ink': '#F8F5EC' } as React.CSSProperties}
                                >
                                    <span>Ver proyectos</span>
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            </motion.div>

                            {/* Imagen — derecha, se abre desde el borde interno */}
                            <motion.div
                                className="flex-1 relative overflow-hidden"
                                style={{ clipPath: imageClip, aspectRatio: '678/560' }}
                            >
                                <motion.div className="relative w-full h-full" style={{ scale: imageScale }}>
                                    <Image
                                        src="/images/otros/dsc05602-hdr-edit.jpg"
                                        alt="Proyecto Los Incas"
                                        fill
                                        className="object-cover"
                                        sizes="678px"
                                    />
                                </motion.div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Mobile: layout simple con reveals suaves ── */}
            <section className="md:hidden w-full bg-[#fafafa] py-[60px] px-[24px] flex flex-col gap-[32px]">
                <p className="font-serif font-normal text-[#0F0F0F] m-0 text-[28px]">PROYECTOS</p>
                <motion.div
                    className="relative w-full aspect-[4/3] overflow-hidden"
                    initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true, margin: '-60px 0px' }}
                    transition={{ duration: 1.1, ease: expo }}
                >
                    <motion.div
                        className="relative w-full h-full"
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-60px 0px' }}
                        transition={{ duration: 1.5, ease: expo }}
                    >
                        <Image src="/images/otros/dsc05602-hdr-edit.jpg" alt="Proyecto Los Incas" fill className="object-cover" sizes="100vw" />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-[24px]"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px 0px' }}
                    transition={{ duration: 0.8, ease: expo, delay: 0.15 }}
                >
                    <div className="flex flex-row items-start gap-[16px]">
                        <span className="font-sans font-light text-[16px] text-[#0F0F0F] shrink-0 mt-[2px]">—</span>
                        <p className="font-sans font-light text-[#0F0F0F] m-0 text-[16px]" style={{ lineHeight: '1.45' }}>
                            Elegimos los mejores barrios para cada uno de nuestros proyectos, para acercarte lo mejor de la ciudad.
                        </p>
                    </div>
                    <Link
                        href="/proyectos"
                        className="btn-sweep group bg-[#F8F5EC] text-[#0F0F0F] font-sans font-light text-[16px] px-[18px] py-[10px] inline-flex items-center gap-[8px] self-start"
                        style={{ '--sweep-bg': '#0F0F0F', '--sweep-ink': '#F8F5EC' } as React.CSSProperties}
                    >
                        <span>Ver proyectos</span>
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
