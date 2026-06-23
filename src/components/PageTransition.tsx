'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ x: '5%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-4%', opacity: 0 }}
                transition={{
                    x:       { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.28, ease: 'easeInOut' },
                }}
                style={{ width: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
