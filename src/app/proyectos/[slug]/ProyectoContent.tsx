'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Proyecto } from '@/data/proyectos'
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from '@/components/ui/Motion'
import { SplitText } from '@/components/ui/Reveal'

// Galería horizontal pineada (desktop): la página se clava y el scroll
// vertical arrastra el carrusel lateralmente — sin barra de desplazamiento.
// En mobile queda el swipe nativo con la scrollbar oculta.
function GaleriaPinned({ proyecto }: { proyecto: Proyecto }) {
    const sectionRef = useRef<HTMLElement>(null)
    const viewportRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [range, setRange] = useState(0)

    useEffect(() => {
        const measure = () => {
            const track = trackRef.current
            const viewport = viewportRef.current
            if (!track || !viewport) return
            setRange(Math.max(0, track.scrollWidth - viewport.clientWidth))
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
    const x = useTransform(scrollYProgress, [0.02, 0.98], [0, -range])

    return (
        <section
            ref={sectionRef}
            className="w-full"
            style={{ height: `calc(100vh + ${Math.max(range, 300)}px)` }}
        >
            <div ref={viewportRef} className="sticky top-0 h-screen overflow-hidden flex items-center">
                <motion.div
                    ref={trackRef}
                    className="flex flex-row gap-[8px] pl-[89px] pr-[120px]"
                    style={{ x, width: 'max-content' }}
                >
                    {proyecto.galeriaImages.map((img, i) => (
                        <div key={i} className="relative flex-shrink-0 overflow-hidden bg-[#D9D9D9] w-[680px] h-[425px] 3xl:w-[820px] 3xl:h-[512px]">
                            <Image
                                src={img}
                                alt={`${proyecto.nombre} — ${i + 1}`}
                                fill
                                sizes="820px"
                                className="object-cover object-center"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function DetailSection({ proyecto }: { proyecto: Proyecto }) {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-[89px] pt-[72px] lg:pt-[108px] pb-[60px]">
            {/* Año + Locación */}
            <FadeUp className="flex flex-row gap-[40px] lg:gap-[60px] mb-[40px] lg:mb-[48px]">
                <p className="m-0 text-[#0F0F0F] font-sans font-light text-[clamp(24px,5vw,32px)]">{proyecto.año}</p>
                <div>
                    <p className="m-0 text-[#0F0F0F] font-sans font-light text-[clamp(18px,4vw,24px)]">LOCACIÓN</p>
                    <p className="mt-[16px] lg:mt-[24px] m-0 text-[#0F0F0F] font-sans font-light text-[clamp(24px,5vw,32px)]">
                        {proyecto.locacionDetalle}
                    </p>
                </div>
            </FadeUp>

            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start">
                {/* Columna principal */}
                <div className="flex flex-col gap-[40px] lg:gap-[64px] w-full lg:flex-[1.6]">
                    <ScaleIn className="relative w-full h-[340px] sm:h-[520px] lg:h-[760px] overflow-hidden bg-[#D9D9D9]">
                        <Image src={proyecto.mainImage} alt={proyecto.nombre} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover object-center" />
                    </ScaleIn>
                    <FadeUp>
                        <p className="m-0 text-[#0F0F0F] font-sans font-light text-[clamp(20px,3.2vw,32px)] leading-[1.4]">
                            {proyecto.descripcion}
                        </p>
                    </FadeUp>
                </div>

                {/* Columna secundaria */}
                <div className="flex flex-col gap-[32px] lg:gap-[80px] w-full lg:flex-1">
                    <ScaleIn delay={0.12} className="relative w-full h-[320px] sm:h-[460px] lg:h-[539px] overflow-hidden bg-white">
                        <Image src={proyecto.portraitImage} alt={proyecto.nombre} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover object-center" />
                    </ScaleIn>
                    <SplitText
                        as="p"
                        lines={[proyecto.nombre.toUpperCase()]}
                        delay={0.1}
                        stagger={0.04}
                        duration={1.0}
                        className="m-0 text-[#0F0F0F] font-serif font-normal leading-none text-[clamp(64px,7vw,96px)] 2xl:text-[120px] 3xl:text-[150px]"
                    />
                </div>
            </div>
        </section>
    )
}

function SpecsSection({ proyecto }: { proyecto: Proyecto }) {
    const specs = [
        { label: 'EL EDIFICIO', value: proyecto.specs.edificio },
        { label: 'UNIDADES', value: proyecto.specs.unidades },
        ...(proyecto.specs.amenities?.trim() ? [{ label: 'AMENITIES', value: proyecto.specs.amenities }] : []),
    ]

    return (
        <section className="w-full px-6 sm:px-10 lg:px-[89px] py-[48px] lg:py-[60px] flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] items-start">
            {/* Specs textuales */}
            <SlideIn direction="left" className="w-full lg:flex-none lg:w-[435px] flex flex-col gap-[40px] lg:gap-[48px]">
                {specs.map(({ label, value }) => (
                    <div key={label}>
                        <p className="m-0 mb-[16px] text-[#0F0F0F] font-sans font-normal text-[clamp(26px,5vw,36px)]">{label}</p>
                        <p className="m-0 text-[#0F0F0F] font-sans font-light text-[clamp(18px,3.5vw,24px)] leading-[1.5] whitespace-pre-wrap">
                            {value}
                        </p>
                    </div>
                ))}
            </SlideIn>

            {/* Grid de imágenes */}
            <div className="w-full lg:flex-1 grid grid-cols-2 gap-[12px] lg:gap-[16px]">
                {proyecto.gridImages.map((img, i) =>
                    img ? (
                        <ScaleIn key={i} delay={i * 0.08} className="relative w-full overflow-hidden bg-white aspect-[305/414]">
                            <Image src={img} alt="" fill sizes="(max-width: 1024px) 45vw, 300px" className="object-cover" />
                        </ScaleIn>
                    ) : null
                )}
            </div>
        </section>
    )
}

export default function ProyectoContent({ proyecto, otrosProyectos }: { proyecto: Proyecto; otrosProyectos: Proyecto[] }) {
    return (
        <div className="w-full flex flex-col bg-[#ECEAE3]">

            {/* ─── HERO ──────────────────────────────────────────────── */}
            <section className="relative w-full h-svh min-h-[520px] overflow-hidden">
                <Image src={proyecto.heroImage} alt={proyecto.nombre} fill sizes="100vw" className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-black/[0.22]" />
                <div className="relative w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] h-full mx-auto">
                    <div className="absolute left-6 sm:left-10 lg:left-[80px] bottom-[64px] lg:bottom-[12vh]">
                        <SplitText
                            as="h1"
                            lines={[proyecto.nombre.toUpperCase()]}
                            delay={0.2}
                            stagger={0.04}
                            duration={1.0}
                            className="m-0 text-[#FAFAFA] font-serif font-normal leading-none text-[clamp(56px,9vw,96px)] 2xl:text-[120px] 3xl:text-[150px]"
                        />
                    </div>
                </div>
            </section>

            <div className="w-full flex flex-col items-center bg-[#ECEAE3]">
                <main className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] flex flex-col bg-[#ECEAE3]">

                    <DetailSection proyecto={proyecto} />
                    <SpecsSection proyecto={proyecto} />

                    {/* ─── GALERÍA HORIZONTAL ────────────────────────────────── */}
                    {proyecto.galeriaImages.length > 0 && (
                        <>
                            {/* Desktop: pineada, el scroll vertical arrastra el carrusel */}
                            <div className="hidden lg:block w-full">
                                <GaleriaPinned proyecto={proyecto} />
                            </div>
                            {/* Mobile / tablet: swipe nativo sin scrollbar */}
                            <FadeUp className="lg:hidden w-full py-[56px] overflow-x-auto no-scrollbar scroll-px-6 snap-x snap-mandatory">
                                <div className="flex flex-row gap-[8px] px-6 sm:px-10" style={{ width: 'max-content' }}>
                                    {proyecto.galeriaImages.map((img, i) => (
                                        <div key={i} className="relative flex-shrink-0 snap-start overflow-hidden bg-[#D9D9D9] w-[80vw] h-[50vw] sm:w-[600px] sm:h-[373px]">
                                            <Image src={img} alt={`${proyecto.nombre} — ${i + 1}`} fill sizes="(max-width: 640px) 80vw, 600px" className="object-cover object-center" />
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </>
                    )}

                    {/* ─── MÁS PROYECTOS ─────────────────────────────────────── */}
                    <section className="w-full pb-[80px]">
                        <FadeUp>
                            <h2 className="m-0 mb-[24px] lg:mb-[32px] px-6 sm:px-10 lg:px-[89px] font-serif font-normal text-[clamp(28px,5vw,36px)] text-[#0F0F0F]">
                                MÁS PROYECTOS
                            </h2>
                        </FadeUp>
                        <Stagger className="flex flex-row gap-[8px] px-6 sm:px-10 lg:px-[93px] overflow-x-auto no-scrollbar pb-[8px] snap-x snap-mandatory">
                            {otrosProyectos.map((p) => (
                                <StaggerItem key={p.slug} className="flex-shrink-0 snap-start">
                                    <Link href={`/proyectos/${p.slug}`} className="relative overflow-hidden bg-[#D9D9D9] group block w-[260px] h-[383px] lg:w-[391px] lg:h-[576px]">
                                        <Image src={p.imagenPrincipal} alt={p.nombre} fill sizes="(max-width: 1024px) 260px, 391px" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/[0.12] group-hover:bg-black/20 transition-colors" />
                                        <div className="absolute bottom-[24px] left-[24px]">
                                            <p className="text-white m-0 font-sans font-bold text-[16px] uppercase">{p.nombre}</p>
                                            <p className="text-white/80 m-0 font-sans font-light text-[13px]">{p.ubicacion}</p>
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
