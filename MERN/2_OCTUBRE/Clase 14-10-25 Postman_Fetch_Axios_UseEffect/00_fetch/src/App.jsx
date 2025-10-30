import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExtractDataRickMorty from './components/ExtractDataRickMorty'
import ExtractDataPokemon from './components/ExtractDataPokemon'
import ExtractDataGitHub from './components/ExtractDataGitHub'

function App() {
  const [list, setList] = useState([]);

  const [poke, setPoke] = useState("")

  const [userGit, setUserGitHub] = useState("");

  return (
    <>
      <h1>APIs & Fetch</h1>
      <p>API Rick & Morty</p>
      <ExtractDataRickMorty setList={setList} />
      {list.map((character, index) => <img src={character.image} alt={character.name}></img>)}
      <hr />
      <p>API Pokemon</p>
      <ExtractDataPokemon setPoke={setPoke} />
      <img src={poke} alt={poke} />
      <hr />
      <p>API GitHub</p>
      <ExtractDataGitHub setUserGitHub={setUserGitHub} />
      <img src={userGit} alt={userGit} />

    </>
  )
}

export default App
