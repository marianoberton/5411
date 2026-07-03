// Coordina el intro del logo con el resto de la página: el hero de la home
// espera a que el intro se levante para que su coreografía sea visible.
let running = false
let everRan = false
const listeners = new Set<() => void>()

export function startIntro() {
    running = true
    everRan = true
}

export function finishIntro() {
    running = false
    listeners.forEach((l) => l())
}

export function isIntroRunning() {
    return running
}

// true si el intro ya terminó o nunca va a correr en este montaje.
export function isIntroDone() {
    return everRan ? !running : true
}

export function onIntroDone(cb: () => void) {
    listeners.add(cb)
    return () => { listeners.delete(cb) }
}
