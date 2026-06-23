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