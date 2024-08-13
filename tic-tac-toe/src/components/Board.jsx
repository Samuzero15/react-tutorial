import { Square } from "./Square"

export function Board({tablero, updateBoard}){
    return(
        <section className='game'>
            {
            tablero.map((_, index)=>{
                return(
                
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                    {tablero[index]}
                </Square>
                )
            })
            }
        </section>
    )
}