'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NosotrosImagenFinal() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

    return (
        <section className="w-full mt-[64px] lg:mt-[80px] mb-[96px] lg:mb-[148px]">
            <div className="mx-6 sm:mx-10 lg:mx-[80px]">
                <div ref={ref} className="relative w-full h-[260px] sm:h-[340px] lg:h-[403px] overflow-hidden">
                    <motion.div className="absolute inset-0" style={{ y }}>
                        <Image
                            src="/images/los-incas/render-17-2.png"
                            alt="5411 Brique — proyectos"
                            fill
                            sizes="(max-width: 1440px) 100vw, 1280px"
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
