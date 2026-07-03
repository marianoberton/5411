'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SplitText } from '@/components/ui/Reveal'

export default function NosotrosHero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    // La imagen tiene 120px de buffer arriba y abajo; el parallax nunca lo
    // supera — sin franjas grises en los bordes. Valores numéricos (px):
    // los transforms de string comparten un valor corrupto en este stack.
    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section ref={ref} className="relative w-full h-svh min-h-[520px] overflow-hidden flex items-center justify-center">
            <motion.div className="absolute left-0 -top-[120px] h-[calc(100%+240px)] w-full" style={{ y }}>
                <Image
                    src="/images/otros/img-41.jpg"
                    alt="Nosotros"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20" />
            <SplitText
                as="h1"
                lines={['NOSOTROS']}
                delay={0.18}
                stagger={0.045}
                duration={1.0}
                className="relative z-10 text-[#FAFAFA] text-center font-serif font-normal m-0 leading-none text-[clamp(56px,12vw,96px)] 2xl:text-[122px] 3xl:text-[152px]"
            />
        </section>
    )
}
