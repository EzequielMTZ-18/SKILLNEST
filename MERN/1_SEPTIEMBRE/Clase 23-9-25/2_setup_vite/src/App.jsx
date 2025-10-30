import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      </header>
      <main>
        <h1>Bienvenidos a mi pagina REACT</h1>
        <h2>Lista de cosas que hay por hacer</h2>
        <ol>
          <li>Aprender React</li>
          <li>Practicar con Vite</li>
          <li>Construir proyectos increibles</li>
        </ol>
      </main>
      <footer></footer>
    </>
  )
}

export default App
