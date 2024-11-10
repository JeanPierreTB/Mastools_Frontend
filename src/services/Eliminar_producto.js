import { URL } from "./URL"

export async function Eliminar_productos(id){
    return fetch(`${URL}/borrar-producto`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            id:id
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  