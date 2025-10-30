import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import styles from '../css/TarjetaProd.module.css'
import { useState } from 'react'


const TarjetaProducto = ({ nombreProducto, precio, descripcion, stockInicial }) => {

    const [stock, setStock] = useState(stockInicial)


    const comprar = () => {
        if (stock > 0) { //Para que el stock no pueda quedar en negativo
            setStock(stock - 1);
        }
    }

    return (
        <div className={`card bg-light ${styles.tarjetaProducto}`}>
            <h2>{nombreProducto}</h2>
            <p className={`${styles.precio}`}>${precio}</p>

            <p className={`${styles.desc}`}>{descripcion}</p>
            <h4 className={stock > 0 ? "text-success" : "text-danger"}>
                {stock > 0 ? `En Stock: ${stock}` : "Agotado"}
            </h4>
            <button className={stock > 0 ? "btn btn-success" : "btn btn-secondary disabled"} onClick={comprar}>
                Comprar
            </button>
        </div >
    );
}


export default TarjetaProducto;