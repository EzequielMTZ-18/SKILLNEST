import { useState, useEffect } from "react"
import axios from 'axios'



const ExtractDataPokemon = ({ setPoke }) => {
    const [pokename, setPokename] = useState("")


    const getPokeData = async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokename}`

        axios(URL).then(
            response => setPoke(response.data.sprites.other.home.front_default)
        )

    }



    return (
        <div>
            <input type="text" name="pokemon" id="pokename" value={pokename} onChange={(e) => setPokename(e.target.value)} />
            <button onClick={getPokeData}>Obtener Pokemon</button>
        </div>
    )
}


export default ExtractDataPokemon