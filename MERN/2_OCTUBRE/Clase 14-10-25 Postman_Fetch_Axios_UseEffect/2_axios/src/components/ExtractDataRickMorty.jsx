import axios from 'axios'
import { useEffect, useState } from 'react'

const ExtractDataRickMorty = ({ setList }) => {
    const [error, setError] = useState({})

    const getData = () => {
        const url = "https://rickandmortyapi.com/api/character"


        // try {
        //     const response = await axios.get(url);
        //     setList(response.data.results);
        // } catch (e) {
        //     setError(e)
        // }
        // finally {
        //     console.log("termine")
        // }

        //axios ya es asincronico asi que no hace falta declarar async en la funcion
        axios(url).then(
            response => {
                setList(response.data.results)
            }
        ).catch(
            (e) => {
                console.log(e)
                setError(e)
            }
        )
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <button onClick={getData}>
                Mostrar
            </button>

        </div>
    )
}



export default ExtractDataRickMorty