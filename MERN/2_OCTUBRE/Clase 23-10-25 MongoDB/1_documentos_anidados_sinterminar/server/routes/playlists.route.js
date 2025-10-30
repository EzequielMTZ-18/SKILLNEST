import { Router } from "express";
import playlistController from "../controllers/playlists.controller.js";

const playlistsRoutes = Router();

playlistsRoutes.get('/', playlistController.getAll)
playlistsRoutes.post("/", playlistController.createPlaylist)

export default playlistsRoutes