import "./Perfil.css"

const Perfil =()=>{
    return(
        <div className="container-perfil">
            <h2><strong>Perfil</strong></h2>
            <hr style={{width:'70rem',border:'0.10rem solid black'}}/>
            <p><strong>Bienvenido,estimado Proveedor!</strong></p>
            <div className="container-perfil-datos">
                <div className="container-perfil-datos-foto">
                    <img src="https://www.21-draw.com/wp-content/uploads/2022/06/character-archetype-the-hero.jpg" alt="foto"></img>
                    <p>Random forest</p>
                </div>

                <div className="container-perfil-datos-info">
                    <p><strong>Apellido:</strong> Random state</p>
                    <p><strong>Cargo:</strong> Random state</p>
                    <p><strong>Correo:</strong> Random state</p>
                    <p><strong>DNI:</strong> Random state</p>
                </div>
                
            </div>

        </div>
    )
}

export default Perfil;