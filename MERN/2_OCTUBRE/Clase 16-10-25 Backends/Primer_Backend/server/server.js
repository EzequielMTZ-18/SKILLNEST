const express = require('express');

//Inicializacion de la App
const app = express();

//Definicion del puerto a usar
const port = 8080

//Middleware

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/personas', (req, res) => {
    res.json({ name: "Ezequiel", edad: 22 })
})

app.listen(port, () => {
    console.log("The server is up and running")
})