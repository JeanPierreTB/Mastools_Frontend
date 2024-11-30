import { URL } from "./URL";

export async function Datos_administrador(adminID) {
    return fetch(`${URL}/obtener-datos-administrador/${adminID}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => {
        console.error(`Ocurrió un error: ${e}`);
    });
}