'use client'
import { useMemo, useState } from 'react'
import { Proyecto } from '@/data/proyectos'
import ProyectosFiltros, { Opcion } from './ProyectosFiltros'
import ProyectosGrid from './ProyectosGrid'

const ESTADO_LABEL: Record<string, string> = {
    en_construccion: 'En construcción',
    entregado: 'Entregado',
    en_venta: 'En venta',
}
const TIPO_LABEL: Record<string, string> = {
    residencial: 'Residencial',
    comercial: 'Comercial',
}

// Opciones únicas preservando el orden de aparición en los datos.
function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
}

export default function ProyectosExplorer({ proyectos }: { proyectos: Proyecto[] }) {
    const [barrio, setBarrio] = useState<string | null>(null)
    const [etapa, setEtapa] = useState<string | null>(null)
    const [tipologia, setTipologia] = useState<string | null>(null)

    const opciones = useMemo(
        () => ({
            barrio: unique(proyectos.map((p) => p.barrio)).map((b): Opcion => ({ value: b, label: b })),
            etapa: unique(proyectos.map((p) => p.estado)).map((e): Opcion => ({ value: e, label: ESTADO_LABEL[e] ?? e })),
            tipologia: unique(proyectos.map((p) => p.tipo)).map((t): Opcion => ({ value: t, label: TIPO_LABEL[t] ?? t })),
        }),
        [proyectos],
    )

    const filtrados = useMemo(
        () =>
            proyectos.filter(
                (p) =>
                    (barrio === null || p.barrio === barrio) &&
                    (etapa === null || p.estado === etapa) &&
                    (tipologia === null || p.tipo === tipologia),
            ),
        [proyectos, barrio, etapa, tipologia],
    )

    const onChange = (key: 'barrio' | 'etapa' | 'tipologia', value: string | null) => {
        if (key === 'barrio') setBarrio(value)
        else if (key === 'etapa') setEtapa(value)
        else setTipologia(value)
    }

    return (
        <>
            <ProyectosFiltros
                opciones={opciones}
                valores={{ barrio, etapa, tipologia }}
                onChange={onChange}
            />
            {filtrados.length > 0 ? (
                <ProyectosGrid proyectos={filtrados} />
            ) : (
                <div className="w-full px-6 sm:px-10 lg:px-[80px] py-[80px] lg:py-[120px]">
                    <p
                        className="m-0 text-[#888888]"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '20px' }}
                    >
                        No hay proyectos que coincidan con estos filtros.
                    </p>
                </div>
            )}
        </>
    )
}
