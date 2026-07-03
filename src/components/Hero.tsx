'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from '@/components/ui/Motion'
import { SplitText, useIntroReady } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
    const ready = useIntroReady()
    const ref = useRef<HTMLElement>(null)

    // Coreografía de salida: al scrollear, el título se despega más rápido que
    // el video (parallax en capas) y el indicador de scroll se retira primero.
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    // Solo transforms numéricos (px): los de string ('%') comparten un valor
    // corrupto entre componentes en este stack.
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -150])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 130])
    const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

    return (
        <section ref={ref} className="relative w-full h-screen min-h-[660px] overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y: videoY }}>
                <motion.video
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: ready ? 1 : 1.12 }}
                    transition={{ duration: 2.2, ease: expo }}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/5411brique-hero.mp4" type="video/mp4" />
                </motion.video>
            </motion.div>

            {/* Degradé del diseño */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.32))',
                }}
            />

            <div className="absolute inset-0 flex justify-center">
                <motion.div
                    className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] px-6 sm:px-10 lg:px-[56px] 3xl:px-[80px] flex flex-col items-start justify-start pt-[26vh] lg:pt-[24vh]"
                    style={{ y: contentY, opacity: contentOpacity }}
                >
                    <SplitText
                        as="h1"
                        lines={['CONSTRUIMOS', 'TUS SUEÑOS']}
                        play={ready}
                        delay={0.12}
                        stagger={0.035}
                        duration={1.0}
                        className="text-white font-serif font-normal m-0 leading-[1.05] text-[clamp(42px,9vw,96px)] 2xl:text-[118px] 3xl:text-[148px]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                        transition={{ duration: 0.8, ease: expo, delay: 0.55 }}
                    >
                        <Link
                            href="/proyectos"
                            className="btn-sweep group inline-flex items-center gap-[10px] mt-[26px] 3xl:mt-[36px] bg-[#0F0F0F] text-[#F5F5F5] font-sans font-light text-[16px] 3xl:text-[20px] px-[17px] py-[13px] 3xl:px-[24px] 3xl:py-[16px] tracking-[-0.08px] whitespace-nowrap"
                            style={{ '--sweep-bg': '#ECEAE3', '--sweep-ink': '#0F0F0F' } as React.CSSProperties}
                        >
                            <span>Conocé nuestros proyectos</span>
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicador de scroll: se retira primero cuando arranca el scroll */}
            <motion.div className="absolute bottom-[28px] left-1/2 -translate-x-1/2" style={{ opacity: hintOpacity }}>
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={ready ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                    <span className="text-white/60 font-sans font-light text-[11px] tracking-[2px] uppercase">Scroll</span>
                    <span className="relative block w-[1px] h-[38px] overflow-hidden bg-white/20">
                        <motion.span
                            className="absolute inset-x-0 top-0 block h-[14px] bg-white/80"
                            animate={{ y: [-14, 38] }}
                            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.3 }}
                        />
                    </span>
                </motion.div>
            </motion.div>
        </section>
    )
}
