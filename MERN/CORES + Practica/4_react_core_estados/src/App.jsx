import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'
import TarjetaProducto from './components/TarjetaProducto.jsx'

function App() {

  return (
    <>
      <div className="container">
        <TarjetaProducto nombreProducto={"Laptop"} precio={1500} descripcion={"Una potente laptop para trabajar y jugar"} stockInicial={10} />
        <TarjetaProducto nombreProducto={"Smarthphone"} precio={800} descripcion={"Un smartphone de ultima generación"} stockInicial={2} />
        <TarjetaProducto nombreProducto={"Auriculares"} precio={200} descripcion={"Auriculares con cancelación de ruido"} stockInicial={0} />
        <TarjetaProducto nombreProducto={"Monitor"} precio={300} descripcion={"Monitor 4K para una experiencia visual increible"} stockInicial={15} />
      </div >
    </>
  )
}

export default App
