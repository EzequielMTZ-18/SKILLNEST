import { Router } from 'express'
import { playlists } from '../data/data.js'



const routePlaylist = Router();


routePlaylist.get('/', (req, res) => {

    res.status(201).json(playlists)
})

routePlaylist.get("/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    const playlistEncontrada = playlists.find(p => p.nombre === nombre)


    if (!playlistEncontrada) {
        return res.status(404).json({ message: "Playlist no encontrada" });
    }

    res.status(200).json(playlistEncontrada);
});



export default routePlaylist