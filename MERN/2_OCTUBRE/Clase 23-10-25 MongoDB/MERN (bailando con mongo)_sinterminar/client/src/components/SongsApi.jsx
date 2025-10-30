import axios from 'axios'
import { useEffect } from 'react'

const SongsApi = ({ setlistaSongs }) => {
    const getDataSongs = () => {
        const URL = 'http://localhost:8081/api/canciones'
        axios(URL).then(response => {
            setlistaSongs(response.data)
        }).catch((e => console.log(e)))
    }

    useEffect(() => {
        getDataSongs()
        console.log("Use effect console log")
    }, [])
    return (
        <>


        </>
    )
}

export default SongsApi