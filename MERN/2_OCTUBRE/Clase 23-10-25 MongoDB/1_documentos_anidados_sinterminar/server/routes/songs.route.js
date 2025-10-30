import { Router } from 'express'
import songsController from "../controllers/songs.controller.js"

const songsRoutes = Router();

songsRoutes.get('/', songsController.getAll)
songsRoutes.post('/', songsController.addSong)
songsRoutes.get('/:id', songsController.getOneSong)
songsRoutes.delete('/:id', songsController.deleteSong)
songsRoutes.put('/:id', songsController.updateOne)



export default songsRoutes;