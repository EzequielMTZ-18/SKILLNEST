import express from 'express'

const personas = [
    { name: "Luz", edad: 19 },
    { name: "Eze", edad: 23 }
]

const personaController = {

    obtenerTodos: (req, res) => {
        res.status(201).json(personas)
    },
    crearPersona: (req, res) => {
        console.log(req.body)
        const { name, edad } = req.body;
        if (!name || !edad) {
            return res.status(405).json({ message: "Falta una de las entradas" })
        }
        const newPersona = { name, edad }
        personas.push(newPersona)
        res.status(201).json(newPersona)
    },
    buscarPersona: (req, res) => {
        const name = req.params.name;
        const persona = personas.find(per => per.name === name)
        if (!persona) {
            return res.status(404).json({ message: "Person not found" })
        }
        res.status(201).json(persona)
    }

}


export default personaController
