import { useState } from "react"

const ExtractDataGitHub = ({ setUserGitHub }) => {
    const [username, setUsername] = useState("")


    const getDataGit = async () => {
        const URL = `https://api.github.com/users/${username}`
        const response = await fetch(URL)
        const data = await response.json()
        setUserGitHub(data.avatar_url);


    }
    return (
        <div>
            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={getDataGit}>Mostrar Persona</button>
        </div>
    )
}


export default ExtractDataGitHub