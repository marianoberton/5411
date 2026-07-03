# 5411 Brique — Website

## Stack
- Next.js 15.x (App Router) — verificar versión exacta en node_modules/next/package.json
- React 19 + Tailwind CSS 4
- TypeScript
- Fonts: Bellefair (serif, títulos) + Space Grotesk (sans, cuerpo)

## Arquitectura: Header y Footer

**REGLA CRÍTICA**: Header y Footer viven ÚNICAMENTE en `app/layout.tsx`.
Las páginas individuales NO los importan ni los renderizan.
Cualquier página que tenga `<Header />` o `<Footer />` propio tiene un bug — eliminarlos.

## Sistema de animación — REGLAS CRÍTICAS

1. **`<main>` usa `overflow-x-clip`, NUNCA `overflow-x-hidden`** (layout.tsx).
   `hidden` crea un scroll container y rompe `position: sticky` de las
   secciones scrub de la home (ProyectosPreview, NuestraPropuesta). `clip`
   recorta sin romper sticky.
2. **PageTransition necesita `FrozenRouter`** (congela `LayoutRouterContext`).
   Sin él, App Router reemplaza el contenido del árbol saliente apenas navega
   y la página vieja desaparece en un flash antes de que la cortina la cubra.
3. La transición es una "cortina líquida" LIVIANA (SVG path con arista
   curvada, crema `#ECEAE3` + tinta `#0F0F0F`) en un solo gesto ascendente,
   SIN guiño intermedio. El guiño de marca vive en el LOGO DEL HEADER
   (BrandMark en Header.tsx): destella azul/amarillo ~1.0s después de cada
   cambio de ruta, sincronizado con el momento en que la cortina libera la
   zona del navbar. No reintroducir overlays de logo en PageTransition.
4. **Con scrollYProgress usar SOLO transforms numéricos** (px / unitless) y
   `useMotionTemplate` para clip-path. Los `useTransform` con salida string
   ('%', 'inset(...)') comparten un valor corrupto entre componentes en este
   stack (framer-motion 12 + React 19/Next 16) — bug real, verificado con
   valores idénticos no monotónicos entre secciones distintas.
5. Easing de la casa: expo-out `[0.16, 1, 0.3, 1]` para entradas/reveals;
   `[0.74, 0, 0.26, 1]` para la cortina. Microinteracciones CSS en
   `globals.css`: `.link-lift` (subrayado nav) y `.btn-sweep` (botones con
   barrido de relleno; el contenido va envuelto en `<span>`, colores vía
   `--sweep-bg` / `--sweep-ink`). OJO: `.btn-sweep` define
   `position: relative` y PISA las utilities de posición de Tailwind (CSS
   sin capa > @layer) — para elementos fixed (ej. WhatsAppButton), poner la
   posición en style inline.
6. Carruseles horizontales: NUNCA mostrar scrollbar lateral. Desktop usa
   galería pineada (GaleriaPinned en ProyectoContent: sticky + translateX
   numérico por scroll); mobile usa swipe con `.no-scrollbar`.
7. Heros con parallax: la imagen lleva buffer (-top-[120px], h+240px) y el
   drift numérico nunca supera el buffer — si asoma una franja gris del
   fondo, es esto.
8. Validación visual: scripts Playwright en `.anim-audit/` (gitignoreada) —
   capturan frames reales de intro, cortina, hovers y sticky. Correr contra
   `next start` en un PUERTO LIBRE verificado (3000/3001 suelen tener
   zombies u otras apps del usuario), no dev: el dev server distorsiona
   timings. Con Lenis, esperar a que scrollY se asiente antes de capturar.

## Navegación del Header

Los links de navegación deben usar rutas reales con next/link:
- PROYECTO → `/proyectos`
- NOSOTROS → `/nosotros`
- PROPUESTA → `/propuesta`
- CONTACTO → `/contacto`

