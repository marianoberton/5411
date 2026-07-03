// Datos del isotipo 5411 Brique, compartidos por el intro y las transiciones.
// El mark es un edificio estilizado: tres losas superiores, el brazo del "4",
// el arco ("n"/5) y el tronco vertical. viewBox 2000×2000 con el <g> volteado.

export const MARK_VIEWBOX = '0 0 2000 2000'
export const MARK_TRANSFORM = 'translate(0,2000) scale(0.1,-0.1)'

export type MarkPart = {
    d: string
    /** Orden de construcción de abajo hacia arriba (como se levanta un edificio). */
    build: number
    /** Posición vertical aproximada del centro (0 = arriba, 1 = abajo) para olas. */
    y: number
}

export const MARK_PARTS: MarkPart[] = [
    // Losa superior 1 (la más alta) — se coloca última
    { d: 'M6973 15211 c-74 -34 -73 -30 -73 -465 0 -273 3 -393 12 -411 6 -14 28 -36 47 -48 l36 -22 3005 0 3005 0 36 22 c19 12 41 34 47 48 9 18 12 138 12 411 0 435 1 431 -73 465 -41 18 -116 19 -3027 19 -2911 0 -2986 -1 -3027 -19z', build: 5, y: 0.06 },
    // Losa superior 2
    { d: 'M6953 13440 c-52 -31 -54 -54 -51 -487 l3 -393 33 -32 32 -33 3030 0 3030 0 32 33 33 32 3 403 c2 368 1 405 -15 437 -10 19 -29 40 -43 47 -20 10 -649 13 -3040 13 -2971 0 -3015 0 -3047 -20z', build: 4, y: 0.2 },
    // Losa superior 3
    { d: 'M6975 11676 c-16 -7 -39 -23 -50 -36 -19 -21 -20 -38 -23 -426 l-3 -404 35 -37 34 -38 3032 0 3032 0 34 38 35 37 -3 404 c-3 388 -4 405 -23 426 -47 53 142 50 -3077 50 -2461 -1 -2998 -3 -3023 -14z', build: 3, y: 0.34 },
    // Brazo del "4" (horizontal inferior + escalón)
    { d: 'M10457 10323 c-4 -3 -7 -195 -7 -425 l0 -418 -1730 0 c-1919 0 -1776 5 -1806 -65 -22 -53 -21 -793 2 -840 33 -70 -152 -65 2238 -65 1841 0 2162 2 2191 14 68 29 65 -19 65 934 0 775 -2 860 -16 866 -21 8 -929 8 -937 -1z', build: 2, y: 0.5 },
    // Arco ("n"/5) — base del edificio
    { d: 'M10585 8093 c-722 -97 -1368 -566 -1691 -1228 -112 -231 -188 -502 -213 -759 -13 -127 -15 -1304 -3 -1324 7 -10 110 -12 483 -10 l474 3 5 670 c6 726 6 723 66 923 115 382 400 669 770 777 326 95 704 69 988 -68 333 -161 538 -431 638 -842 21 -87 22 -111 25 -755 2 -366 5 -675 8 -688 l5 -22 478 2 477 3 0 670 c0 644 -1 675 -22 795 -67 379 -196 687 -414 980 -353 477 -903 799 -1492 875 -148 19 -434 18 -582 -2z', build: 0, y: 0.82 },
    // Tronco vertical (pilar izquierdo)
    { d: 'M6938 7561 l-33 -29 0 -1351 0 -1351 28 -27 27 -28 410 -3 c360 -2 414 -1 441 13 62 33 59 -42 59 1397 0 1230 -1 1315 -18 1348 -9 19 -28 40 -42 47 -19 10 -127 13 -432 13 l-408 0 -32 -29z', build: 1, y: 0.78 },
]

// Acentos de marca (referencian los tokens CSS; cambiar en globals.css).
export const BRAND_BLUE = 'var(--brand-blue)'
export const BRAND_YELLOW = 'var(--brand-yellow)'
