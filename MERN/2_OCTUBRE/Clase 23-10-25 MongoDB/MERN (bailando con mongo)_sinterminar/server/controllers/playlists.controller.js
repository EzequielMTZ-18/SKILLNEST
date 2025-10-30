//import playlist
//import schema de songs


const playlistController = {
    getAll: async (req, res) => {
        try {
            const allPlaylist = await Playlist.find();
            res.status(201).json(allPlaylist)
        }
        catch (e) {
            return res.status(400).json(e)
        }
    },
    createPlaylist: async (req, res) => {
        const { name, songs } = req.body;
        try {
            const foundSongs = await Songs.find({ title: { $in: songs } });//saca las canciones que
            if (foundSongs.length !== songs.length) {
                return res.status(400).json({ message: "One of the songs or both of them were not found" })
            }
            const newArray = {
                name: name,
                songs: foundSongs
            }
            const savedPlaylist = await Playlist.create(newArray)
            res.status(201).json(savedPlaylist)
        } catch (e) {
            return res.status(400).json(e)
        }
    }
}


export default playlistController