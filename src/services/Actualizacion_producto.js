import { URL } from "./URL"

export async function Actualizacion_producto(datos){
    return fetch(`${URL}/actualizar-producto`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            id:datos.id,
            descripcion:datos.descripcion,
            cantidad:datos.cantidad,
            imagen:datos.imagen,
            precio:datos.precio,
            tipo:datos.tipo,
            proveedorID:datos.proveedorID
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };