import { URL } from "./URL"

export async function Comprar_producto(id_producto,id_admin,cantidad){
    return fetch(`${URL}/comprar-producto`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            id_producto:id_producto,
            id_administrador:id_admin,
            cantidad:cantidad

        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };