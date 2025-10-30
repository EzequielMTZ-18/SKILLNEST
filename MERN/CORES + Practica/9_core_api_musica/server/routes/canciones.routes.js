import { Router } from 'express'
import { canciones } from '../data/data.js'



const routeCanciones = Router();




routeCanciones.get('/', (req, res) => {
    res.status(201).json(canciones)
})

routeCanciones.post('/', (req, res) => {
    console.log(req.body)
    const { id, titulo, artista, album, duracion, genero, fechaLanzamiento } = req.body
    if (!id ||
        !titulo ||
        !artista ||
        !album ||
        !duracion ||
        !genero ||
        !fechaLanzamiento) {
        return res.status(405).json({ message: "Falta una de las propiedades" })
    }
    const newCancion = { id, titulo, artista, album, duracion, genero, fechaLanzamiento }
    canciones.push(newCancion);
    res.status(201).json({
        message: "Cancion agregada correctamente",
        data: newCancion
    })

})



routeCanciones.get('/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const existe = canciones.find(cancion => cancion.titulo === titulo)

    if (!existe) {
        return res.status(404).json({ message: "Titulo no encontrado" })
    }

    res.status(201).json(existe)
})


export default routeCanciones