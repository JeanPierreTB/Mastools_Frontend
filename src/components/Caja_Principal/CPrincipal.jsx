import "./Cprincipal.css"

const CPrincipal= ({nombre,cantidad,img})=>{
    return (
        <div>
            <p>{nombre}</p>
            <p>{cantidad}</p>
            <img src={img} alt={nombre}></img>
        </div>
    )


}

export default CPrincipal;