import express from 'express'
import dotenv from 'dotenv'
import connectionToBD from './config/database.js';
import songsRoutes from './routes/songs.route.js';
import playlistsRoutes from './routes/playlists.route.js';
import cors from 'cors'


dotenv.config();

//Paso 1
const app = express()
const PORT = process.env.PORT || 8080; //en caso de que no reconozca la variable de entorno del .env le asigna 8080


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()) //si lo dejamos vacio cualquiera puede conectarse

//cors decide a quien le da acceso al server

connectionToBD()



app.use("/api/canciones", songsRoutes)
app.use("/api/playlists", playlistsRoutes)

//Paso 2
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})