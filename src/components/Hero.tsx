'use client'
import Link from 'next/link'
import { motion } from '@/components/ui/Motion'

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/5411brique-hero.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute left-0 right-0 flex justify-center"
                style={{ top: '192px', height: '470px' }}
            >
                <div className="w-full max-w-[1440px] flex flex-col items-start justify-center pl-[125px] pr-[198px]">
                    <motion.h1
                        className="text-white font-serif font-normal m-0 text-[96px] leading-normal"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    >
                        CONSTRUIMOS<br />TUS SUEÑOS
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    >
                        <Link
                            href="/proyectos"
                            className="bg-[#0F0F0F] text-[#F5F5F5] font-sans font-light text-[16px] px-[16px] py-[12px] hover:opacity-80 transition-opacity tracking-[-0.08px] whitespace-nowrap"
                        >
                            Conocé nuestros proyectos
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
