'use client'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SlideIn } from '@/components/ui/Motion'
import { SplitText } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ─── HERO ─────────────────────────────────────────────────────────────── */
function HeroPropuesta() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
    const overlay = useTransform(scrollYProgress, [0, 1], [0.32, 0.55])

    return (
        <section ref={ref} className="relative w-full h-[78vh] min-h-[520px] lg:h-[88vh] overflow-hidden flex items-center justify-center">
            <motion.div className="absolute inset-0" style={{ y, scale }}>
                <Image
                    src="/images/otros/blueprints.jpg"
                    alt="Planos arquitectónicos"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </motion.div>
            <motion.div className="absolute inset-0 bg-[#0F0F0F]" style={{ opacity: overlay }} />

            <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] px-6 sm:px-10 lg:px-[80px] flex flex-col items-center text-center">
                <motion.span
                    className="block mb-[20px] lg:mb-[28px] text-[#FAFAFA]/70 font-sans font-light tracking-[0.32em] uppercase text-[11px] lg:text-[13px]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: expo, delay: 0.15 }}
                >
                    Desarrolladora inmobiliaria
                </motion.span>
                <SplitText
                    as="h1"
                    lines={['NUESTRA PROPUESTA']}
                    delay={0.32}
                    stagger={0.03}
                    duration={1.05}
                    className="text-[#FAFAFA] font-serif font-normal m-0 leading-[0.98] text-[clamp(44px,10vw,92px)] 2xl:text-[118px] 3xl:text-[148px]"
                />
            </div>

            {/* línea-indicador inferior */}
            <motion.span
                className="absolute bottom-[26px] left-1/2 -translate-x-1/2 block w-[1px] h-[42px] overflow-hidden bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
            >
                <motion.span
                    className="absolute inset-x-0 top-0 block h-[16px] bg-white/80"
                    animate={{ y: [-16, 42] }}
                    transition={{ duration: 1.9, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
                />
            </motion.span>
        </section>
    )
}

/* ─── INTRO DOS COLUMNAS ───────────────────────────────────────────────── */
function IntroTexto() {
    return (
        <section className="w-full bg-white px-6 sm:px-10 lg:px-[80px] pt-[80px] lg:pt-[140px] pb-[60px] lg:pb-[80px]">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-[40px] lg:gap-[80px]">
                <SlideIn direction="left" className="flex flex-row items-start gap-[16px] w-full lg:max-w-[640px]" delay={0.05}>
                    <div className="flex-shrink-0 mt-[6px]">
                        <svg width="5" height="30" viewBox="0 0 5 30" fill="none"><rect width="5" height="30" fill="#0F0F0F" /></svg>
                    </div>
                    <p className="text-[#0F0F0F] m-0 text-[clamp(22px,4vw,32px)]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, lineHeight: '1.4' }}>
                        En 5411 BRIQUE ofrecemos un servicio integral que abarca todas las etapas del desarrollo inmobiliario.
                    </p>
                </SlideIn>
                <SlideIn direction="right" className="flex flex-col lg:items-end w-full lg:max-w-[497px]" delay={0.12}>
                    <p className="text-[#0F0F0F] lg:text-right m-0 text-[clamp(18px,3.2vw,24px)]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, lineHeight: '1.5' }}>
                        Nuestro enfoque combina precisión técnica, diseño contemporáneo y una gestión eficiente orientada a generar valor sostenible para clientes e inversores.
                    </p>
                </SlideIn>
            </div>
        </section>
    )
}

/* ─── COLLAGE EDITORIAL (tira escalonada, scroll-reveal) ───────────────── */
const procesoImages = [
    { src: '/images/otros/arquitecto-documentos.png', alt: 'Arquitecto con documentos', offset: 'lg:mt-0' },
    { src: '/images/otros/construccion-1.jpg', alt: 'Obra en construcción', offset: 'lg:mt-[64px]' },
    { src: '/images/otros/andamio-1.jpg', alt: 'Andamio', offset: 'lg:mt-[24px]' },
    { src: '/images/otros/gente-construccion.png', alt: 'Equipo en obra', offset: 'lg:mt-[88px]' },
]

