import express from 'express'

import routeCanciones from './routes/canciones.routes.js';
import routePlaylist from './routes/playlist.routes.js';



const app = express();
const PORT = 8080;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//rutas
app.use('/api/canciones', routeCanciones)
app.use('/api/playlists', routePlaylist)


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})