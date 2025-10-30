import { useState } from "react"

const ExtractDataPokemon = ({ setPoke }) => {
    const [pokename, setPokename] = useState("")


    const getPokeData = async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokename}`
        const response = await fetch(URL)
        const data = await response.json()

        setPoke(data.sprites.other.home.front_default)


    }
    return (
        <div>
            <input type="text" name="pokemon" id="pokename" value={pokename} onChange={(e) => setPokename(e.target.value)} />
            <button onClick={getPokeData}>Obtener Pokemon</button>
        </div>
    )
}


export default ExtractDataPokemon