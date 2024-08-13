import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from 'canvas-confetti'
import {Square} from './components/Square.jsx'
import {TURNOS, LINEAS} from './logic/constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Turn } from './components/Turn.jsx'
import { Board } from './components/Board.jsx'
import { quienGano, juegoTrancado } from './logic/logic.js'

function App() {
  const [tablero, setTablero] = useState(()=>{
    const tableroLocal = JSON.parse(window.localStorage.getItem("tablero"))
    // Si no hay tableroLocal definido, inicializar tablero de cero.
    return tableroLocal ?? Array(9).fill(null)
  });

  const [turno, setTurno] = useState(()=>{
    const turnoLocal = window.localStorage.getItem("turno")
    return turnoLocal ?? TURNOS.X
  });
  const [ganador, setGanador] = useState(null)

  const resetGame = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.X)
    setGanador(null)
    window.localStorage.removeItem("tablero");
    window.localStorage.removeItem("turno");
  }

  const updateBoard = (index) => {
    if (tablero[index] || ganador) return;

    // Actualizar el juego
    const tableroNuevo = [... tablero]
    tableroNuevo[index] = turno
    setTablero(tableroNuevo)

    // Siguiente turno.
    const nuevoTurno = turno == TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(nuevoTurno)

    // Guardar el juego
    window.localStorage.setItem("tablero", JSON.stringify(tableroNuevo))
    window.localStorage.setItem("turno",   nuevoTurno)

    // Revisar si hay un ganador.
    const nuevoGanador = quienGano(turno, tableroNuevo, ganador)
    if(nuevoGanador){
      confetti()
      setGanador(turno)
    } else if (juegoTrancado(tableroNuevo)){
      setGanador(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe (La vieja)</h1>
      <button onClick={resetGame}>¿Otra vez?</button>
      
      <Board tablero={tablero} updateBoard={updateBoard}/>
      <Turn turno={turno}/>
      <WinnerModal ganador={ganador} resetGame={resetGame}/>
    </main>
  )
}

export default App
