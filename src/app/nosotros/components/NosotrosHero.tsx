'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NosotrosHero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

    return (
        <section ref={ref} className="relative w-full h-[720px] overflow-hidden flex items-center justify-center">
            <motion.div className="absolute inset-0" style={{ y }}>
                <Image
                    src="/images/otros/img-41.jpg"
                    alt="Nosotros"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20" />
            <motion.h1
                className="relative z-10 text-[#FAFAFA] text-center m-0"
                style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '96px', lineHeight: '1' }}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
                NOSOTROS
            </motion.h1>
        </section>
    )
}
