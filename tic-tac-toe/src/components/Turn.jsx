import { Square } from "./Square";
import { TURNOS } from "../logic/constants";

export function Turn ({turno})
{
    return (
        <section className='turn'>
            <Square isSelected={turno == TURNOS.X}>
            {TURNOS.X}
            </Square>
            <Square isSelected={turno == TURNOS.O}>
            {TURNOS.O}
            </Square>
        </section>
    )
    
}