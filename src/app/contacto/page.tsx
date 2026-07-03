'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MaskWords, SplitText } from '@/components/ui/Reveal'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const campos = [
    { type: 'text', name: 'nombre', label: 'Nombre y apellido', autoComplete: 'name' },
    { type: 'email', name: 'email', label: 'Email', autoComplete: 'email' },
    { type: 'tel', name: 'telefono', label: 'Teléfono', autoComplete: 'tel' },
] as const

// Campos de línea: sin cajas — un subrayado fino que se entinta al foco,
// label flotante en versalitas. Una sola familia (sans light) + serif solo
// para display.
const fieldBase =
    'peer w-full bg-transparent border-0 border-b border-[#0F0F0F]/25 focus:border-[#0F0F0F] ' +
    'transition-colors duration-300 pt-[24px] pb-[10px] px-0 font-sans font-light text-[16px] ' +
    // el foco lo comunica el subrayado que se entinta (el outline global de
    // :focus-visible dibujaría una caja que rompe el estilo de línea)
    'text-[#0F0F0F] outline-none focus-visible:outline-none placeholder:text-transparent rounded-none'

const labelBase =
    'pointer-events-none absolute left-0 font-sans font-light transition-all duration-300 ' +
    'text-[#0F0F0F]/50 top-[22px] text-[15px] ' +
    'peer-focus:top-0 peer-focus:text-[10.5px] peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:text-[#0F0F0F]/70 ' +
    'peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10.5px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[2px]'

function FormElegante() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px 0px' })
    const [sent, setSent] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // Backend pendiente (Resend / Formspree). Por ahora confirmación visual.
        setSent(true)
    }

    return (
        <form ref={ref} onSubmit={handleSubmit} noValidate className="flex flex-col gap-[26px]">
            {campos.map(({ type, name, label, autoComplete }, i) => (
                <motion.div
                    key={name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: expo, delay: 0.1 + i * 0.09 }}
                >
                    <input
                        id={`contacto-${name}`}
                        type={type}
                        name={name}
                        required
                        autoComplete={autoComplete}
                        placeholder={label}
                        className={fieldBase}
                    />
                    <label htmlFor={`contacto-${name}`} className={labelBase}>
                        {label}
                    </label>
                </motion.div>
            ))}

            <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: expo, delay: 0.37 }}
            >
                <textarea
                    id="contacto-consulta"
                    name="consulta"
                    required
                    rows={4}
                    placeholder="Contanos sobre tu proyecto"
                    className={`${fieldBase} resize-none`}
                />
                <label htmlFor="contacto-consulta" className={labelBase}>
                    Contanos sobre tu proyecto
                </label>
            </motion.div>

            <motion.div
                className="mt-[16px] flex flex-wrap items-center gap-[20px]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: expo, delay: 0.46 }}
            >
                <button
                    type="submit"
                    className="btn-sweep group inline-flex items-center gap-[10px] bg-[#0F0F0F] text-[#F5F5F5] px-[28px] py-[14px] font-sans font-light text-[16px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                    style={{ '--sweep-bg': '#ECEAE3', '--sweep-ink': '#0F0F0F' } as React.CSSProperties}
                >
                    <span>Enviar consulta</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                {sent && (
                    <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-sans font-light text-[#0F0F0F]/70 text-[14px]"
                    >
                        ¡Gracias! Te responderemos a la brevedad.
                    </motion.span>
                )}
            </motion.div>
        </form>
    )
}

function DatoContacto({ label, children, delay, play }: { label: string; children: React.ReactNode; delay: number; play: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: expo, delay }}
        >
            <p className="m-0 mb-[10px] font-sans font-light text-[#0F0F0F]/50 text-[11px] uppercase tracking-[2.5px]">{label}</p>
            <div className="font-sans font-light text-[#0F0F0F] text-[clamp(17px,1.5vw,21px)] leading-[1.5]">{children}</div>
        </motion.div>
    )
}

export default function ContactoPage() {
    const infoRef = useRef(null)
    const infoIn = useInView(infoRef, { once: true, margin: '-60px 0px' })

    return (
        <div className="w-full flex flex-col items-center bg-[#FAFAFA]">
            <main className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] flex flex-col">

                {/* ── Encabezado editorial ── */}
                <section className="px-6 sm:px-10 lg:px-[80px] pt-[150px] lg:pt-[220px]">
                    <MaskWords
                        text="ESTAMOS PARA AYUDARTE"
                        as="p"
                        delay={0.05}
                        className="m-0 mb-[16px] font-sans font-light text-[#0F0F0F]/60 text-[12px] lg:text-[13px] uppercase tracking-[3px]"
                    />
                    <SplitText
                        as="h1"
                        lines={['CONTACTO']}
                        delay={0.15}
                        stagger={0.045}
                        duration={1.0}
                        className="m-0 font-serif font-normal text-[#0F0F0F] leading-[0.95] text-[clamp(56px,11vw,150px)]"
                    />
                </section>

                {/* ── Contenido ── */}
                <section ref={infoRef} className="w-full px-6 sm:px-10 lg:px-[80px] pt-[64px] lg:pt-[96px] pb-[110px] lg:pb-[170px]">
                    <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[110px] items-start">

                        {/* Columna izquierda: datos + mapa */}
                        <div className="flex flex-col gap-[36px] w-full lg:w-[440px] lg:flex-shrink-0">
                            <DatoContacto label="Email" delay={0.05} play={infoIn}>
                                <a
                                    href="mailto:info@5411briquedes.com"
                                    className="link-lift w-fit inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                                >
                                    info@5411briquedes.com
                                </a>
                            </DatoContacto>

                            <DatoContacto label="Teléfonos" delay={0.13} play={infoIn}>
                                <p className="m-0">4706-0921</p>
                                <a
                                    href="https://wa.me/5491162717818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-lift w-fit inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                                >
                                    +54 (11) 6271-7818
                                </a>
                            </DatoContacto>

                            <DatoContacto label="Dirección" delay={0.21} play={infoIn}>
                                <p className="m-0">
                                    Antonio Mariscal de Sucre 362<br />
                                    Belgrano, Buenos Aires
                                </p>
                            </DatoContacto>

                            <motion.a
                                href="https://maps.app.goo.gl/7gEvgcfMSNMVdvyW8"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver ubicación en Google Maps"
                                className="group block relative overflow-hidden w-full aspect-[440/330] mt-[8px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                                animate={infoIn ? { clipPath: 'inset(0% 0% 0% 0%)' } : { clipPath: 'inset(0% 0% 100% 0%)' }}
                                transition={{ duration: 1.1, ease: expo, delay: 0.3 }}
                            >
                                <Image
                                    src="/images/otros/image-1.png"
                                    alt="Ubicación 5411 Brique — Antonio Mariscal de Sucre 362, Belgrano"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 440px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                                <span className="absolute bottom-[14px] left-[14px] bg-[#0F0F0F] text-[#FAFAFA] font-sans font-light text-[12px] px-[12px] py-[7px]">
                                    Ver en Google Maps ↗
                                </span>
                            </motion.a>
                        </div>

                        {/* Columna derecha: formulario */}
                        <div className="w-full lg:flex-1 lg:max-w-[640px]">
                            <MaskWords
                                text="Contanos qué estás buscando"
                                as="h2"
                                delay={0.1}
                                className="m-0 mb-[40px] font-serif font-normal text-[#0F0F0F] text-[clamp(26px,3vw,40px)] leading-[1.15]"
                            />
                            <FormElegante />
                        </div>

                    </div>
                </section>

            </main>
        </div>
    )
}
