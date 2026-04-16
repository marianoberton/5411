# 5411 Brique - Website

## Proyecto
Página web corporativa para 5411 Brique, empresa de construcción/desarrollo inmobiliario.

## Stack Tecnológico
- **Framework**: Next.js 16.1.4 (App Router)
- **UI**: React 19 + Tailwind CSS 4
- **Tipografías**:
  - Bellefair (serif) - títulos
  - Space Grotesk (sans) - cuerpo
- **Lenguaje**: TypeScript

## Estructura de Páginas
- `/` - Home (Hero con video + secciones)
- `/proyectos` - Listado de proyectos
- `/proyectos/[slug]` - Detalle de proyecto individual
- `/nosotros` - Sobre la empresa
- `/propuesta` - Propuesta de valor
- `/contacto` - Formulario de contacto

## Diseño
- **Figma**: https://www.figma.com/design/LkBCMV0VNmGBZayIc0P1o3/5411-Brique--Copy-
- **File ID**: LkBCMV0VNmGBZayIc0P1o3
- Usar MCP de Figma para extraer estilos, colores y componentes
- Ancho máximo de contenido: 1440px

## Estructura de Carpetas
```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Estilos globales
│   ├── proyectos/
│   │   ├── page.tsx          # Listado proyectos
│   │   └── [slug]/page.tsx   # Detalle proyecto
│   ├── nosotros/page.tsx
│   ├── propuesta/page.tsx
│   └── contacto/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ui/                   # Componentes reutilizables
public/
├── logos/
├── videos/
└── images/
```

## Colores (extraer de Figma)
- Negro principal: #0F0F0F
- Blanco: #FFFFFF
- Fondo: #FFFFFF

## Comandos
- `npm run dev` - Desarrollo local (puerto 3000)
- `npm run build` - Build de producción
- `npm run lint` - Linter

## Convenciones
- Componentes en PascalCase
- Archivos de página: page.tsx
- Imágenes optimizadas con next/image
- Links internos con next/link
- Responsive: mobile-first
