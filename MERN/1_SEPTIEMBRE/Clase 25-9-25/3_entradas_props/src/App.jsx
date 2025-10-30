
import './App.css'
import DetalleLista from './components/DetalleLista'
import DetalleListaProps from './components/DetalleListaProps'

function App() {
  let arrayTest = [1, 4, 5, 6];
  return (
    <>
      <ul>
        <DetalleLista nombre="Kevin" apellido="Jacome" />
        <DetalleListaProps nombre="Paula" apellido="Cego" />
        <DetalleListaProps nombre="Paula" apellido="Cego" edad="50" />
      </ul>
      <p>{arrayTest}</p>
      <ul>
        {arrayTest.map(numero => {
          return <li>{numero}</li>
        })}
      </ul>
    </>
  )
}

export default App
