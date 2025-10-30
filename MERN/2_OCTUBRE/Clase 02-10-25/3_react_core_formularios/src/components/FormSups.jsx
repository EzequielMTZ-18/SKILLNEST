import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react'
import styles from "./../css/FormSups.module.css"


const FormSups = ({ agregarSupsApp }) => {

    //hook que contiene todos los datos del formulario, mas optimo
    const [formData, setFormData] = useState({
        HeroName: "",
        HeroSurname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    //hook para validar
    const [error, setError] = useState("")


    const registrarHeroe = (e) => {
        e.preventDefault();

        if (formData.HeroName.length < 4) {
            setError("El nombre debe contener minimo 4 caracteres")
            return;
        }
        if (formData.HeroSurname.length < 4) {
            setError("El Apellido debe contener minimo 4 caracteres")

            return;
        }
        if (formData.email.length < 10 || !formData.email.includes("@")) {
            setError("El email debe contener minimo 10 caracteres y tener @")
            return;
        }
        if (formData.password.length < 12) {
            setError("La contraseña debe tener al menos 12 caracteres")
            return;
        }
        if (formData.confirmPassword !== formData.password) {
            setError("Las contraseñas deben coincidir")
            return;
        }

        setError("");

        agregarSupsApp(formData)


    }

    return (
        <form className={styles.formulario} onSubmit={(e) => registrarHeroe(e)}>
            <h1>Registro de superheroes</h1>

            <div className="mb-3">
                <label htmlFor='nombre'>Nombre:</label>
                <input type="text" className="form-control" name="nombre" id="nombre" value={formData.HeroName} onChange={(e) => setFormData({ ...formData, HeroName: e.target.value })} />

            </div>
            <div className="mb-3">
                <label htmlFor='apellido'>Apellido:</label>
                <input type="text" className="form-control" name="apellido" id="apellido" value={formData.HeroSurname} onChange={(e) => setFormData({ ...formData, HeroSurname: e.target.value })} />

            </div>
            <div className="mb-3">
                <label htmlFor='email'>Correo Electrónico:</label>
                <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            </div>
            <div className="mb-3">
                <label htmlFor='password'>Contraseña:</label>
                <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

            </div>
            <div className="mb-3">
                <label htmlFor='confirmPass'>Confirmar Contraseña:</label>
                <input type="password" className="form-control" name="confirmPass" id="confirmPass" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />

            </div>
            {error ? <p className={styles.error}>{error}</p> : ''
            }
            <button type="submit">
                Crear Superhéroe
            </button>
            <img src="src/assets/Heroe.png"></img>
        </form >


    )
}


export default FormSups