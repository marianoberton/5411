'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SplitText } from '@/components/ui/Reveal'

export default function ProyectosHero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    // Parallax acotado al buffer de la imagen (100px ≤ 120px de margen
    // superior) — sin franjas del fondo. Valores numéricos (px): los
    // transforms de string comparten un valor corrupto en este stack.
    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section ref={ref} className="relative w-full h-svh min-h-[520px] flex justify-center items-center overflow-hidden bg-white">
            <div className="absolute left-0 -top-[120px] h-[calc(100%+240px)] w-full overflow-hidden">
                <motion.div className="w-full h-full" style={{ y }}>
                    <Image
                        src="/images/proyectos/hero-bg.jpg"
                        alt="Nuestros Proyectos"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/[0.12]" />
            </div>

            <div className="relative w-full flex justify-center">
                <SplitText
                    as="h1"
                    lines={['NUESTROS', 'PROYECTOS']}
                    delay={0.18}
                    stagger={0.04}
                    duration={1.0}
                    className="text-center text-[#FAFAFA] font-serif font-normal m-0 leading-[1.05] text-[clamp(54px,9vw,96px)] 2xl:text-[122px] 3xl:text-[152px]"
                />
            </div>
        </section>
    )
}
