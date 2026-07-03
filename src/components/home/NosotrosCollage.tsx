'use client'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { SplitText } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const img1V = {
    hidden: { opacity: 0, x: -52, y: -24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.1, ease: expo, delay: 0.1 } },
}
const img2V = {
    hidden: { opacity: 0, x: 40, y: -32 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.1, ease: expo, delay: 0.25 } },
}
const img3V = {
    hidden: { opacity: 0, x: 52, y: 24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.1, ease: expo, delay: 0.4 } },
}
const img4V = {
    hidden: { opacity: 0, x: -40, y: 32 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.1, ease: expo, delay: 0.55 } },
}
const zoomV = {
    hidden: { scale: 1.14 },
    visible: { scale: 1 },
}

export default function NosotrosCollage() {
    // Desktop: trigger cuando img4 (top 64%) llega al viewport
    const desktopTrigger = useRef(null)
    const desktopInView = useInView(desktopTrigger, { once: true })

    // Mobile: trigger al entrar la sección (layout vertical, imágenes se ven de a una)
    const mobileTrigger = useRef(null)
    const mobileInView = useInView(mobileTrigger, { once: true, margin: '-80px 0px' })

    // Profundidad: cada imagen deriva a una velocidad distinta con el scroll
    // (capas a diferente distancia). El título flota apenas, entre medio.
    const collageRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: collageRef, offset: ['start end', 'end start'] })
    const drift1 = useTransform(scrollYProgress, [0, 1], [44, -64])
    const drift2 = useTransform(scrollYProgress, [0, 1], [78, -112])
    const drift3 = useTransform(scrollYProgress, [0, 1], [56, -84])
    const drift4 = useTransform(scrollYProgress, [0, 1], [96, -140])
    const driftTitle = useTransform(scrollYProgress, [0, 1], [24, -36])

    const items: {
        src: string; alt: string; sizes: string
        pos: React.CSSProperties; variants: typeof img1V; delay: number; drift: MotionValue<number>
    }[] = [
        {
            src: '/images/torre-incas-render-11.jpg', alt: 'Torre Residencial Los Incas', sizes: '257px',
            pos: { left: '5.5%', top: '8.3%', width: '17.8%', height: '37.1%' }, variants: img1V, delay: 0.1, drift: drift1,
        },
        {
            src: '/images/home-nosotros-2.jpg', alt: 'Interior moderno', sizes: '143px',
            pos: { left: '63%', top: '11.3%', width: '9.9%', height: '22%' }, variants: img2V, delay: 0.25, drift: drift2,
        },
        {
            src: '/images/home-nosotros-1.jpg', alt: 'Estilo de vida', sizes: '273px',
            pos: { left: '75.1%', top: '50.5%', width: '18.96%', height: '42.8%' }, variants: img3V, delay: 0.4, drift: drift3,
        },
        {
            src: '/images/home-nosotros-3.jpg', alt: 'Proceso de construcción', sizes: '194px',
            pos: { left: '16.6%', top: '64.4%', width: '13.5%', height: '29.5%' }, variants: img4V, delay: 0.55, drift: drift4,
        },
    ]

    return (
        <section className="w-full bg-[#fafafa] overflow-hidden">

            {/* ── Desktop ── */}
            <div ref={collageRef} className="hidden md:block relative w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] mx-auto h-[835px] 2xl:h-[960px] 3xl:h-[1100px]">

                {/* Trigger invisible en la posición de img4 — cuando llega al viewport, las 4 imágenes son visibles */}
                <div
                    ref={desktopTrigger}
                    className="absolute pointer-events-none"
                    style={{ top: '64%', left: 0, width: '1px', height: '1px' }}
                />

                {items.map((item) => (
                    <motion.div key={item.src} className="absolute" style={{ ...item.pos, y: item.drift }}>
                        <motion.div
                            className="relative w-full h-full overflow-hidden"
                            variants={item.variants}
                            initial="hidden"
                            animate={desktopInView ? 'visible' : 'hidden'}
                        >
                            <motion.div className="relative w-full h-full" variants={zoomV} transition={{ duration: 2.0, ease: expo, delay: item.delay }}>
                                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes={item.sizes} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Título — ola de caracteres, arranca cuando el collage ya se armó */}
                <motion.div
                    className="absolute inset-x-0 mx-auto flex items-center justify-center"
                    style={{ top: '38.4%', width: '62.5%', y: driftTitle }}
                >
                    <SplitText
                        as="h2"
                        lines={['TU ESTILO DE VIDA,', 'NUESTRA PRIORIDAD']}
                        play={desktopInView}
                        delay={0.5}
                        stagger={0.022}
                        duration={0.9}
                        className="font-serif font-normal text-[#0F0F0F] text-center m-0 text-[clamp(32px,3.6vw,80px)] leading-[1.15]"
                    />
                </motion.div>
            </div>

            {/* ── Mobile ── */}
            <div ref={mobileTrigger} className="md:hidden px-[24px] py-[60px] flex flex-col items-center gap-[24px]">
                <SplitText
                    as="h2"
                    lines={['TU ESTILO DE VIDA,', 'NUESTRA PRIORIDAD']}
                    play={mobileInView}
                    delay={0.1}
                    stagger={0.02}
                    duration={0.85}
                    className="font-serif font-normal text-[#0F0F0F] text-center m-0 text-[36px] leading-[1.1]"
                />
                <motion.div
                    className="relative w-full aspect-[4/3] overflow-hidden"
                    variants={img1V}
                    initial="hidden"
                    animate={mobileInView ? 'visible' : 'hidden'}
                >
                    <Image src="/images/torre-incas-render-11.jpg" alt="Torre Residencial Los Incas" fill className="object-cover" />
                </motion.div>
                <motion.div
                    className="relative w-full aspect-[3/4] overflow-hidden"
                    variants={img3V}
                    initial="hidden"
                    animate={mobileInView ? 'visible' : 'hidden'}
                >
                    <Image src="/images/home-nosotros-1.jpg" alt="Estilo de vida" fill className="object-cover" />
                </motion.div>
            </div>

        </section>
    )
}
