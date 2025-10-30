import { useState } from "react"
import axios from 'axios'

const ExtractDataGitHub = ({ setUserGitHub }) => {
    const [username, setUsername] = useState("")


    const getDataGit = () => {
        const URL = `https://api.github.com/users/${username}`

        axios(URL).then(
            response => setUserGitHub(response.data)
        )


    }
    return (
        <div>
            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={getDataGit}>Mostrar Persona</button>
        </div>
    )
}


export default ExtractDataGitHub