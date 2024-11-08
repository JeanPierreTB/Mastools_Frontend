import CPrincipal from "../../components/Caja_Principal/CPrincipal";
import "./Principal.css"

const Principal = ()=>{
    return (
        <div className="container-principal">

            <div>
                <p><strong>Productos de bajo stock</strong></p>
                <div className="container-producto-stock">
                    <i className="fas fa-arrow-left" style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}></i>
                    <CPrincipal nombre="Producto 1" cantidad="10" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                    <CPrincipal nombre="Producto 2" cantidad="20" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                    <i className="fas fa-arrow-right" style={{ fontSize: '17px', cursor: 'pointer' }}></i>
                </div>

                <p><strong>Productos mas solicitados</strong></p>
                <div className="container-producto-stock">
                    <i className="fas fa-arrow-left" style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}></i>
                        <CPrincipal nombre="Producto 1" cantidad="10" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                        <CPrincipal nombre="Producto 2" cantidad="20" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                    <i className="fas fa-arrow-right" style={{ fontSize: '17px', cursor: 'pointer' }}></i>

                </div>
            </div>

            <div className="container-producto-stock-vertical">
                <p id="text"><strong>Solicitudes de clientes</strong></p>
                <div className="container-producto-solicitados">
                <i className="fas fa-arrow-up" style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}></i>

                    <CPrincipal nombre="Producto 1" cantidad="10" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                    <CPrincipal nombre="Producto 2" cantidad="20" img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"/>
                <i className="fas fa-arrow-down" style={{ fontSize: '17px', cursor: 'pointer' }}></i>

                </div>
            </div>
            
            

            
        </div>
    )
}


export default Principal;