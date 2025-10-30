import { mongoose } from 'mongoose'


const songsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            minlength: [6, "The title requires at least 6 characters"],
            maxlength: [255, "The title is too long."],
            required: [true, "The title is mandatory"],
        },
        artist: {
            type: String,
            minlength: [10, "The artist name is too short, 10 characters minimun"],
            maxlength: [255, "The artist name is too long and weird, 255 characters max."],
            required: [true, "The artist is mandatory"]
        },
        yearOfRelease: {
            type: Number,
            min: [1900, "That song was from decades ago, is just not possible"],
            max: [2025, "That song can not be from the future"],
            required: [true, "The year of release is mandatory"]
        },
        genre: {
            type: String,
            required: [true, "You have to add the genre"],
        }
    },
    { timestamps: true } //Esto es necesario para que se agreguen el createAt y UpdatedAt
)


const Songs = mongoose.model('songs', songsSchema) // nombre de tabla, modelo de la tabla
//si no existe se crea

export default Songs;