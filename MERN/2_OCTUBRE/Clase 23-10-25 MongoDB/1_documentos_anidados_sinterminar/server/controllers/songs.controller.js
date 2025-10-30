import Songs from "../models/songs.model.js";

const songsController = {
    getAll: async (req, res) => {
        try {
            const songs = await Songs.find();
            return res.status(201).json(songs)
        }
        catch (e) {
            return res.status(400).json(e);
        }
    },
    addSong: async (req, res) => {
        const { title, artist, yearOfRelease, genre } = req.body;
        const newSongData = { title, artist, yearOfRelease, genre }
        try {
            const newSong = await Songs.create(newSongData);
            res.status(201).json(newSong);
        } catch (e) {

            const messages = {};
            if (e.name === "ValidationError") {
                Object.keys(e.errors).foreach(key => {
                    messages[key] = e.erros[key].message;
                })
            }

            return res.status(400).json({ errors: { ...messages } })
        }
    },
    getOneSong: async (req, res) => {
        const id = req.params.id;
        try {
            const oneSong = await Songs.findById(id);
            if (!oneSong) {
                return res.status(404).json({ message: "The id does not exist" })
            }
            res.status(201).json(oneSong);
        } catch (e) {
            return res.status(400).json({ error: "The server failed" })
        }
    },
    deleteSong: async (req, res) => {
        const id = req.params.id;

        try {
            const deletedSong = await Songs.findByIdAndDelete(id);
            if (!deletedSong) {
                return res.status(404).json({ message: "The id does not exist" })
            }
            res.status(201).json({ message: "The song was succesfully deleted" })
        } catch (e) {
            return res.status(400), json({ error: "The operation failed" })
        }
    },
    updateOne: async (req, res) => {
        const id = req.params.id;
        const { title, artist, yearOfRelease, genre } = req.body;

        const dataToUpdate = {};
        if (title) {
            dataToUpdate.title = title;
        }
        if (artist) {
            dataToUpdate.artist = artist;
        }
        if (yearOfRelease) {
            dataToUpdate.yearOfRelease = yearOfRelease;
        }
        if (genre) {
            dataToUpdate.genre = genre;
        }


        try {
            const updatedSong = await Songs.findByIdAndUpdate(id, dataToUpdate, { new: true, runValidator: true })
            if (!updatedSong) {
                return res.status(404).json({ message: "The id does not exist" })
            }
            res.status(201).json(updatedSong)
        }
        catch (e) {
            return res.status(400).json(e)
        }
    }

}


export default songsController;