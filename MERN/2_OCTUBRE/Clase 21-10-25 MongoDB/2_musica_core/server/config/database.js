import { connect } from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

const BD = process.env.BD;

const connectionToBD = async () => {
    try {
        await connect(BD)
        console.log(`The BD is up and connected`)
    }
    catch (e) {
        console.log(`The BD had issues, error: ${e}`)
    }
}


export default connectionToBD;