'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export type Opcion = { value: string; label: string }

type Props = {
    opciones: {
        barrio: Opcion[]
        etapa: Opcion[]
        tipologia: Opcion[]
    }
    valores: {
        barrio: string | null
        etapa: string | null
        tipologia: string | null
    }
    onChange: (key: 'barrio' | 'etapa' | 'tipologia', value: string | null) => void
}

function Dropdown({
    label,
    value,
    options,
    onSelect,
    delay,
    anim,
}: {
    label: string
    value: string | null
    options: Opcion[]
    onSelect: (value: string | null) => void
    delay: number
    anim: 'hidden' | 'visible'
}) {
    const [open, setOpen] = useState(false)
    const activo = options.find((o) => o.value === value)

    return (
        <motion.div
            className="relative"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={anim}
            transition={{ duration: 0.6, ease: expo, delay }}
        >
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="group flex flex-row items-center gap-[14px] h-[46px] cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
            >
                <span
                    className={`whitespace-nowrap transition-opacity group-hover:opacity-60 ${activo ? 'text-[#0F0F0F]' : 'text-[#0F0F0F]'}`}
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: activo ? 500 : 400, fontSize: '20px', lineHeight: '26px' }}
                >
                    {activo ? activo.label : label}
                </span>
                <span
                    className={`w-[14px] h-[8px] border-b-2 border-r-2 border-[#0F0F0F] rotate-45 -translate-y-1 transition-transform ${open ? 'rotate-[225deg] translate-y-0' : 'group-hover:translate-y-0'}`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* backdrop para cerrar al hacer click afuera */}
                        <button
                            type="button"
                            aria-hidden="true"
                            tabIndex={-1}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-[40] cursor-default"
                        />
                        <motion.ul
                            className="absolute left-0 top-[52px] z-[50] m-0 min-w-[200px] list-none bg-white p-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/10"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: expo }}
                        >
                            <li>
                                <button
                                    type="button"
                                    onClick={() => { onSelect(null); setOpen(false) }}
                                    className={`block w-full text-left px-[12px] py-[10px] rounded-sm transition-colors hover:bg-[#F2F1EC] ${value === null ? 'text-[#0F0F0F]' : 'text-[#888888]'}`}
                                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: value === null ? 500 : 400, fontSize: '16px' }}
                                >
                                    Todos
                                </button>
                            </li>
                            {options.map((o) => (
                                <li key={o.value}>
                                    <button
                                        type="button"
                                        onClick={() => { onSelect(o.value); setOpen(false) }}
                                        className={`block w-full text-left px-[12px] py-[10px] rounded-sm transition-colors hover:bg-[#F2F1EC] ${value === o.value ? 'text-[#0F0F0F]' : 'text-[#555555]'}`}
                                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: value === o.value ? 500 : 400, fontSize: '16px' }}
                                    >
                                        {o.label}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function ProyectosFiltros({ opciones, valores, onChange }: Props) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px 0px' })
    const anim = inView ? 'visible' : 'hidden'

    return (
        <section
            ref={ref}
            className="relative z-[30] w-full mt-[120px] lg:mt-[186px] mb-[40px] lg:mb-[20px] px-6 sm:px-10 lg:px-[80px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0"
        >
            <motion.h2
                className="text-[clamp(28px,5vw,36px)] leading-[1.05] text-[#0F0F0F]"
                style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400 }}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={anim}
                transition={{ duration: 0.6, ease: expo, delay: 0 }}
            >
                PROYECTOS
            </motion.h2>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:gap-x-[45px] lg:justify-end">
                <Dropdown label="Barrio" value={valores.barrio} options={opciones.barrio} onSelect={(v) => onChange('barrio', v)} delay={0.1} anim={anim} />
                <Dropdown label="Etapa de obra" value={valores.etapa} options={opciones.etapa} onSelect={(v) => onChange('etapa', v)} delay={0.2} anim={anim} />
                <Dropdown label="Tipología" value={valores.tipologia} options={opciones.tipologia} onSelect={(v) => onChange('tipologia', v)} delay={0.3} anim={anim} />
            </div>
        </section>
    )
}
