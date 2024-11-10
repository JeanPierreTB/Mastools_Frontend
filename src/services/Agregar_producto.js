import { URL } from "./URL"

export async function Agregar_producto(datos,id){
    return fetch(`${URL}/crear-producto`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            descripcion:datos.descripcion,
            cantidad:datos.cantidad,
            imagen:datos.imagen,
            precio:datos.precio,
            tipo:datos.tipo,
            proveedorID:id
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  