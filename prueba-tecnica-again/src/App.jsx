import React, { useEffect, useState } from "react"

const CATFACT_ENDPOINT_URL = 'https://catfact.ninja/fact'
const CATPIC_ENDPOINT_URL = 'https://cataas.com/cat/says/{primeraPalabra}?fontSize=25&fontColor=red'

export function App () {
    const [datoCurioso, setDatoCurioso] = useState()
    const [primeraPalabra, setPrimeraPalabra] = useState()

    useEffect(()=>{
        fetch(CATFACT_ENDPOINT_URL)
        .then(response => response.json())
        .then(data => setDatoCurioso(data.fact)
        )
    }, [])

    useEffect(()=>{
        if(datoCurioso) setPrimeraPalabra(datoCurioso.split(" ")[0])
    }, [datoCurioso])

    return (
        <main>
            <h2>
                App de gatos
            </h2>
            {
                datoCurioso && <p>{datoCurioso}</p>
            }
            
            {
            primeraPalabra && <>
                <p>La primera palabra de este dato es: <strong>{primeraPalabra}</strong></p>

                <img src={CATPIC_ENDPOINT_URL.replace("{primeraPalabra}", primeraPalabra)} alt={"Imagen de gato con la palabra "+ primeraPalabra +""} srcSet="" />
            </>
            }
            
            
        </main>
    
    )  
}