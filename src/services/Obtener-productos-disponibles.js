import { URL } from "./URL";

export async function Obtener_productos_disponibles() {
    return fetch(`${URL}/obtener-productos-disponibles`)
            .then((response)=>response.json())
            .then((data)=>data)
            .catch((e)=>{console.error(`Ocurrio un error ${e}`)})
}