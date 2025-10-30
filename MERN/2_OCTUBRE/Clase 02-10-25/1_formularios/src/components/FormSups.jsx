import { useState } from 'react'

const FormSups = ({ agregarSupsApp }) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [link, setImg] = useState("")


    const agregarSupsForm = (e) => {
        e.preventDefault();
        agregarSupsApp(name, description, link)
        setName("")
        setDescription("")
        setImg("")
    }

    return (
        <form onSubmit={(e) => agregarSupsForm(e)}>
            <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="linkImg">Link Image:</label>
                <input type="text" name="linkImg" id="linkImg" value={link} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className="mb-3">
                <button className='btn btn-primary' type="submit">Agregar Super Heroe</button>
            </div>
        </form>

    )
}


export default FormSups