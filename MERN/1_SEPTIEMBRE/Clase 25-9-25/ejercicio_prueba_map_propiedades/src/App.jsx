
import './App.css'
import Contenedor from './components/contenedor'

function App() {
  let people = [{ name: "Kevin", edad: 35 }, { name: "Iris", edad: 23 }, { name: "Camila", edad: 18 }]

  return (
    <>
      <header></header>
      <main>

        {people.map(person => {
          return <Contenedor nombre={person.name} edad={person.edad} />
        })}

      </main>
      <footer></footer>
    </>

  )
}

export default App