function ProcesoCollage() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-15% 0px' })
    return (
        <section ref={ref} className="w-full bg-white px-6 sm:px-10 lg:px-[80px] py-[40px] lg:py-[72px]">
            <div className="max-w-[1280px] mx-auto">
                <SplitText
                    as="p"
                    lines={['Del plano a la obra']}
                    play={inView}
                    stagger={0.022}
                    duration={0.8}
                    className="text-[#0F0F0F] font-serif font-normal m-0 mb-[32px] lg:mb-[48px] text-[clamp(26px,4vw,42px)] leading-none"
                />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[20px] items-start">
                    {procesoImages.map((img, i) => (
                        <motion.div
                            key={img.src}
                            className={`relative overflow-hidden bg-[#D9D9D9] aspect-[3/4] ${img.offset}`}
                            initial={{ opacity: 0, y: 56 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.95, ease: expo, delay: 0.1 + i * 0.12 }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                initial={{ scale: 1.16 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ duration: 1.4, ease: expo, delay: 0.1 + i * 0.12 }}
                            >
                                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 45vw, 300px" className="object-cover object-center" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ─── QUÉ PROPONEMOS (lista escalonada) ────────────────────────────────── */
const listItems = [
    { text: 'Financiación propia', indent: 120 },
    { text: 'Beneficios de la compra en pozo', indent: 200 },
    { text: 'Finalización de proyectos en un máximo de 24 meses', indent: 280 },
    { text: 'Seguridad financiera y rentabilidad por pago al contado', indent: 360 },
    { text: 'Búsqueda constante de terrenos para nuevos proyectos', indent: 440 },
]

function ListSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-12% 0px' })
    return (
        <section ref={ref} className="w-full bg-white px-6 sm:px-10 lg:px-[76px] pt-[80px] lg:pt-[160px] pb-[100px] lg:pb-[200px]">
            <div className="lg:max-w-[1115px]">
                <div className="lg:pl-[20px] mb-[40px]">
                    <SplitText
                        as="p"
                        lines={['Qué proponemos como', 'empresa desarrolladora']}
                        play={inView}
                        stagger={0.016}
                        duration={0.8}
                        className="text-[#0F0F0F] m-0 mb-[28px] text-[clamp(22px,4vw,30px)]"
                        lineClassName="font-serif font-normal leading-[1.15]"
                    />
                    <motion.div
                        className="w-[200px] lg:w-[300px] h-[1px] bg-[#0F0F0F] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.9, ease: expo, delay: 0.3 }}
                    />
                </div>

                <div className="flex flex-col gap-[8px]">
                    {listItems.map(({ text, indent }, i) => (
                        <motion.div
                            key={text}
                            className="flex flex-row items-center gap-[12px] py-[10px] pl-0 lg:pl-[var(--indent)]"
                            style={{ ['--indent' as string]: `${indent}px` }}
                            initial={{ opacity: 0, x: -24 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease: expo, delay: 0.35 + i * 0.1 }}
                        >
                            <div className="flex-shrink-0">
                                <svg width="27" height="5" viewBox="0 0 27 5" fill="none"><rect width="27" height="5" fill="#0F0F0F" /></svg>
                            </div>
                            <p className="text-[#0F0F0F] m-0 text-[clamp(17px,3.5vw,21px)]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, lineHeight: '1.4', opacity: 0.8 }}>
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
            <HeroPropuesta />
            <div className="w-full flex flex-col items-center bg-white">
                <main className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] relative flex flex-col bg-white">
                    <IntroTexto />
                    <ProcesoCollage />
                    <ListSection />
                </main>
            </div>
        </div>
    )
}
