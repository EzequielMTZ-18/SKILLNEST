import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import ConnectToDatabase from './config/database.js';
import songsRoutes from './routes/songs.route.js';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


//middleware
app.use(express.json());
app.use(urlencoded({ extended: true }))

//cors
app.use(cors())   //Asi se usa en deployment local para ver que todo funque

// app.use(cors( //Pero en produccion se usa algo asi donde se especifica que Servers van a tener acceso
//     //a tu server, que links se pueden conectar a nuestra API
//     {
//         origin: [
//             'http://localhost:5173',
//             'https://learning.skillnest.com'
//         ],
//         credentials: true
//     }
// ))


ConnectToDatabase();



app.use('/api/canciones', songsRoutes)

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

