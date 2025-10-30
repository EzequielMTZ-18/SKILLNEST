//Importaciones
import express from 'express'

const app = express();

const PORT = 8081;


const personas = [
    { name: "Luz", edad: 19 },
    { name: "Kevin", edad: 20 },
    { name: "Eze", edad: 22 }
]


//Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Rutas

app.use(express.static("public"))

app.get('/personas', (req, res) => {
    res.status(201), json(personas)
})

app.post('/personas', (req, res) => {
    console.log(req.body)
    const { name, edad } = req.body;
    if (!name || !edad) {
        return res.status(405).json({ message: "Falta una de las entradas" })
    }
    const newPersona = { name, edad }
    personas.push(newPersona)
    res.status(201).json(newPersona)
})


app.get('/personas/:name', (req, res) => {
    const name = req.params.name;
    const persona = personas.find(per => per.name === name)
    if (!persona) {
        return res.status(404).json({ message: "Person not found" })
    }
    res.status(201).json(persona)
})




//Manejo de rutas complejas
//no lo copie

//Listen
app.listen(PORT, () => {
    console.log(`The server is up and running with the port ${PORT}`)
})