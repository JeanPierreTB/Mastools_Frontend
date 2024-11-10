import { URL } from "./URL"

export async function Actualizacion_datos(datos,id){
    return fetch(`${URL}/actualizar-proveedor`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            id:id,
            nombre:datos.nombre,
            apellido:datos.apellido,
            correo:datos.correo,
            contrasena:datos.contrasena,
            dni:datos.dni,
            foto:datos.foto || ''
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };