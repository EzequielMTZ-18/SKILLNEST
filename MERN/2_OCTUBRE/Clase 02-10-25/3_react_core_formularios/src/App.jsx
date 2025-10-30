import { useState } from 'react'

import './App.css'
import SuperHeroe from './components/SuperHeroe'
import FormSups from './components/FormSups'

function App() {




  const [listaSups, setListaSups] = useState([])

  const agregarSupsApp = (nuevoHeroe) => {
    setListaSups(prevLista => [...prevLista, nuevoHeroe]);
    console.log("Lista actualizada:", [...listaSups, nuevoHeroe])
  }

  return (
    <>
      <div>
        <h1>Bienvenido a la Liga de Superhéroes</h1>
      </div>
      <div>
        <FormSups agregarSupsApp={agregarSupsApp} />
      </div>

      <div>
        <h2>Super Héroes registrados: </h2>
        {listaSups.map((hero, index) => (<SuperHeroe key={index} hero={hero} />))}
      </div>

    </>
  )
}

export default App
