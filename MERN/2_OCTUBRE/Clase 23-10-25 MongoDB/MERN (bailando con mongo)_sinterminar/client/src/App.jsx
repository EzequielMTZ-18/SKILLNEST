import { useState } from 'react'
import './App.css'
import SongsApi from './components/SongsApi.jsx'

function App() {

  const [listaSongs, setlistaSongs] = useState([])


  return (
    <>
      <h1>This is our first MERN Stack app</h1>
      <SongsApi setlistaSongs={setlistaSongs} />


      <ol>
        {listaSongs.map(songs => <li>{songs.title}</li>)}
      </ol>
    </>
  )
}

export default App
