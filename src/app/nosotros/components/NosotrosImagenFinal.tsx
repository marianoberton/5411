'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NosotrosImagenFinal() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    // Drift suave dentro del buffer (-6% a 6% => 12% de holgura vertical).
    const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

    return (
        <section className="w-full mt-[64px] lg:mt-[80px] mb-[96px] lg:mb-[148px]">
            <div className="mx-6 sm:mx-10 lg:mx-[80px]">
                <div
                    ref={ref}
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '4000 / 1527' }}
                >
                    {/* buffer vertical de 12% para que el drift nunca deje franja */}
                    <motion.div className="absolute -top-[6%] left-0 w-full h-[112%]" style={{ y }}>
                        <Image
                            src="/images/banner_nosotros.PNG"
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
