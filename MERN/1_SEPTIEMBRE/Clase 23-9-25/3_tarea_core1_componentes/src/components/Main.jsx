import styles from './../css/Main.module.css'

const Main = () => {
    return <main className={styles.main}>
        <h1>¡Bienvenidos a mi aplicación de React!</h1>
        <h2>Lista de cosas por hacer:</h2>
        <ol>
            <li>Aprender React</li>
            <li>Practicar con Vite</li>
            <li>Construir proyectos increíbles</li>
        </ol>
    </main>
}

export default Main;