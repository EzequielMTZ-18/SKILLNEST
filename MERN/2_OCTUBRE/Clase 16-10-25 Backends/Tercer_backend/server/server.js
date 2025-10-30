import express from 'express'
import routePersona from './routes/personas.routes.js';


const app = express();
const PORT = 8081;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/personas', routePersona)


//Listener
app.listen(PORT, () => {
    console.log("The server is up and running")
})


