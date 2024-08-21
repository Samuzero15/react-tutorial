import { useEffect, useState } from "react"

const CATPIC_ENDPOINT_URL = 'https://cataas.com/cat/says/{primerasPalabras}?fontSize=25&fontColor=red'

export function useImagenGato( {datoCurioso, nPalabras} ) {
    const [imagenGato, setImagenGato] = useState()
    
    useEffect(() => {
        if(!datoCurioso) return

        const primerasPalabras = datoCurioso.split(" ", nPalabras).join(" ")
        const catPicEndPointPalabras = CATPIC_ENDPOINT_URL.replace("{primerasPalabras}", primerasPalabras)
        setImagenGato(catPicEndPointPalabras)
    },[datoCurioso])

    return { imagenGato }
}