import { useState } from 'react'

const FormSups = ({ agregarSupsApp }) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [linkImg, setImg] = useState("")

    //validadores
    const [errores, setErrores] = useState({ name: "", description: "", link: "" })


    const agregarSupsForm = (e) => {
        e.preventDefault();
        //validaciones de entrada, la forma complicada y fea igual 
        if (name == "") {
            setErrores({ ...errores, name: "El nombre es obligatorio" })
            return
        }
        if (description == "") {
            setErrores({ ...errores, description: "La descripcion es obligatoria" })
            return
        }
        if (linkImg == "") {
            setErrores({ ...errores, link: "El link es obligatorio" })
            return
        }
        //enviamos info al componente padre
        agregarSupsApp(name, description, linkImg)


        //limpiamos el formulario
        setName("")
        setDescription("")
        setImg("")
        setErrores({ name: "", description: "", link: "" })
    }

    return (
        <form onSubmit={(e) => agregarSupsForm(e)}>
            <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                {errores.name ? <p>{errores.name}</p> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                {errores.description ? <p>{errores.description}</p> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="linkImg">Link Image:</label>
                <input type="text" name="linkImg" id="linkImg" value={linkImg} onChange={(e) => setImg(e.target.value)} />
                {errores.link ? <p>{errores.link}</p> : ""}
            </div>
            <div className="mb-3">
                <button className='btn btn-primary' type="submit">Agregar Super Heroe</button>
            </div>
        </form>

    )
}


export default FormSups