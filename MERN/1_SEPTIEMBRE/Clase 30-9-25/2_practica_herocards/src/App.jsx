import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import SupCard from './components/SupCard'


function App() {
  const supersData = [
    {
      name: "Flash",
      description: "Hi, I am Flash and there is no one as fast as me",
      likes: 0,
      color: "warning",
    },
    {
      name: "Batman",
      description: "I am Batman. Prep time solves everything.",
      likes: 3,
      color: "dark",
    },
    {
      name: "Wonder Woman",
      description: "Truth, compassion, and a very shiny lasso.",
      likes: 5,
      color: "primary",
    },
    {
      name: "Superman",
      description: "Up, up, and away.",
      likes: 2,
      color: "info",
    },
  ];

  const [supers, setSupers] = useState(supersData);

  const agregarSup = (name, description, likes, color) => {
    setSupers([...supers, { name, description, likes, color }]);
  }

  return (
    <>
      <div className='listaSups'>
        {supers.map((superx, index) => <SupCard name={superx.name} description={superx.description} likes={superx.likes} color={superx.color} key={index} />)}
        <div>
          <button className='btn btn-success' onClick={() => agregarSup("Ms, Incognito", "Desc", 10, "dark")}>Agregar</button>
        </div>
      </div>
    </>
  )
}

export default App
