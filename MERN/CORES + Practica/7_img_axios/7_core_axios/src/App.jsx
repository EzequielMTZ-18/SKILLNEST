import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [imageUrl, setImageUrl] = useState("")
  //creamos un loading para mostrar
  const [loading, setLoading] = useState(false)



  const cargarImagen = () => {
    setLoading(true);
    const URL = "https://api.thecatapi.com/v1/images/search?limit=1"

    axios(URL)
      .then(response => {
        console.log(response.data)
        setImageUrl(response.data[0].url)
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }


  //useEffect se ejecuta una vez al renderizar componente
  useEffect(() => {
    cargarImagen();
  }, [])



  return (
    <>
      <div>
        <h1>Random Image Generator</h1>

        <button className='btn btn-primary' onClick={cargarImagen}>
          Fetch a new random image
        </button>
        <hr />
        {loading ? <p>Cargando imagen...</p> : imageUrl
          ? <img src={imageUrl} alt="Random Image"
            style={{ width: "600px", height: "400px", borderRadius: "10px" }}></img> : null}
      </div>
    </>
  )
}

export default App
