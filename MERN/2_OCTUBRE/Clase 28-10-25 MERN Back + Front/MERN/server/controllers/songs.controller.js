import Songs from "../models/songs.model.js";



const songsController = {
    getAll: async (req, res) => {
        try {
            const songsList = await Songs.find();
            return res.status(201).json(songsList);
        }
        catch (e) {
            return res.status(400).json(e);
        }
    },
    addSong: async (req, res) => {
        const { title, artist, yearOfRelease, genre } = req.body; //sacamos los datos que vienen en el body
        const newSongData = { title, artist, yearOfRelease, genre }//asignamos los datos a un nuevo array

        try {
            const newSongAdded = await Songs.create(newSongData);
            res.status(201).json(newSongAdded)
        }
        catch (e) {


            //BUENA FORMA DE MANEJAR ERRORES, EL FORMATO QUE DEVUELVE DE LOS ERRORES ES FACIL DE
            //LEER Y ENTENDER
            const messages = {};
            if (e.name === "ValidationError") {
                //Hay que hacer ifs dependiendo del nombre del error, por ejemplo el
                //required no devuelve errores de tipo ValidationError, asi que hay que adaptarlo a cada tipo.
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
            }

            return res.status(400).json({ errors: { ...messages } })

            //HASTA ACA
        }
    },
    getSong: async (req, res) => {
        const id = req.params.id; //para este caso la info se saca del parametro que viene en la ruta

        try {
            const oneSong = await Songs.findById(id);
            if (!oneSong) {
                return res.status(404).json({ message: "The id you indicated does not exist" })
            }
            res.status(201).json(oneSong);
        }
        catch (e) {
            return res.status(400).json({ error: "Something on the server failed" }) //RECOMENDADO USAR ERRORES CUSTOM EN DEPLOYS PROFESIONALES

        }
    },
    deleteSong: async (req, res) => {
        const id = req.params.id;

        try {
            const deletedSong = await Songs.findByIdAndDelete(id);//metodos de mongoose
            if (!deletedSong) {
                return res.status(404).json({ message: "The id you indicated does not exist" })
            }
            res.status(201).json({ message: "Song deleted succesfully" })
        }
        catch (e) {
            return res.status(400).json({ error: "Something on the server failed - Delete controller" })
        }
    },
    updateSong: async (req, res) => {
        const id = req.params.id; //Sacamos el id que se envia por params
        const { title, artist, yearOfRelease, genre } = req.body; //y el resto de datos viene en el body
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
            const updatedSong = await Songs.findByIdAndUpdate(id, dataToUpdate, { new: true, runValidators: true });
            //New true hace que devuelva el objeto actualizado,
            //ya que el findbyid primero devuelve lo que encuentra 
            // y luego ejecuta el update con los datos nuevos 
            // Y el RUNVALIDATORS hace que se verifique las validaciones, ya que estas se ejecutan solo al crear pero
            //  no al actualizar
            if (!updatedSong) {
                return res.status(404).json({ message: "The id you tried to update does not exist" })
            }
            res.status(201).json(updatedSong);
        }
        catch (e) {
            return res.status(400).json({ error: "Something on the server failed - Update controller" })
        }
    }
}


export default songsController;