import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const DB = process.env.DB_URL


const ConnectToDatabase = async () => {
    try {
        await connect(DB)
        console.log(`The database is up and connected from ATLAS MONGO DB`)
    }
    catch (e) {
        console.log(`The database had issues`, e)
    }
}

export default ConnectToDatabase;