NO usar anchors (#proyecto, #nosotros, etc.)

## Sistema de diseño

### Colores
- Fondo principal: #FFFFFF
- Fondo página: #FAFAFA
- Fondo footer: #ECEAE3
- Texto principal: #0F0F0F / #171717
- Borde footer: #696767
- Negro puro: #0F0F0F

### Tipografía
- Títulos/display: `font-serif` → Bellefair (400 único weight)
- Cuerpo/UI: `font-sans` → Space Grotesk (300, 400, 500, 600, 700)

### Layout
- Ancho máximo de contenido: `max-w-[1440px]`
- Contenedor interno navegable: `max-w-[1240px]`

### Dark mode
El proyecto NO tiene dark mode. Eliminar o ignorar el media query
`prefers-color-scheme: dark` en globals.css.

## Datos reales confirmados

### Contacto
- Email: info@5411briquedes.com
- Teléfonos: 4706-0921 / +54 (11) 6271-7818
- Dirección: Antonio Mariscal de Sucre 362, Belgrano, Capital Federal

### Proyectos (5 confirmados)
- Los Incas → slug: los-incas
- Mater Dei → slug: mater-dei
- Arias 3020 → slug: arias-3020
- Arias 3023 → slug: arias-3023
- Oficinas Sucre → slug: oficinas-sucre

Los slugs para `/proyectos/[slug]` deben ser: `los-incas`, `mater-dei`, `arias-3020`, `arias-3023`, `oficinas-sucre`

## Estado de páginas

| Página | Estado | Notas |
|--------|--------|-------|
| `/` | ✅ | Hero con video, collage, preview proyectos, stats |
| `/proyectos` | ✅ | Grid asimétrico, filtros UI, data layer |
| `/nosotros` | ✅ | Hero, visión, equipo, números alternados, imagen final |
| `/propuesta` | ✅ | Collage hero, texto dos columnas, lista indentada |
| `/contacto` | ✅ | Formulario visual, iframe mapa |
| `/proyectos/[slug]` | ✅ | 5 rutas estáticas generadas |

## Pendientes (contenido, no código)
- Reemplazar todos los placeholders bg-[#D9D9D9] con imágenes reales en public/images/
- Completar campos [COMPLETAR] en src/data/proyectos.ts (ubicacion, descripcion por proyecto)
- Completar specs por proyecto en ProyectoSpecs.tsx (EL EDIFICIO / UNIDADES / AMENITIES)
- Conectar formulario de /contacto a un backend o servicio (Resend, Formspree, etc.)
- Activar filtros funcionales en /proyectos
- Verificar responsive mobile en todas las páginas

## Imágenes
- `public/images/` vacío — usar placeholders con next/image hasta tener fotos reales
- Logos en `public/logos/`: `logo_solo.svg`, `logo_texto.svg`
- Videos en `public/videos/`
- Placeholder estándar: bg-[#D9D9D9] con texto "Imagen Provisoria" en font-sans

## Datos de proyectos
Centralizados en `src/data/proyectos.ts` como fuente única de verdad.
Estructura por proyecto:
```ts
{
  slug: string
  nombre: string
  ubicacion: string
  estado: 'en_construccion' | 'entregado' | 'en_venta'
  tipo: 'residencial' | 'comercial'
  descripcion: string
  imagenPrincipal: string
  imagenes: string[]
}
```

## Convenciones
- Componentes: PascalCase
- Páginas: page.tsx
- Imágenes: siempre next/image
- Links internos: siempre next/link
- NO usar anchors para navegación interna entre páginas
- Responsive: mobile-first
- NO inventar diseño — siempre basarse en el PNG de referencia

## Comandos
- `npm run dev` — desarrollo (puerto 3000)
- `npm run build` — build producción
- `npm run lint` — linter

## Flujo de trabajo con diseños
Los diseños de cada página están disponibles como PNG (exportados de Figma).
Ante cualquier duda de layout, espaciado o componente: pedir el PNG antes de asumir.