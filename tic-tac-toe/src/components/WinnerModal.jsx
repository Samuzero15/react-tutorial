import { Square } from "./Square";

export function WinnerModal ({ganador, resetGame}) {
    if(ganador == null) return null;
    return (
    <section className='winner'>
        <div className='text'>
            <h2>
            {
                ganador == false ? 
                'Empate' : 
                'Ganó: '+ ganador
            }
            </h2>

            {ganador && (
            <header className='win'>
                <Square>{ganador}</Square>
            </header>
            )}

            <footer>
            <button onClick={resetGame}>¿Otra vez?</button>
            </footer>
        </div>
    </section>
    )
}