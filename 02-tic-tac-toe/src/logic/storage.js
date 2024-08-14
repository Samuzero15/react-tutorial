export function guardarJuego({turno, tablero}) {
    window.localStorage.setItem("tablero", JSON.stringify(tablero))
    window.localStorage.setItem("turno",   turno)
}

export function reiniciarJuego() {
    window.localStorage.removeItem("tablero");
    window.localStorage.removeItem("turno");
}