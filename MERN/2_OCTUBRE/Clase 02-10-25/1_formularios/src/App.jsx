import { useState } from 'react'

import './App.css'
import SuperHeroe from './components/SuperHeroe'
import FormSups from './components/FormSups'

function App() {


  const SuperHeroes = [
    { name: "Flash", description: "I am super fast", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRudnBoOWFsNjJ4NTNmenJkNGkxYng2OWxuanc1NzJsb3pvd2cyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUOxeZUc8UFwMgH2MM/giphy.gif" },
    { name: "Batman", description: "Villians should suffer", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd1NWFrZ3Q1N2xmM2c4NXd6d3VoMjJxenRoc2t3a3RpdjViem5iZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lTLV2erK8vf1MIz4Rk/giphy.gif" },
    { name: "Aquaman", description: "I am the kind of atlantis", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg2N201cDFwdTl3YzY2MHBheTQzdmtwY3lodHlqODZobWdxbzhxMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/V4X14bU1vlHfa/giphy.gif" }
  ]


  const [listaSups, setListaSups] = useState(SuperHeroes)

  const agregarSupsApp = (name, description, linkImg) => {
    setListaSups([...listaSups, { name, description, linkImg }])
  }

  return (
    <>
      <div>
        <h1>BD SuperHeroes</h1>
      </div>
      <div className='tarjetasHeroes'>
        {
          listaSups.map((superh, index) => <SuperHeroe name={superh.name} description={superh.description} linkImg={superh.linkImg} key={index} />)
        }
      </div>
      <div>
        {/*
        <button className='btn btn-danger' onClick={() => setListaSups([...listaSups, { name: "Poi", description: "The Poiest of all", linkImg: "https://media1.tenor.com/m/FuO4O-cF47gAAAAd/suspicious-eyes.gif" }])}>Agregar</button>
        */}
      </div>
      <div>
        <FormSups agregarSupsApp={agregarSupsApp} />
      </div>
    </>
  )
}

export default App
