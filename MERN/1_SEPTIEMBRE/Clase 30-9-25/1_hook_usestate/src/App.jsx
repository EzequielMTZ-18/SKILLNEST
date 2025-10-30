import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState('Hola mundo')


  const superData = [{
    name: "Flash", description: "Velocidad"
  }
    , {
    name: "Batman", description: "Dinero"
  }
    , {
    name: "Mujer Maravilla", description: "Fuerza"
  }]

  //creacion del hook para superData
  const [listaSups, setListaSups] = useState(superData);
  //funcion para agregar un superheroe
  const agregarSup = (nombre, descripcion) => {
    setListaSups([...listaSups, { name: nombre, description: descripcion }])
  }


  //Problematica adicional
  const [count2, setCount2] = useState(0)
  const contar2 = () => {
    //setCount2(count2 + 1); este genera problemas asincronicos si intento
    //setCount2(count2 + 1); hacer dos setcounts
    setCount2(previous => previous + 1); //con previous lo soluciona y sabe que se refiere al count2 anterior
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> Contar</button>
      <hr />

      <h1>Mensaje</h1>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje('Hola Skillnest')}>Cambiar mensaje</button>
      <hr />


      <h1>Super Heroes</h1>
      {listaSups.map((superx, index) =>
        <div key={index} style={{ border: "2px solid white", margin: "1rem" }}>
          <p>{superx.name}</p>
          <p>{superx.description}</p>
        </div>)}
      <button onClick={() => agregarSup("Incognito", "?????")}> Agregar Heroe Forma 1</button>
      <button onClick={() => setListaSups([...listaSups, { name: "cocknito", description: "misterious" }])}> Agregar Heroe Forma 2</button>

      <hr />

      <h1>Contador ASINCRONICO</h1>
      <p>{count2}</p>
      <button onClick={() => contar2()}> Contar</button>
    </>


  )
}

export default App
