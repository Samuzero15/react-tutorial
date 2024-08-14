import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [activado, setActivado] = useState(false);
  const [posicion, setPosicion] = useState({x:0, y:0});

  //Puedes usar mas de un efecto.
  useEffect(()=>{
    document.body.classList.toggle("no-cursor",activado);

    return () => {
      document.body.classList.remove("no-cursor");
    }
  })

  // Importante acerca del uso de las dependencias en useEffect
  // [] -> Se ejecuta una vez.
  // [activado, ...] -> Se ejecuta cada vez que las variables se actualizan.
  // undefined -> Se ejecuta cada ciclo de renderizado (todo el rato).

  useEffect(() => {

    const handleMove = (e)=>{
      setPosicion({x:e.x, y:e.y});
    }

    if (activado){
      window.addEventListener("pointermove",handleMove)
    }

    // Despues de cada efecto, limpiar los listeners para cuidar el rendimiento. ¡No lo olvides Samu!

    return () => {window.removeEventListener("pointermove", handleMove)}
  }, [activado])

  return (
    <>
      <h3>Un circulo que sigue tu cursor lol</h3>
      <div style={{
        display: activado ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        border: '4px solid #444',
        opacity: ".75",
        pointerEvents: "none",
        top: "-22px",
        left: "-22px",
        width: "40px",
        height: "40px",
        transform: "translate("+posicion.x+"px, "+posicion.y+"px)" 
      }}/>
      <button onClick={() => {setActivado(!activado)}}>{activado ? 'Desactivar' : 'Activar'} cursor</button>
    </>
  )
}

export default App
