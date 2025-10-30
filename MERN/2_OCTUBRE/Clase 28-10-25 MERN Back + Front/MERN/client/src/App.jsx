import { useState } from 'react'
import './App.css'
import SongsApi from './components/SongsApi'

function App() {
  const [listaSongs, setlistaSongs] = useState({})

  return (
    <>
      <h1>This is our first MERN Stack App</h1>
      <SongsApi setlistaSongs={setlistaSongs} />

      <ol>
        {listaSongs.map(song => <li>{song.title}</li>)}

      </ol>
    </>
  )
}

export default App
