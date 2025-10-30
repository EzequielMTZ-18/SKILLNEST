import styles from './../css/Contenedor.module.css'
import reactLogo from './../assets/react.svg'

const Contenedor = (people) => {
    const { nombre, edad } = people;
    return <div className={styles.contenedor}>
        <p>{nombre}</p>
        <p>{edad}</p>
        <img src={reactLogo}></img>
    </div>
}

export default Contenedor;