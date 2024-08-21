
const CATFACT_ENDPOINT_URL = 'https://catfact.ninja/fact'

export const nuevoDatoCurioso = () => {
    return fetch(CATFACT_ENDPOINT_URL)
    .then( response => response.json())
    .then( data => {
        const { fact } = data
        return fact
    })
}