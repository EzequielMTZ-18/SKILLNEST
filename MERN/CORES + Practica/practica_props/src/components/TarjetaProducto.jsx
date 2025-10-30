import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import styles from '../css/TarjetaProd.module.css'


const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {
    return (
        <div className={`card bg-light ${styles.tarjetaProducto}`}>
            <h2>{nombreProducto}</h2>
            <p className={`${styles.precio}`}>${precio}</p>

            <p>{descripcion}</p>
            <h4 className={enStock ? "text-success" : "text-danger"}>
                {enStock ? "En stock" : "Agotado"}
            </h4>
        </div >
    );
}


export default TarjetaProducto;