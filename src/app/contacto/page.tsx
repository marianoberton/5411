'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp, SlideIn } from '@/components/ui/Motion'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const campos = [
    { type: 'text',  name: 'nombre',   label: 'Nombre y apellido', height: '45px'  },
    { type: 'email', name: 'email',    label: 'Email',             height: '45px'  },
    { type: 'tel',   name: 'telefono', label: 'Teléfono',          height: '44px'  },
]

function FormAnimado() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px 0px' })
    return (
        <form ref={ref} className="flex flex-col gap-[8px]">
            {campos.map(({ type, name, label, height }, i) => (
                <motion.div
                    key={name}
                    className="relative"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: expo, delay: i * 0.07 }}
                >
                    <input
                        type={type}
                        name={name}
                        className="w-full px-[16px] pt-[24px] pb-[10px] bg-[#F9F7F2] text-[#0F0F0F] outline-none"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '14px', height }}
                        placeholder=""
                    />
                    <label
                        className="absolute left-[16px] top-[14px] pointer-events-none"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px', color: '#0F0F0F' }}
                    >
                        {label}
                    </label>
                </motion.div>
            ))}

            <motion.div
                className="relative"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: expo, delay: 0.21 }}
            >
                <textarea
                    name="consulta"
                    className="w-full px-[16px] pt-[24px] pb-[10px] bg-[#F9F7F2] text-[#0F0F0F] outline-none resize-none"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '14px', height: '152px' }}
                    placeholder=""
                />
                <label
                    className="absolute left-[16px] top-[14px] pointer-events-none"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px', color: '#0F0F0F' }}
                >
                    Dejanos tu consulta
                </label>
            </motion.div>

            <motion.div
                className="mt-[4px]"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: expo, delay: 0.28 }}
            >
                <button
                    type="submit"
                    className="bg-[#101010] text-[#ECEAE3] px-[16px] py-[12px] hover:bg-[#2a2a2a] transition-colors"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px' }}
                >
                    Envíar
                </button>
            </motion.div>
        </form>
    )
}

export default function ContactoPage() {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            <main className="w-full max-w-[1440px] flex flex-col bg-white">

                <FadeUp className="px-[80px] pt-[208px] pb-0">
                    <h1
                        className="text-[#0F0F0F] m-0"
                        style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '36px', lineHeight: '1' }}
                    >
                        CONTACTO
                    </h1>
                </FadeUp>

                <section className="w-full px-[80px] pt-[40px] pb-[160px]">
                    <div className="flex flex-row gap-[80px] items-start">

                        {/* ─── Columna izquierda ─────────────────────────────── */}
                        <SlideIn direction="left" className="flex flex-col" style={{ width: '530px', flexShrink: 0 }} delay={0.08}>

                            <h2 className="text-[#0F0F0F] m-0 mb-[32px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '32px', lineHeight: '1.2' }}>
                                Hablá con nosotros
                            </h2>

                            <div className="flex flex-col gap-[4px] mb-[80px]">
                                <a href="mailto:info@5411briquedes.com" className="text-[#0F0F0F] hover:underline" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '22px', lineHeight: '1.5' }}>
                                    info@5411briquedes.com
                                </a>
                                <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '22px', lineHeight: '1.5' }}>
                                    4706-0921 / +54 (11) 6271-7818
                                </p>
                                <p className="text-[#0F0F0F] m-0 mt-[16px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '22px', lineHeight: '1.5' }}>
                                    Antonio Mariscal de Sucre 362, Belgrano<br />Capital federal
                                </p>
                            </div>

                            <a href="https://maps.app.goo.gl/7gEvgcfMSNMVdvyW8" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden" style={{ width: '397px', height: '386px' }}>
                                <Image src="/images/otros/image-1.png" alt="Ubicación 5411 Brique — Antonio Mariscal de Sucre 362, Belgrano" fill className="object-cover" />
                            </a>
                        </SlideIn>

                        {/* ─── Columna derecha — Formulario ──────────────────── */}
                        <SlideIn direction="right" className="flex-1 pt-[80px]" delay={0.12}>
                            <FormAnimado />
                        </SlideIn>

                    </div>
                </section>

            </main>
        </div>
    )
}
