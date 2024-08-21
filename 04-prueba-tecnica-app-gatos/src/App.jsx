import React, { useEffect, useState } from "react"
import './App.css'
import { useImagenGato } from "./hooks/useImagenGato"
import { nuevoDatoCurioso } from "./logic/logic"

export function App () {
    const [datoCurioso, setDatoCurioso] = useState()
    const [primeraPalabras, setPrimeraPalabras] = useState()
    const nPalabras = 4
    const {imagenGato} = useImagenGato({datoCurioso, nPalabras: nPalabras})

    useEffect(()=>{
        nuevoDatoCurioso().then(setDatoCurioso)
    }, [])

    function handleClick(){
        nuevoDatoCurioso().then(setDatoCurioso)
    }
    useEffect(()=>{
        if(!datoCurioso) return
        setPrimeraPalabras(datoCurioso.split(" ", nPalabras).join(" "))
    }, [datoCurioso])
    /*
    
    */
    return (
        <main>
            <h2>
                App de gatos
            </h2>
            <button onClick={handleClick}>Siguiente dato</button>
            {
                datoCurioso && <p>{datoCurioso}</p>
            }
            
            {
            datoCurioso && <>
                <p>Las primeras palabras de este dato es: <strong>{primeraPalabras}</strong></p>
                <img src={imagenGato} alt={"Imagen de gato con la(s) palabra(s) '"+ primeraPalabras +"'"} srcSet="" />
            </>
            }
            
            
        </main>
    
    )  
}