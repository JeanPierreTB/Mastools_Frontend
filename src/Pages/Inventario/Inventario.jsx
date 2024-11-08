import CInventario from "../../components/Caja_Inventario/CInventario";
import Textfield from "../../components/Textfield/Textfiled";
import "./Inventario.css"

const Inventario= ()=>{
    return (
        <div className="container-inventario">
            <div>
                <h2>Inventario</h2>
                <hr style={{width:'70rem',border:'0.10rem solid black'}}/>
            </div>
            
            <div className="container-filtros">
                <div className="barra">
                
                    <Textfield texto="Nombre del producto"/>
                    <select id="select">
                        <option>Filtros</option>
                        <option>Tipo 1</option>
                        <option>Tipo 2</option>
                        <option>Tipo 3</option>
                        <option>Tipo 4</option>
                    </select>
                </div>
                <button>Agregar productos</button>
            </div>

            <div className="container-inventario-des">
                <CInventario nombre="Producto 1 " imagen="https://aceper.com.pe/wp-content/uploads/2020/07/clavos.jpg" cantidad={10} precio_compra={200.30} precio_venta={250}/>
                <CInventario nombre="Producto 1 " imagen="https://aceper.com.pe/wp-content/uploads/2020/07/clavos.jpg" cantidad={10} precio_compra={200.30} precio_venta={250}/>
                <CInventario nombre="Producto 1 " imagen="https://aceper.com.pe/wp-content/uploads/2020/07/clavos.jpg" cantidad={10} precio_compra={200.30} precio_venta={250}/>

            </div>
        </div>
    )
}


export default Inventario;