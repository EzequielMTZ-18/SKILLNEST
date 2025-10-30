import Playlists from "../models/playlists.model.js";
import { Songs } from "../models/songs.model.js";

const playlistController = {
    getAll: async (req, res) => {
        try {
            const allPlaylist = await Playlists.find();
            return res.status(201).json(allPlaylist);
        }
        catch (e) {
            return res.status(400).json(e);
        }
    },
    addPlaylist: async (req, res) => {
        const { name, songs } = req.body;

        try {
            const foundSongs = await Songs.find({ title: { $in: songs } })
            if (foundSongs.length !== songs.length) {
                return res.status(400).json({ message: "One of the songs or more were not found" })
            }
            const newPlaylistData = {
                name: name,
                songs: foundSongs
            }

            const savedPlaylist = await Playlists.create(newPlaylistData);
            res.status(201).json(savedPlaylist)
        }
        catch (e) {
            return res.status(400).json(e);

        }
    }
}

export default playlistController