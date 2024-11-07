import "./Cprincipal.css"

const CPrincipal= ({nombre,cantidad,img})=>{
    return (
        <div className="container-cprincipal">
            <div>
                <p>{nombre}</p>
                <p>{cantidad}</p>
            </div>
            
            <img id="imagen" src={img} alt={nombre}></img>
        </div>
    )


}

export default CPrincipal;