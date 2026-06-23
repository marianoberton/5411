'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
const titleV = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: expo, delay: 0.65 } },
}
const zoomV = {
    hidden: { scale: 1.14 },
    visible: { scale: 1 },
}

export default function NosotrosCollage() {
    // Desktop: trigger cuando img4 (top 64%) llega al viewport
    const desktopTrigger = useRef(null)
    const desktopInView = useInView(desktopTrigger as React.RefObject<Element>, { once: true })

    // Mobile: trigger al entrar la sección (layout vertical, imágenes se ven de a una)
    const mobileTrigger = useRef(null)
    const mobileInView = useInView(mobileTrigger as React.RefObject<Element>, { once: true, margin: '-80px 0px' })

    return (
        <section className="w-full bg-[#fafafa] overflow-hidden">

            {/* ── Desktop ── */}
            <div className="hidden md:block relative w-full max-w-[1440px] mx-auto" style={{ height: '835px' }}>

                {/* Trigger invisible en la posición de img4 — cuando llega al viewport, las 4 imágenes son visibles */}
                <div
                    ref={desktopTrigger}
                    className="absolute pointer-events-none"
                    style={{ top: '64%', left: 0, width: '1px', height: '1px' }}
                />

                {/* Image 1 — arriba izquierda */}
                <motion.div
                    className="absolute overflow-hidden"
                    style={{ left: '5.5%', top: '8.3%', width: '17.8%', height: '37.1%' }}
                    variants={img1V}
                    initial="hidden"
                    animate={desktopInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="relative w-full h-full" variants={zoomV} transition={{ duration: 2.0, ease: expo, delay: 0.1 }}>
                        <Image src="/images/torre-incas-render-11.jpg" alt="Torre Residencial Los Incas" fill className="object-cover" sizes="257px" />
                    </motion.div>
                </motion.div>

                {/* Image 2 — arriba derecha */}
                <motion.div
                    className="absolute overflow-hidden"
                    style={{ left: '63%', top: '11.3%', width: '9.9%', height: '22%' }}
                    variants={img2V}
                    initial="hidden"
                    animate={desktopInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="relative w-full h-full" variants={zoomV} transition={{ duration: 2.0, ease: expo, delay: 0.25 }}>
                        <Image src="/images/home-nosotros-2.jpg" alt="Interior moderno" fill className="object-cover" sizes="143px" />
                    </motion.div>
                </motion.div>

                {/* Image 3 — derecha abajo */}
                <motion.div
                    className="absolute overflow-hidden"
                    style={{ left: '75.1%', top: '50.5%', width: '18.96%', height: '42.8%' }}
                    variants={img3V}
                    initial="hidden"
                    animate={desktopInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="relative w-full h-full" variants={zoomV} transition={{ duration: 2.0, ease: expo, delay: 0.4 }}>
                        <Image src="/images/home-nosotros-1.jpg" alt="Estilo de vida" fill className="object-cover" sizes="273px" />
                    </motion.div>
                </motion.div>

                {/* Image 4 — abajo izquierda */}
                <motion.div
                    className="absolute overflow-hidden"
                    style={{ left: '16.6%', top: '64.4%', width: '13.5%', height: '29.5%' }}
                    variants={img4V}
                    initial="hidden"
                    animate={desktopInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="relative w-full h-full" variants={zoomV} transition={{ duration: 2.0, ease: expo, delay: 0.55 }}>
                        <Image src="/images/home-nosotros-3.jpg" alt="Proceso de construcción" fill className="object-cover" sizes="194px" />
                    </motion.div>
                </motion.div>

                {/* Título */}
                <motion.div
                    className="absolute inset-x-0 mx-auto flex items-center justify-center"
                    style={{ top: '38.4%', width: '62.5%' }}
                    variants={titleV}
                    initial="hidden"
                    animate={desktopInView ? 'visible' : 'hidden'}
                >
                    <h2
                        className="font-serif font-normal text-[#0F0F0F] text-center m-0"
                        style={{ fontSize: 'clamp(32px, 3.6vw, 52px)', lineHeight: '1.15' }}
                    >
                        TU ESTILO DE VIDA,<br />NUESTRA PRIORIDAD
                    </h2>
                </motion.div>
            </div>

            {/* ── Mobile ── */}
            <div ref={mobileTrigger} className="md:hidden px-[24px] py-[60px] flex flex-col items-center gap-[24px]">
                <motion.h2
                    className="font-serif font-normal text-[#0F0F0F] text-center m-0 text-[36px]"
                    style={{ lineHeight: '1.1' }}
                    variants={titleV}
                    initial="hidden"
                    animate={mobileInView ? 'visible' : 'hidden'}
                >
                    TU ESTILO DE VIDA,<br />NUESTRA PRIORIDAD
                </motion.h2>
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
