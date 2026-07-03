'use client'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useContext, useState } from 'react'

// App Router reemplaza el payload RSC del árbol saliente apenas navega: sin
// esto, la página vieja desaparece en un flash ANTES de que la cortina la
// cubra. Congelar el LayoutRouterContext (valor capturado al montar, nunca se
// actualiza) mantiene la página saliente viva durante su animación de salida
// (patrón "FrozenRouter").
function FrozenRouter({ children }: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext)
    const [frozen] = useState(context)
    return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}

// Barrido "cortina líquida" en un solo gesto ascendente y liviano:
// la cortina de tinta sube con la arista curvada (el crema asoma como filo),
// pasa, y sigue de largo revelando la página nueva. Sin pausas ni guiño —
// el acento de marca vive en el logo del header, que destella al navegar.
// La arista nunca es recta: la curva se pronuncia a mitad de camino y se
// aplana al llegar, como tela con peso.

const easeCurtain: [number, number, number, number] = [0.74, 0, 0.26, 1]
const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

// viewBox 0 0 100 100 + preserveAspectRatio="none" → coordenadas en % de
// viewport. framer-motion interpola los números del path (misma estructura).

// CUBRIR: rectángulo anclado abajo; su borde superior sube con panza arriba.
const COVER_D = [
    'M0 100 H100 V100 Q50 100 0 100 Z',
    'M0 100 H100 V54 Q50 37 0 54 Z',
    'M0 100 H100 V0 Q50 0 0 0 Z',
]
// REVELAR: rectángulo anclado arriba; su borde inferior sube con panza abajo.
const REVEAL_D = [
    'M0 0 H100 V100 Q50 100 0 100 Z',
    'M0 0 H100 V46 Q50 63 0 46 Z',
    'M0 0 H100 V0 Q50 0 0 0 Z',
]

const SURFACE = '#ECEAE3'
const INK = '#0F0F0F'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const reduce = useReducedMotion()

    // Menos movimiento: fundido simple, sin cortina.
    if (reduce) {
        return (
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={pathname}
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
                    exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
                >
                    <FrozenRouter>{children}</FrozenRouter>
                </motion.div>
            </AnimatePresence>
        )
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div key={pathname} className="w-full">

                {/* ── Cortina (un solo SVG: capas crema + tinta, cubrir y revelar) ── */}
                <svg
                    className="fixed inset-0 z-[90] w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    {/* REVELAR — al montar: la tinta se levanta primero, el crema la persigue. */}
                    <motion.path
                        fill={SURFACE}
                        initial={{ d: REVEAL_D[0] }}
                        animate={{ d: REVEAL_D, transition: { duration: 0.6, ease: easeCurtain, times: [0, 0.5, 1], delay: 0.12 } }}
                    />
                    <motion.path
                        fill={INK}
                        initial={{ d: REVEAL_D[0] }}
                        animate={{ d: REVEAL_D, transition: { duration: 0.6, ease: easeCurtain, times: [0, 0.5, 1], delay: 0.04 } }}
                    />

                    {/* CUBRIR — al salir: el crema asoma como filo, la tinta sella detrás. */}
                    <motion.path
                        fill={SURFACE}
                        initial={{ d: COVER_D[0] }}
                        animate={{ d: COVER_D[0] }}
                        exit={{ d: COVER_D, transition: { duration: 0.42, ease: easeCurtain, times: [0, 0.5, 1] } }}
                    />
                    <motion.path
                        fill={INK}
                        initial={{ d: COVER_D[0] }}
                        animate={{ d: COVER_D[0] }}
                        exit={{ d: COVER_D, transition: { duration: 0.42, ease: easeCurtain, times: [0, 0.5, 1], delay: 0.07 } }}
                    />
                </svg>

                {/* ── Contenido: la página saliente se deja arrastrar hacia arriba;
                       la entrante asciende y asienta cuando la cortina la libera. ── */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: expo, delay: 0.1 } }}
                    exit={{ opacity: 0.75, y: -28, transition: { duration: 0.49, ease: easeCurtain } }}
                >
                    <FrozenRouter>{children}</FrozenRouter>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
