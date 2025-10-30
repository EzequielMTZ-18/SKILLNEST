import express from 'express'
import dotenv from 'dotenv'
import connectionToBD from './config/database.js';
import songsRoutes from './routes/songs.route.js';


dotenv.config();

//Paso 1
const app = express()
const PORT = process.env.PORT || 8080; //en caso de que no reconozca la variable de entorno del .env le asigna 8080


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectionToBD()



app.use("/api/canciones", songsRoutes)


//Paso 2
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})