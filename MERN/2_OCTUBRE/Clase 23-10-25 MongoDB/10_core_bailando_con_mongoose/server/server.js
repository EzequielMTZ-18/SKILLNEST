import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import ConnectToDatabase from './config/database.js';
import songsRoutes from './routes/songs.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


//middleware
app.use(express.json());
app.use(urlencoded({ extended: true }))


ConnectToDatabase();



app.use('/api/canciones', songsRoutes)

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

