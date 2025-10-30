import { Router } from 'express'
import playlistController from "../controllers/playlists.controller.js";


const playlistRoutes = Router();


playlistRoutes.get('/', playlistController.getAll);
playlistRoutes.post('/', playlistController.addPlaylist)



export default playlistRoutes

